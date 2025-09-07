'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    budget: '',
    projectType: '',
    userType: '',
    timeline: '',
    spaceSize: '',
    message: '',
    newsletter: false,
    terms: false
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.city || !formData.projectType || !formData.userType || !formData.message) {
      alert('Please fill in all required fields.')
      return
    }

    if (!formData.terms) {
      alert('Please agree to the Terms & Conditions.')
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }

    alert('Thank you for your inquiry! Our team will contact you within 24 hours.')
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      city: '',
      budget: '',
      projectType: '',
      userType: '',
      timeline: '',
      spaceSize: '',
      message: '',
      newsletter: false,
      terms: false
    })
  }

  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Let&apos;s Create Your Dream Sacred Space Together</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Visit Our Showroom</h3>
              <p>First & Second Floor, Devasthanam India<br/>
              Mall 21, Mirza Ismail Road<br/>
              Opposite Rajmandir Cinema, 5 Batti<br/>
              C Scheme, Jaipur, Rajasthan 302001</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Call Us</h3>
              <p><a href="tel:+919319374633">+91 93193 74633</a><br/>
              <a href="tel:+911412345678">+91 141 234 5678</a><br/>
              Mon - Sat: 10:00 AM - 7:00 PM<br/>
              Sunday: 11:00 AM - 6:00 PM</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Us</h3>
              <p><a href="mailto:info@devasthanam.com">info@devasthanam.com</a><br/>
              <a href="mailto:sales@devasthanam.com">sales@devasthanam.com</a><br/>
              <a href="mailto:support@devasthanam.com">support@devasthanam.com</a></p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 8:00 PM<br/>
              Saturday: 10:00 AM - 7:00 PM<br/>
              Sunday: 11:00 AM - 6:00 PM<br/>
              <em>Appointments available outside hours</em></p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Get Your Free Consultation</h2>
              <p>Share your vision with us and let our experts guide you through creating the perfect sacred space for your home.</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    value={formData.city}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select 
                    id="budget" 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select Budget Range</option>
                    <option value="10-15L">₹10L - ₹15L</option>
                    <option value="15-25L">₹15L - ₹25L</option>
                    <option value="25-35L">₹25L - ₹35L</option>
                    <option value="35L+">₹35L+</option>
                    <option value="custom">Custom Budget</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="projectType">Project Type *</label>
                <select 
                  id="projectType" 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="pooja-room">Pooja Room</option>
                  <option value="dream-temple">Dream Temple</option>
                  <option value="communal-temple">Communal Temple</option>
                  <option value="jain-temple">Jain Temple</option>
                  <option value="home-decor">Home Decor</option>
                  <option value="murti">Murti</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="userType">I am a *</label>
                <select 
                  id="userType" 
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select User Type</option>
                  <option value="homeowner">Homeowner looking for a pooja unit or pooja room</option>
                  <option value="designer">Interior designer/consultant seeking solutions for my client</option>
                  <option value="builder">Builder/Developer</option>
                  <option value="architect">Architect</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Tell us about your vision *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  placeholder="Describe your dream sacred space, preferred style, specific requirements, or any questions you have..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                  />
                  <span className="checkmark"></span>
                  Subscribe to our newsletter for design inspiration and updates
                </label>
              </div>
              
              <div className="form-group checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
                  <span className="checkmark"></span>
                  I agree to the Terms & Conditions and Privacy Policy *
                </label>
              </div>
              
              <button type="submit" className="btn btn-primary btn-large">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How long does it take to complete a pooja room?</h3>
              <p>Typically, our pooja rooms take 4-8 weeks to complete, depending on the complexity of design and customization requirements. We provide detailed timelines during consultation.</p>
            </div>
            <div className="faq-item">
              <h3>Do you provide installation services?</h3>
              <p>Yes, we provide complete installation services with our expert team. Installation is included in all our packages and comes with warranty coverage.</p>
            </div>
            <div className="faq-item">
              <h3>Can you work with my interior designer?</h3>
              <p>Absolutely! We collaborate closely with interior designers and architects to ensure seamless integration with your overall home design.</p>
            </div>
            <div className="faq-item">
              <h3>What warranty do you provide?</h3>
              <p>We provide comprehensive warranty ranging from 1-5 years depending on the package. This covers craftsmanship, materials, and installation quality.</p>
            </div>
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>Yes, we serve clients globally through Devasthanam International. We handle all shipping, customs, and installation coordination for international projects.</p>
            </div>
            <div className="faq-item">
              <h3>Can I see samples before ordering?</h3>
              <p>Yes, you can visit our experience centre to see samples, or we can arrange for sample delivery for serious inquiries. Virtual tours are also available.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
