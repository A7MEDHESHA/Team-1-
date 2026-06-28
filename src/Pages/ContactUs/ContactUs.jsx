import React from 'react'

export default function ContactUs() {
  return (
  <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>The Studio - Contact Us</title>
  <style dangerouslySetInnerHTML={{__html: "\n        :root {\n            --primary-dark: #0f1c24;\n            --accent-green: #006847;\n            --bg-light: #f4f7fc;\n            --text-dark: #222222;\n            --text-muted: #555555;\n            --card-bg: #ffffff;\n            --input-bg: #eff3fa;\n        }\n\n        * {\n            box-sizing: border-box;\n            margin: 0;\n            padding: 0;\n            font-family: 'Playfair Display', Georgia, serif;\n        }\n\n        body {\n            background-color: #ffffff;\n            color: var(--text-dark);\n            line-height: 1.6;\n        }\n\n        /* Hero Banner Section */\n        .hero-section {\n            background: linear-gradient(rgba(15, 28, 36, 0.75), rgba(15, 28, 36, 0.85)), \n                        url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80') no-repeat center center/cover;\n            padding: 100px 10%;\n            color: #ffffff;\n        }\n\n        .hero-subtitle {\n            font-size: 0.85rem;\n            text-transform: uppercase;\n            letter-spacing: 2px;\n            color: #a3b8cc;\n            margin-bottom: 10px;\n        }\n\n        .hero-title {\n            font-size: 3.5rem;\n            font-weight: 400;\n            margin-bottom: 20px;\n        }\n\n        .hero-desc {\n            font-family: 'Inter', sans-serif;\n            font-size: 1.1rem;\n            max-width: 500px;\n            color: #dddddd;\n        }\n\n        /* Main Content Grid */\n        .main-container {\n            max-width: 1200px;\n            margin: -40px auto 60px auto;\n            padding: 0 20px;\n            display: grid;\n            grid-template-columns: 2fr 1fr;\n            gap: 40px;\n            position: relative;\n            z-index: 10;\n            margin-top: 60px;\n        }\n\n        @media (max-width: 768px) {\n            .main-container {\n                grid-template-columns: 1fr;\n                margin-top: 20px;\n            }\n        }\n\n        /* Form Styling */\n        .form-card {\n            background: var(--card-bg);\n            padding: 50px;\n            border-radius: 4px;\n            box-shadow: 0 10px 30px rgba(0,0,0,0.05);\n        }\n\n        .section-title {\n            font-size: 2rem;\n            margin-bottom: 30px;\n            font-weight: 500;\n        }\n\n        .form-grid {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 20px;\n            margin-bottom: 20px;\n        }\n\n        @media (max-width: 600px) {\n            .form-grid {\n                grid-template-columns: 1fr;\n            }\n        }\n\n        .form-group {\n            display: flex;\n            flex-direction: column;\n            font-family: 'Inter', sans-serif;\n        }\n\n        .form-group.full-width {\n            grid-column: span 2;\n        }\n\n        @media (max-width: 600px) {\n            .form-group.full-width {\n                grid-column: span 1;\n            }\n        }\n\n        .form-group label {\n            font-size: 0.8rem;\n            font-weight: 700;\n            margin-bottom: 8px;\n            color: var(--text-dark);\n        }\n\n        .form-group input, .form-group select, .form-group textarea {\n            background-color: var(--input-bg);\n            border: none;\n            padding: 15px;\n            font-size: 0.95rem;\n            border-radius: 4px;\n            color: var(--text-dark);\n            outline: none;\n            font-family: 'Inter', sans-serif;\n        }\n\n        .form-group textarea {\n            resize: vertical;\n            min-height: 140px;\n        }\n\n        .submit-btn {\n            background-color: var(--accent-green);\n            color: #ffffff;\n            border: none;\n            padding: 15px 35px;\n            font-size: 0.85rem;\n            font-weight: bold;\n            text-transform: uppercase;\n            letter-spacing: 1px;\n            cursor: pointer;\n            border-radius: 4px;\n            margin-top: 10px;\n            transition: background 0.3s ease;\n        }\n\n        .submit-btn:hover {\n            background-color: #004d34;\n        }\n\n        /* Sidebar Styling */\n        .sidebar {\n            display: flex;\n            flex-direction: column;\n            gap: 30px;\n        }\n\n        .contact-card {\n            background: #f8faff;\n            padding: 40px;\n            border-radius: 4px;\n        }\n\n        .info-block {\n            margin-bottom: 25px;\n            font-family: 'Inter', sans-serif;\n        }\n\n        .info-title {\n            font-size: 0.85rem;\n            font-weight: bold;\n            color: var(--text-muted);\n            margin-bottom: 4px;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n        }\n\n        .info-value {\n            font-size: 1rem;\n            color: var(--text-dark);\n            font-weight: 500;\n        }\n\n        .social-icons {\n            display: flex;\n            gap: 15px;\n            margin-top: 25px;\n            border-top: 1px solid #e2e8f0;\n            padding-top: 25px;\n        }\n\n        .icon-circle {\n            width: 40px;\n            height: 40px;\n            background: #ffffff;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            box-shadow: 0 2px 5px rgba(0,0,0,0.05);\n            cursor: pointer;\n            font-size: 0.9rem;\n        }\n\n        /* Mock Map Block */\n        .map-card {\n            background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url('https://images.unsplash.com/photo-1524661135339-9140b00787e3?auto=format&fit=crop&w=600&q=80') center center/cover;\n            height: 250px;\n            border-radius: 4px;\n            position: relative;\n            display: flex;\n            align-items: flex-end;\n            padding: 20px;\n        }\n\n        .map-btn {\n            background: #ffffff;\n            padding: 10px 15px;\n            font-size: 0.75rem;\n            font-weight: bold;\n            border: none;\n            border-radius: 4px;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            gap: 5px;\n            box-shadow: 0 4px 10px rgba(0,0,0,0.1);\n        }\n\n        /* FAQ Section */\n        .faq-section {\n            background-color: var(--bg-light);\n            padding: 80px 10%;\n            text-align: center;\n        }\n\n        .faq-container {\n            max-width: 800px;\n            margin: 40px auto 0 auto;\n            display: flex;\n            flex-direction: column;\n            gap: 15px;\n        }\n\n        .faq-item {\n            background: #ffffff;\n            padding: 20px 30px;\n            border-radius: 4px;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            text-align: left;\n            cursor: pointer;\n            transition: box-shadow 0.3s ease;\n        }\n\n        .faq-item:hover {\n            box-shadow: 0 4px 15px rgba(0,0,0,0.03);\n        }\n\n        .faq-question {\n            font-size: 1.1rem;\n            font-weight: 500;\n        }\n\n        .faq-icon {\n            color: var(--accent-green);\n            font-size: 1.2rem;\n        }\n    " }} />
  {/* Hero Banner */}
  <section className="hero-section">
    <p className="hero-subtitle">Connect With Us</p>
    <h1 className="hero-title">The Studio</h1>
    <p className="hero-desc">We believe in human connection. Whether you have a question about our collections or a collaboration in mind, we're here to assist.</p>
  </section>
  {/* Content Area */}
  <main className="main-container">
    {/* Form */}
    <section className="form-card">
      <h2 className="section-title">Send a Message</h2>
      <form>
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Jane Doe" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="jane@example.com" />
          </div>
          <div className="form-group full-width">
            <label>Subject</label>
            <select>
              <option>General Inquiry</option>
              <option>Collaborations</option>
              <option>Order Status</option>
            </select>
          </div>
          <div className="form-group full-width">
            <label>Message</label>
            <textarea placeholder="How can we help you today?" defaultValue={""} />
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit Message</button>
      </form>
    </section>
    {/* Sidebar Contact Info */}
    <aside className="sidebar">
      <div className="contact-card">
        <h2 className="section-title" style={{fontSize: '1.5rem', marginBottom: 25}}>Direct Contact</h2>
        <div className="info-block">
          <div className="info-title">📧 Email Us</div>
          <div className="info-value">concierge@lumina-studio.com</div>
        </div>
        <div className="info-block">
          <div className="info-title">📞 Call Us</div>
          <div className="info-value">+1 (212) 555-0198</div>
        </div>
        <div className="info-block">
          <div className="info-title">📍 Studio Address</div>
          <div className="info-value">422 Mercer St, New York, NY 10003</div>
        </div>
        <div className="social-icons">
          <div className="icon-circle">🌐</div>
          <div className="icon-circle">📸</div>
        </div>
      </div>
      {/* Map Placeholder */}
      <div className="map-card">
        <button className="map-btn">📍 Open in Maps</button>
      </div>
    </aside>
  </main>
  {/* FAQ / Common Inquiries Section */}
  <section className="faq-section">
    <h2 className="section-title">Common Inquiries</h2>
    <div className="faq-container">
      <div className="faq-item">
        <span className="faq-question">What is the typical shipping timeframe?</span>
        <span className="faq-icon">✦</span>
      </div>
      <div className="faq-item">
        <span className="faq-question">Do you offer studio appointments?</span>
        <span className="faq-icon">✦</span>
      </div>
      <div className="faq-item">
        <span className="faq-question">What is your return policy?</span>
        <span className="faq-icon">✦</span>
      </div>
    </div>
  </section>
</div>

  )
}
