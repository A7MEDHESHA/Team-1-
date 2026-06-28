import React from 'react'

export default function AboutUs() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Our Philosophy - Designing for Intentional Life</title>
  <style dangerouslySetInnerHTML={{__html: "\n        :root {\n            --dark-navy: #0f172a;\n            --mint-green: #006847;\n            --soft-blue: #e0ebf6;\n            --bg-light: #ffffff;\n            --text-dark: #1e293b;\n            --text-muted: #64748b;\n        }\n\n        * {\n            box-sizing: border-box;\n            margin: 0;\n            padding: 0;\n            font-family: 'Playfair Display', Georgia, serif;\n        }\n\n        body {\n            background-color: var(--bg-light);\n            color: var(--text-dark);\n            line-height: 1.6;\n        }\n\n        /* Top Hero Banner Section */\n        .intro-hero {\n            position: relative;\n            background: url('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80') no-repeat center center/cover;\n            height: 80vh;\n            display: flex;\n            align-items: center;\n            padding: 0 10%;\n        }\n\n        .hero-overlay-card {\n            background: rgba(255, 255, 255, 0.9);\n            backdrop-filter: blur(5px);\n            padding: 50px;\n            max-width: 550px;\n            border-radius: 2px;\n        }\n\n        .tagline {\n            font-family: 'Inter', sans-serif;\n            font-size: 0.75rem;\n            text-transform: uppercase;\n            letter-spacing: 2px;\n            color: var(--mint-green);\n            font-weight: bold;\n            margin-bottom: 15px;\n        }\n\n        .main-heading {\n            font-size: 2.8rem;\n            line-height: 1.2;\n            margin-bottom: 20px;\n            font-weight: 500;\n        }\n\n        .hero-text {\n            font-family: 'Inter', sans-serif;\n            font-size: 0.95rem;\n            color: var(--text-muted);\n        }\n\n        /* Two Column Content Blocks */\n        .content-section {\n            max-width: 1200px;\n            margin: 100px auto;\n            padding: 0 40px;\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 60px;\n            align-items: center;\n        }\n\n        @media (max-width: 768px) {\n            .content-section {\n                grid-template-columns: 1fr;\n                margin: 50px auto;\n                gap: 30px;\n            }\n        }\n\n        .text-side h3 {\n            font-size: 2.2rem;\n            margin-bottom: 20px;\n            font-weight: 500;\n            line-height: 1.3;\n        }\n\n        .text-side p {\n            font-family: 'Inter', sans-serif;\n            color: var(--text-muted);\n            margin-bottom: 20px;\n            font-size: 1rem;\n        }\n\n        .image-gallery-dual {\n            display: grid;\n            grid-template-columns: 1.3fr 1fr;\n            gap: 20px;\n        }\n\n        .image-gallery-dual img {\n            width: 100%;\n            height: 350px;\n            object-fit: cover;\n            border-radius: 4px;\n        }\n\n        .single-img {\n            width: 100%;\n            height: 500px;\n            object-fit: cover;\n            border-radius: 4px;\n        }\n\n        /* Features List block inside text */\n        .feature-item {\n            display: flex;\n            gap: 15px;\n            margin-top: 25px;\n            font-family: 'Inter', sans-serif;\n        }\n\n        .feature-icon {\n            color: var(--mint-green);\n            font-size: 1.2rem;\n            font-weight: bold;\n        }\n\n        .feature-title {\n            font-weight: bold;\n            margin-bottom: 5px;\n        }\n\n        .feature-desc {\n            color: var(--text-muted);\n            font-size: 0.9rem;\n        }\n\n        /* Sustainability Cards Grid */\n        .sustainability-block {\n            background-color: #f8fafc;\n            padding: 100px 40px;\n            text-align: center;\n        }\n\n        .center-header {\n            max-width: 600px;\n            margin: 0 auto 60px auto;\n        }\n\n        .center-header h3 {\n            font-size: 2.2rem;\n            margin-bottom: 15px;\n        }\n\n        .cards-grid {\n            max-width: 1200px;\n            margin: 0 auto;\n            display: grid;\n            grid-template-columns: repeat(3, 1fr);\n            gap: 30px;\n        }\n\n        @media (max-width: 768px) {\n            .cards-grid {\n                grid-template-columns: 1fr;\n            }\n        }\n\n        .sust-card {\n            background: var(--soft-blue);\n            padding: 40px 30px;\n            text-align: left;\n            border-radius: 4px;\n            font-family: 'Inter', sans-serif;\n        }\n\n        .card-icon {\n            font-size: 1.8rem;\n            margin-bottom: 20px;\n        }\n\n        .card-title {\n            font-size: 1.3rem;\n            font-family: 'Playfair Display', Georgia, serif;\n            margin-bottom: 15px;\n        }\n\n        .card-desc {\n            color: #475569;\n            font-size: 0.95rem;\n        }\n\n        /* Dark Footer CTA Section */\n        .footer-cta {\n            background-color: var(--dark-navy);\n            color: #ffffff;\n            text-align: center;\n            padding: 80px 20px;\n        }\n\n        .footer-title {\n            font-size: 2.5rem;\n            margin-bottom: 15px;\n            font-weight: 400;\n        }\n\n        .footer-subtitle {\n            font-family: 'Inter', sans-serif;\n            font-size: 0.9rem;\n            color: #94a3b8;\n            margin-bottom: 30px;\n        }\n\n        .newsletter-form {\n            display: flex;\n            max-width: 500px;\n            margin: 0 auto;\n            gap: 10px;\n        }\n\n        @media (max-width: 480px) {\n            .newsletter-form {\n                flex-direction: column;\n            }\n        }\n\n        .newsletter-form input {\n            flex: 1;\n            padding: 15px;\n            border: 1px solid #334155;\n            background: #1e293b;\n            color: #ffffff;\n            border-radius: 4px;\n            outline: none;\n        }\n\n        .newsletter-form button {\n            background-color: var(--mint-green);\n            color: white;\n            border: none;\n            padding: 15px 30px;\n            font-weight: bold;\n            text-transform: uppercase;\n            font-size: 0.8rem;\n            letter-spacing: 1px;\n            cursor: pointer;\n            border-radius: 4px;\n        }\n    " }} />
  {/* Hero Section */}
  <header className="intro-hero">
    <div className="hero-overlay-card">
      <p className="tagline">Our Philosophy</p>
      <h2 className="main-heading">Designing for a more intentional life.</h2>
      <p className="hero-text">LUMINA was born from a desire to strip away the noise and focus on what truly matters: quality, utility, and enduring beauty.</p>
    </div>
  </header>
  {/* First Split Block */}
  <section className="content-section">
    <div className="text-side">
      <p className="tagline" style={{color: 'var(--text-muted)'}}>Our Vision</p>
      <h5>Redefining the relationship between space and object.</h5>
      <p>We believe that the objects we surround ourselves with have a profound impact on our well-being. Our mission is to create pieces that promote clarity, focus, and a sense of calm.</p>
      <p>Every LUMINA product is a dialogue between form and function, designed to serve a purpose while elevating the aesthetic of the modern home.</p>
    </div>
    <div className="image-gallery-dual">
      <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" alt="Design collaboration" />
      <img src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=500&q=80" alt="Minimalist Chair" />
    </div>
  </section>
  {/* Second Split Block */}
  <section className="content-section" style={{backgroundColor: '#f1f5f9', maxWidth: '100%', padding: '80px 10%'}}>
    <div style={{maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, width: '100%'}}>
      <div>
        <img className="single-img" src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80" alt="Craftsmanship" />
      </div>
      <div className="text-side" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p className="tagline">Our Craftsmanship</p>
        <h5>The precision of modern technology, the soul of hand-finishing.</h5>
        <p>Quality is not an accident; it is the result of intelligent effort. We partner with heritage workshops that share our obsession with detail. From the grade of our timber to the weight of our textiles, every element is curated.</p>
        <div className="feature-item">
          <div className="feature-icon">🛡️</div>
          <div>
            <div className="feature-title">Ethically Sourced Materials</div>
            <div className="feature-desc">We only work with suppliers who meet strict standards for environmental and social responsibility.</div>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon">🎖️</div>
          <div>
            <div className="feature-title">Heirloom Quality</div>
            <div className="feature-desc">Our products are engineered to look flawless and stand the test of time for decades to come.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Sustainability Cards Block */}
  <section className="sustainability-block">
    <div className="center-header">
      <p className="tagline" style={{color: 'var(--text-muted)', marginBottom: 10}}>Sustainability</p>
      <h3>Conscious creation for a lasting future.</h3>
      <p style={{fontFamily: '"Inter", sans-serif', color: 'var(--text-muted)'}}>We are committed to reducing our footprint at every stage of the lifecycle—from initial concept to final delivery.</p>
    </div>
    <div className="cards-grid">
      <div className="sust-card">
        <div className="card-icon">🍃</div>
        <h4 className="card-title">Low-Impact Materials</h4>
        <p className="card-desc">Prioritizing recycled, organic, and biodegradable components in our entire catalog.</p>
      </div>
      <div className="sust-card">
        <div className="card-icon">📦</div>
        <h4 className="card-title">Plastic-Free Shipping</h4>
        <p className="card-desc">Our packaging is 100% recyclable and compostable, ensuring nothing ends up in a landfill.</p>
      </div>
      <div className="sust-card">
        <div className="card-icon">🔄</div>
        <h4 className="card-title">Circular Lifecycle</h4>
        <p className="card-desc">We offer repair services and take-back programs to extend the life of every LUMINA piece.</p>
      </div>
    </div>
  </section>
  {/* Join the Collective / Footer CTA */}
  <section className="footer-cta">
    <h3 className="footer-title">Join the Collective.</h3>
    <p className="footer-subtitle">Receive exclusive updates on new releases, events, and sustainable initiatives.</p>
    <form className="newsletter-form">
      <input type="email" placeholder="Your email address" required />
      <button type="submit">Subscribe</button>
    </form>
  </section>
</div>

  )
}
