
import React, { useEffect, useRef } from 'react';

// Load PDF.js and Supabase via CDN
const PDFJS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js';
const PDFJS_WORKER = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
const SUPABASE_URL = 'https://edjymqpwfuthocvujcgf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkanltcXB3ZnV0aG9jdnVqY2dmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU5OTE0NTgsImV4cCI6MjA4MTU2NzQ1OH0.nd--xDkgSCVurgJ554ab8Up4G7gR0ZtAvym1fSitR_Q';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function getPdfPath(token) {
  const pdfId = token.split("_")[0];
  switch (pdfId) {
    case "PB":
      return "personality-blueprint/The Text Architect.pdf";
    case "WO":
      return "personality-blueprint/Working Openers.pdf";
    default:
      alert("Invalid product ID in token.");
      return null;
  }
}

const Viewer = () => {
  const viewerRef = useRef();
  const watermarkRef = useRef();

  useEffect(() => {
    (async () => {
      await loadScript(PDFJS_URL);
      await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2');
      const pdfjsLib = window['pdfjs-dist/build/pdf'];
      pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER;
      const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

      // Get params
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const email = params.get('email');
      const phone = params.get('phone');
      if (!token || !email || !phone) {
        alert('Invalid or incomplete access link.');
        return;
      }
      const pdfPath = getPdfPath(token);
      if (!pdfPath) return;

      // PIN protection
      const stored = localStorage.getItem('pin_' + token);
      let pin = stored;
      if (!stored) {
        pin = prompt('Enter your 4-digit PIN:');
        if (!pin) {
          alert('PIN is required.');
          return;
        }
        localStorage.setItem('pin_' + token, pin);
      }

      // Watermark
      if (watermarkRef.current) {
        watermarkRef.current.innerText = `Purchased by: ${email} | ${phone}`;
      }

      // Disable downloads
      document.addEventListener('contextmenu', e => e.preventDefault());
      document.addEventListener('keydown', e => {
        if (e.ctrlKey && ['s', 'p', 'u'].includes(e.key.toLowerCase())) {
          e.preventDefault();
        }
      });

      // Get signed URL
      const { data, error } = await supabaseClient.storage
        .from('life-pdfs')
        .createSignedUrl(pdfPath, 3600);
      if (error || !data || !data.signedUrl) {
        console.error('Signed URL error:', error, data);
        alert('Unable to load your PDF.');
        return;
      }
      const signedUrl = data.signedUrl;

      // Load PDF
      const container = viewerRef.current;
      container.innerHTML = '';
      const loadingTask = pdfjsLib.getDocument(signedUrl);
      const pdf = await loadingTask.promise;
      const isMobile = window.innerWidth <= 600;
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        let scale = 1.25;
        let viewport;
        const dpr = window.devicePixelRatio || 1;
        if (isMobile) {
          // Fit to container width exactly, and render at device pixel ratio for sharpness
          const containerWidth = container.offsetWidth || window.innerWidth;
          const unscaledViewport = page.getViewport({ scale: 1 });
          scale = (containerWidth * dpr) / unscaledViewport.width;
          viewport = page.getViewport({ scale });
        } else {
          // Further reduce scale for desktop to fit more content
          scale = scale * 0.6;
          viewport = page.getViewport({ scale });
        }
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        if (isMobile) {
          canvas.style.width = '100vw';
          canvas.style.height = (viewport.height / dpr) + 'px';
        } else {
          canvas.style.width = '100%';
          canvas.style.height = 'auto';
        }
        container.appendChild(canvas);
        await page.render({ canvasContext: ctx, viewport }).promise;
      }
    })();
  }, []);

  return (
    <div
      className="dark pdf-bg"
      style={{
        minHeight: '100vh',
        background: '#000',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background images, repeated and more visible */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.25, // Increased visibility
          backgroundImage: `url('/animal.png'), url('/professor.png'), url('/tommy.png')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px',
          backgroundPosition: '0 0, 150px 150px, 300px 300px',
          mixBlendMode: 'lighten',
        }}
      />
      <div
        ref={viewerRef}
        className="pdfViewer"
        style={{
          padding: 20,
          overflowY: 'auto',
          position: 'relative',
          zIndex: 1,
          margin: '0 auto',
          width: '100%',
          maxWidth: window.innerWidth <= 600 ? '100vw' : '65vw',
        }}
      ></div>
      <div ref={watermarkRef} className="watermark" style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%) rotate(-30deg)', opacity: 0.22, fontSize: 40, color: '#444', pointerEvents: 'none', zIndex: 9999 }}></div>
    </div>
  );
};

export default Viewer;
