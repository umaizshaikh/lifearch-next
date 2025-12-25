import React from 'react';
import Link from 'next/link';

export default function Products() {
  return (
    <>
      <header style={{ background: 'var(--light)', borderBottom: '1px solid #e5e7eb', padding: '20px 0', position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/">
            <button className="btn" style={{ maxWidth: 180, width: 'auto', padding: '10px 30px', fontSize: '1rem', background: 'var(--primary)' }}>LifeArch</button>
          </Link>
          <Link href="/products">
            <button className="btn" style={{ maxWidth: 180, width: 'auto', padding: '10px 30px', fontSize: '1rem', background: 'var(--primary)' }}>Products</button>
          </Link>
        </div>
      </header>

      <main style={{ marginTop: '80px' }}>
        <section className="hero text-center">
          <div className="container">
            <h1>Products</h1>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 40, flexWrap: 'wrap' }}>
              {/* Product 1 */}
              <div className="product-card">
                <h2 style={{ marginBottom: 16 }}>The Text Architect</h2>
                <p style={{ marginBottom: 24, color: '#111111', fontSize: '1.1rem' }}>
                  The ultimate guide to transforming your text game and becoming the prize. Includes actionable modules and proven strategies.
                </p>
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#111111', marginBottom: '16px' }}>₹599</div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScqij6IAN8N50f8daRCpP9aagjZsjJQLcGF4c-ZzJY0cwKsuw/viewform?usp=header" className="btn" target="_blank" rel="noopener noreferrer" style={{ maxWidth: 220, width: '100%', margin: '0 auto', display: 'block' }}>
                  Buy
                </a>
                <span className="btn-sub">Instant Digital Access • 100% Secure</span>
              </div>
              {/* Product 2 */}
              <div className="product-card">
                <h2 style={{ marginBottom: 16 }}>200 Working Openers To Get Replies!</h2>
                <p style={{ marginBottom: 24, color: '#111111', fontSize: '1.1rem' }}>
                  Unlock 200 proven openers that actually get responses. Perfect for boosting your conversations and making a memorable first impression.
                </p>
                <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#111111', marginBottom: '16px' }}>₹299</div>
                <a href="#" className="btn" target="_blank" rel="noopener noreferrer" style={{ maxWidth: 220, width: '100%', margin: '0 auto', display: 'block' }}>
                  Buy
                </a>
                <span className="btn-sub">Instant Digital Access • 100% Secure</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 LifeArch. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
