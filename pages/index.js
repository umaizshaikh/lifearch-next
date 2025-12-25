import React from 'react';
import Link from 'next/link';

export default function Home() {
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
        {/* HERO SECTION */}
        <section className="hero text-center">
          <div className="container">
            <span className="hero-tag">WARNING: NOT FOR THE "NICE GUY"</span>
            <h1>Stop Being Her "Pen-Pal"<br />And Start Being The <span className="text-red">Prize</span></h1>
            <p style={{ fontSize: '1.3rem', marginTop: 20, color: '#FFD600' }}>
              How to kill your "Nice Guy" persona, trigger obsession, and finally get the replies you deserve—without being rich, 6ft tall, or manipulative.
            </p>
            <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScqij6IAN8N50f8daRCpP9aagjZsjJQLcGF4c-ZzJY0cwKsuw/viewform?usp=header" className="btn" target="_blank" rel="noopener noreferrer">GET THE TEXT ARCHITECT &raquo;</a>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#16a34a', margin: '18px 0 0 0' }}>Only ₹599 for The Text Architect</div>
            <span className="btn-sub" style={{ color: '#FFD600' }}>Instant Digital Access • 100% Secure</span>
            <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center', gap: 20, color: '#FFD600', fontSize: '0.9rem' }}>
              <span>✅ No Fake "Pickup Lines"</span>
              <span>✅ Works for Introverts</span>
              <span>✅ Indian Context Specific</span>
            </div>
          </div>
        </section>

        {/* STORY SECTION */}
        <section>
          <div className="container">
            <h2 className="text-center">The "Bollywood Lie" Has Ruined You.</h2>
            <br />
            <p>You have been lied to. For decades, movies taught us that if a girl says "No," you just chase harder. You sing louder. You wait longer. And eventually, she realizes you are "The One."</p>
            <p><strong>In 2025, that doesn't get you the girl. It gets you a restraining order or blocked on Instagram.</strong></p>
            <p>You aren't failing because you aren't rich enough or handsome enough. You are failing because you are predictable. In a digital world where an average attractive girl gets 50+ DMs a week ranging from "Hi dear" to unsolicited pictures, blending in is a death sentence.</p>
          </div>
        </section>

        {/* STORY BOX */}
        <section style={{ backgroundColor: '#f9fafb' }}>
          <div className="container">
            <div className="story-box">
              <h3 className="text-red">My "Doormat" Moment: The Drummer Incident</h3>
              <p>Let me tell you something embarrassing.</p>
              <p>A few years ago, I was dating this girl. I was the perfect "Nice Guy."</p>
              <p>I replied to her texts instantly (didn't want her to wait).<br />I agreed with everything she said (didn't want to fight).<br />I bought her gifts I couldn't afford (trying to buy her affection).</p>
              <p>I thought I was being a good boyfriend. <strong>I was actually being a servant.</strong></p>
              <p>Then one day, she grew "distant." The replies got shorter. The "Good morning" texts stopped.</p>
              <p>She eventually sat me down and said, <em>"You're a great guy... but I just don't feel that spark anymore. You're too... safe."</em></p>
              <p>Two weeks later? She was posting stories with a drummer from a local college band. This guy was broke, barely replied to her, and drove a beat-up scooter. But he had something I didn't.</p>
              <p><strong>He was a challenge. I was a guarantee.</strong></p>
              <p>That shattered me. But it also woke me up. I realized that being a "doormat" isn't moral—it's cowardly. I spent the next 2 years de-programming my "Nice Guy" instincts and learning the psychology of attraction.</p>
              <p>I developed a system. A way of communicating that commands respect rather than begging for attention.</p>
              <p>I call it <strong>The Text Architect</strong>.</p>
            </div>
          </div>
        </section>

        {/* MODULES SECTION */}
        <section>
          <div
            className="container"
            style={{
              position: 'relative',
              background: "url('/ironman.png') center/cover no-repeat",
              minHeight: 420,
              borderRadius: 12,
              padding: '40px 20px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'relative', zIndex: 2, background: 'rgba(255,255,255,0.65)', borderRadius: 10, padding: 24 }}>
              <h2 className="text-center">Introducing: <span className="text-red">The Text Architect</span></h2>
              <p className="text-center">A Gen-Z Dating Guide for the Modern Indian Man.</p>
              <div className="module-grid">
              <div className="module-card" style={{ background: 'rgba(255,255,255,0.45)', color: '#111111' }}>
                <span className="module-num">Chapter 1</span>
                <h3>The "Kill The Nice Guy" Mindset</h3>
                <p>Why your "unemployed" response time is killing attraction. Learn the "2/3 Rule" of investment and why you must stop saying "Sorry" immediately.</p>
              </div>
              <div className="module-card" style={{ background: 'rgba(255,255,255,0.45)', color: '#111111' }}>
                <span className="module-num">Chapter 2</span>
                <h3>Your Digital Aura (The Audit)</h3>
                <p>Your Instagram is your dating credit score. We audit your "Bio," delete your cringe "Cake Murderer" captions, and fix your "creepy vs. catch" ratio.</p>
              </div>
              <div className="module-card" style={{ background: 'rgba(255,255,255,0.45)', color: '#111111' }}>
                <span className="module-num">Chapter 3</span>
                <h3>The Openers (Beyond "Hi Dear")</h3>
                <p>3 specific openers that get replies 90% of the time. Stop asking "Had lunch?" and start using the "Assumption" method that makes her chase you to correct you.</p>
              </div>
              <div className="module-card" style={{ background: 'rgba(255,255,255,0.45)', color: '#111111' }}>
                <span className="module-num">Chapter 4</span>
                <h3>The Middle Game: Passing "Shit Tests"</h3>
                <p>What to do when she says "I have a boyfriend" or "You're a player." Most guys fold here. You will learn to agree, amplify, and tease your way through it.</p>
              </div>
              <div className="module-card" style={{ background: 'rgba(255,255,255,0.45)', color: '#111111' }}>
                <span className="module-num">Chapter 5</span>
                <h3>The "Bhaiya" Defense System</h3>
                <p>The exact script to use the moment she calls you "Bro," "Bhaiya," or "Friend." Do not accept the friendzone. Nuke it instantly with this line.</p>
              </div>
              <div className="module-card" style={{ background: 'rgba(255,255,255,0.45)', color: '#111111' }}>
                <span className="module-num">Chapter 6</span>
                <h3>From URL to IRL (The Close)</h3>
                <p>Stop being her texting buddy. Learn the "Soft Close" strategy to get a date without the awkward "Will you go out with me?" question.</p>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* RESULTS SECTION */}
        <section style={{ backgroundColor: '#f3f4f6' }}>
          <div className="container">
            <h2 className="text-center">Results From The Field</h2>
            <div style={{ display: 'flex', gap: 20, overflowX: 'auto', padding: '20px 0' }}>
              <div style={{ minWidth: 300, background: 'white', padding: 20, borderRadius: 10 }}>
                <p className="bold">"Bro, the 'Bhaiya Defense' line literally saved me."</p>
                <p>"She called me buddy, I used the script from Chapter 1, and she apologized and we're meeting Friday. Insane."</p>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>- Rahul S., Bangalore</p>
              </div>
              <div style={{ minWidth: 300, background: 'white', padding: 20, borderRadius: 10 }}>
                <p className="bold">"I realized my profile was scaring girls away."</p>
                <p>"Deleted my cringy bio and fixed my photos like you said. Got 3 matches in 24 hours."</p>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>- Aman K., Delhi</p>
              </div>
              <div style={{ minWidth: 300, background: 'white', padding: 20, borderRadius: 10 }}>
                <p className="bold">"Worth way more than 199."</p>
                <p>"The psychology behind the 'Unemployed Response Time' hit me hard. I stopped double texting and she actually texted ME asking where I was."</p>
                <p style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>- Vikram, Mumbai</p>
              </div>
            </div>
          </div>
        </section>


        {/* FAQ SECTION */}
        <section>
          <div className="container">
            <h2 className="text-center">Frequently Asked Questions</h2>
            <br />
            <div className="faq-item">
              <div className="faq-q">Is this about manipulation?</div>
              <p>No. It's about self-respect. Manipulation is lying to get what you want. This book teaches you how to present your best self and stop acting desperate.</p>
            </div>
            <div className="faq-item">
              <div className="faq-q">Will this work if I'm ugly?</div>
              <p>Attraction for women is different than for men. While looks matter, <strong>behavior</strong> matters more. If you are good looking but act like a creep, you lose. If you are average but have "Text Game" and confidence, you win.</p>
            </div>
            <div className="faq-item">
              <div className="faq-q">How do I get the PDF?</div>
              <p>Simply scan the QR code above, pay the amount, and click the WhatsApp button to send the screenshot. Our team (or bot) will send the PDF file directly to your WhatsApp instantly.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>&copy; 2025 The Text Architect. All Rights Reserved.</p>
          <p>Disclaimer: Results may vary. This guide is for educational purposes only. Don't be a creep. Respect women.</p>
        </div>
      </footer>
    </>
  );
}
