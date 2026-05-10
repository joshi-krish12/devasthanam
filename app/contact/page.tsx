'use client'

import { useState } from 'react'
import Link from 'next/link'

const FAQS = [
  {
    q: 'How long does it take to complete a Corian mandir?',
    a: 'A standard home mandir takes 3–5 weeks from design sign-off to installation. Larger or more intricate pieces may take 6–8 weeks. We provide a detailed timeline during consultation.',
  },
  {
    q: 'Do you work with interior designers and architects?',
    a: 'Absolutely — a significant portion of our projects are B2B collaborations. We are comfortable working from technical drawings, providing material samples, and meeting project-site timelines.',
  },
  {
    q: 'What is the difference between Corian and stone for a mandir?',
    a: 'Corian is non-porous, seamless (no visible joints), and repairable — ideal for hygiene-sensitive sacred spaces. Natural stone carries the beauty of unique veining and a natural feel but requires sealing. We help you choose based on your aesthetic and maintenance preferences.',
  },
  {
    q: 'Do you provide installation across India?',
    a: 'Yes. While our studio is in Kolkata, we execute installations across India. Logistics and installation costs vary by location — we quote this transparently during consultation.',
  },
  {
    q: 'Can I visit your studio to see samples?',
    a: 'Yes — we welcome visits to our studio at 48 SN Roy Road, New Alipore, Kolkata. You can view material samples, finished pieces, and discuss your project with our design team.',
  },
  {
    q: 'What warranty do you offer?',
    a: 'All our work comes with a 1-year craftsmanship warranty. Corian installations backed by the material manufacturer warranty. We remain available for after-care beyond warranty as well.',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: '',
    userType: '',
    message: '',
    terms: false,
  })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.phone || !formData.productType || !formData.message) {
      alert('Please fill in all required fields.')
      return
    }
    if (!formData.terms) {
      alert('Please agree to the Terms & Conditions.')
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="contact-hero-v2">
        <div className="container">
          <span className="section-eyebrow" style={{ color: 'var(--secondary-color)' }}>Get in Touch</span>
          <h1 className="contact-hero-v2-title">
            Start Your<br /><em>Conversation</em>
          </h1>
          <p className="contact-hero-v2-sub">
            Tell us about your project — we will listen, advise, and build something you will love for years.
          </p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="contact-main-v2">
        <div className="container">
          <div className="contact-main-v2-grid">
            {/* Left — Info */}
            <div className="contact-info-v2">
              <h2>Reach Us</h2>
              <div className="contact-info-v2-items">
                <div className="contact-info-v2-item">
                  <div className="contact-info-v2-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4>Studio &amp; Workshop</h4>
                    <p>48, SN Roy Road, New Alipore<br />Kolkata, West Bengal — 700038</p>
                    <a
                      href="https://maps.google.com/?q=48+SN+Roy+Rd+Kolkata"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-v2-link"
                    >
                      Get Directions <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div className="contact-info-v2-item">
                  <div className="contact-info-v2-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:+919007137413">+91 90071 37413</a></p>
                    <p className="contact-info-v2-hours">Mon–Sat, 10 AM – 7 PM</p>
                  </div>
                </div>
                <div className="contact-info-v2-item">
                  <div className="contact-info-v2-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:info@devasthanam.com">info@devasthanam.com</a></p>
                  </div>
                </div>
                <div className="contact-info-v2-item">
                  <div className="contact-info-v2-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4>WhatsApp</h4>
                    <a
                      href="https://wa.me/919007137413"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold"
                      style={{ marginTop: 8, display: 'inline-block' }}
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-form-v2-wrap">
              {submitted ? (
                <div className="contact-success-v2">
                  <div className="contact-success-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Thank you!</h3>
                  <p>Your inquiry has been received. Our team will get back to you within 24 hours.</p>
                  <a href="https://wa.me/919007137413" target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ marginTop: 24, display: 'inline-block' }}>
                    Or WhatsApp Us Directly
                  </a>
                </div>
              ) : (
                <form className="contact-form-v2" onSubmit={handleSubmit}>
                  <h3>Request a Free Consultation</h3>
                  <div className="cfv2-row">
                    <div className="cfv2-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="cfv2-group">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="cfv2-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="cfv2-row">
                    <div className="cfv2-group">
                      <label htmlFor="productType">Product Interest *</label>
                      <select id="productType" name="productType" value={formData.productType} onChange={handleChange} required>
                        <option value="">Select a product</option>
                        <option value="corian-mandir">Corian Mandir</option>
                        <option value="wall-panels">Wall Panels</option>
                        <option value="stone-panels">Stone Panels</option>
                        <option value="table-tops">Table Tops</option>
                        <option value="custom">Custom / Multiple Products</option>
                      </select>
                    </div>
                    <div className="cfv2-group">
                      <label htmlFor="userType">I am a</label>
                      <select id="userType" name="userType" value={formData.userType} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="homeowner">Homeowner</option>
                        <option value="designer">Interior Designer</option>
                        <option value="architect">Architect</option>
                        <option value="builder">Builder / Developer</option>
                      </select>
                    </div>
                  </div>
                  <div className="cfv2-group">
                    <label htmlFor="message">Tell us about your project *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Describe your space, dimensions, material preference, or any specific ideas..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="cfv2-group cfv2-check">
                    <label className="cfv2-check-label">
                      <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} required />
                      <span>I agree to the <Link href="/contact">Terms &amp; Conditions</Link> and Privacy Policy</span>
                    </label>
                  </div>
                  <button type="submit" className="btn-gold cfv2-submit">Send Inquiry</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-v2">
        <div className="container">
          <div className="faq-v2-header">
            <span className="section-eyebrow">Frequently Asked</span>
            <h2>Questions</h2>
          </div>
          <div className="faq-v2-list">
            {FAQS.map((faq, i) => (
              <div key={i} className={`faq-v2-item ${openFaq === i ? 'open' : ''}`}>
                <button className="faq-v2-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{faq.q}</span>
                  <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`}></i>
                </button>
                <div className="faq-v2-a">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Map / Address Bar ── */}
      <section className="contact-address-bar-v2">
        <div className="container">
          <div className="contact-address-bar-v2-inner">
            <div className="cab-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>48, SN Roy Road, New Alipore, Kolkata 700038</span>
            </div>
            <div className="cab-divider" />
            <div className="cab-item">
              <i className="fas fa-phone"></i>
              <a href="tel:+919007137413">+91 90071 37413</a>
            </div>
            <div className="cab-divider" />
            <div className="cab-item">
              <i className="fas fa-clock"></i>
              <span>Mon–Sat &nbsp;10 AM – 7 PM</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
