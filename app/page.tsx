'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import CountUpOnView from '@/components/CountUpOnView'

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [loading, setLoading] = useState(true)
  const [showNewsletter, setShowNewsletter] = useState(false)
  const [currency, setCurrency] = useState('INR')
  
  const testimonials = [
    {
      content: "Devasthanam created the most beautiful pooja room for our home. The craftsmanship is exceptional and the team was professional throughout the process.",
      author: "Rajesh Sharma",
      location: "Mumbai",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      content: "The virtual tour helped us visualize our dream temple perfectly. The final result exceeded our expectations in every way.",
      author: "Priya Patel",
      location: "Ahmedabad", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      content: "Outstanding quality and attention to detail. Our Jain temple is a masterpiece that brings peace to our daily prayers.",
      author: "Amit Jain",
      location: "Jaipur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  ]

  useEffect(() => {
    // Pre-loader
    setTimeout(() => setLoading(false), 2000)
    
    // Newsletter popup after 10 seconds
    const newsletterTimer = setTimeout(() => setShowNewsletter(true), 10000)
    
    // Testimonial slider
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    // Scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up')
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible')
        }
      })
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount
    
    return () => {
      clearInterval(interval)
      clearTimeout(newsletterTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [testimonials.length])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! Our team will contact you within 24 hours.')
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowNewsletter(false)
    alert('Thank you for subscribing to our newsletter!')
  }

  return (
    <>
      {/* Pre-loader */}
      {loading && (
        <div className="preloader">
          <div className="preloader-content">
            <div className="preloader-logo">Devasthanam</div>
            <div className="preloader-spinner"></div>
          </div>
        </div>
      )}

      {/* Newsletter Popup */}
      {showNewsletter && (
        <div className="newsletter-popup-overlay" onClick={() => setShowNewsletter(false)}>
          <div className="newsletter-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowNewsletter(false)}>
              <i className="fas fa-times"></i>
            </button>
            <div className="popup-content">
              <h2>Stay Connected with Us</h2>
              <p>Receive updates on our new collections, craftsmanship, and exclusive offers</p>
              <form onSubmit={handleNewsletterSubmit}>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
              <p className="popup-note">*By subscribing, you agree to receive emails from Devasthanam</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero hero-enhanced">
        <div className="hero-content">
          <div>
            <h1>Your Spiritual Connection, Made Simple</h1>
            <p className="hero-subtitle">– Devasthanam</p>
            <div className="hero-buttons">
              <Link href="#pricing" className="btn btn-primary">Explore Our Collection</Link>
              <Link href="/contact" className="btn btn-secondary">Book Consultation</Link>
            </div>
          </div>
          <div className="hero-image">
            <Image 
              src="/temple design.png" 
              alt="Beautiful Marble Temple"
              width={800}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Our Philosophy Section - Inspired by Celestile */}
      <section className="our-philosophy fade-in-up">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Crafting Sacred Spaces with Divine Precision</h2>
              <div className="philosophy-subtitle">Our Head-Heart-Hand Approach</div>
              <div className="philosophy-grid">
                <div className="philosophy-card">
                  <div className="philosophy-icon">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h3>Head</h3>
                  <p>Visualizing sacred spaces with artistic vision and meticulous planning. Every design is thoughtfully conceptualized to resonate with spiritual energy.</p>
                </div>
                <div className="philosophy-card">
                  <div className="philosophy-icon">
                    <i className="fas fa-heart"></i>
                  </div>
                  <h3>Heart</h3>
                  <p>The passion and devotion we pour into each project. Our designs are crafted with love, honoring the sacred traditions they represent.</p>
                </div>
                <div className="philosophy-card">
                  <div className="philosophy-icon">
                    <i className="fas fa-hand-holding-heart"></i>
                  </div>
                  <h3>Hand</h3>
                  <p>Flawless execution and skilled craftsmanship. Our master artisans bring designs to life with precision and expertise passed through generations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artisan Showcase - Inspired by ORVI */}
      <section className="artisan-showcase fade-in-up">
        <div className="container">
          <h2>Our Master Craftsmen</h2>
          <p className="section-subtitle">With over 20+ years of experience, our artisans blend traditional techniques with modern innovation</p>
          <div className="artisan-grid">
            <div className="artisan-card">
              <div className="artisan-image">
                <Image 
                  src="/marble-craving.png" 
                  alt="Master Craftsman"
                  width={400}
                  height={400}
                />
              </div>
              <div className="artisan-info">
                <h3>Marble Carving</h3>
                <p>Intricate hand-carved details that bring life to every piece</p>
              </div>
            </div>
            <div className="artisan-card">
              <div className="artisan-image">
                <Image 
                  src="/stone-design1.png" 
                  alt="Stone Artisan"
                  width={400}
                  height={400}
                />
              </div>
              <div className="artisan-info">
                <h3>Stone Inlay Work</h3>
                <p>Precision inlay work creating mesmerizing patterns</p>
              </div>
            </div>
            <div className="artisan-card">
              <div className="artisan-image">
                <Image 
                  src="/landing page.png" 
                  alt="Temple Designer"
                  width={400}
                  height={400}
                />
              </div>
              <div className="artisan-info">
                <h3>Temple Design</h3>
                <p>Architectural excellence rooted in ancient wisdom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works fade-in-up">
        <div className="container">
          <h2>Your Dream Temple in 5 steps</h2>
          <p>Looking to design your Dream Temple? Here&apos;s how you can get started.</p>
          <div className="steps-grid">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Let&apos;s Connect One on One</h3>
              <p>Personal consultation to understand your vision and requirements</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Explore our Catalog</h3>
              <p>Browse through our extensive collection of designs and styles</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Place The Order</h3>
              <p>Finalize your design and place your custom order</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Approval</h3>
              <p>Review and approve the final design and specifications</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Delivery and Installation</h3>
              <p>Professional delivery and installation at your location</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Pooja Room for Every Budget</h2>
          <p>Discover the perfect pooja room for your home with our curated categories, offering timeless designs at prices that fit every budget.</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Small Pooja Rooms</h3>
                <p>upto 50 Sqft</p>
              </div>
              <div className="pricing-price">
                <span>Starting at INR 12L</span>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>Premium marble construction</li>
                  <li>Custom design consultation</li>
                  <li>Professional installation</li>
                  <li>1-year warranty</li>
                </ul>
              </div>
              <Link href="/contact" className="btn btn-outline">Get Quote</Link>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Medium Pooja Rooms</h3>
                <p>upto 80 Sqft</p>
              </div>
              <div className="pricing-price">
                <span>Starting at INR 20L</span>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>Premium marble construction</li>
                  <li>Enhanced design options</li>
                  <li>Professional installation</li>
                  <li>2-year warranty</li>
                </ul>
              </div>
              <Link href="/contact" className="btn btn-outline">Get Quote</Link>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-header">
                <h3>Large Pooja Rooms</h3>
                <p>Upto 120sqft</p>
              </div>
              <div className="pricing-price">
                <span>Starting at INR 25.75L</span>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>Premium marble construction</li>
                  <li>Luxury design elements</li>
                  <li>Professional installation</li>
                  <li>3-year warranty</li>
                </ul>
              </div>
              <Link href="/contact" className="btn btn-primary">Get Quote</Link>
            </div>
            <div className="pricing-card">
              <div className="pricing-header">
                <h3>Grand Pooja Rooms</h3>
                <p>150sqft</p>
              </div>
              <div className="pricing-price">
                <span>Starting at INR 35L</span>
              </div>
              <div className="pricing-features">
                <ul>
                  <li>Premium marble construction</li>
                  <li>Bespoke design service</li>
                  <li>Professional installation</li>
                  <li>5-year warranty</li>
                </ul>
              </div>
              <Link href="/contact" className="btn btn-outline">Get Quote</Link>
            </div>
          </div>
          <div className="pricing-cta">
            <Link href="/pricing" className="btn btn-secondary">Understand Pricing</Link>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="virtual-tour">
        <div className="container">
          <div className="tour-content">
            <div className="tour-text">
              <h2>Experience the Future with Devasthanam</h2>
              <p>At Devasthanam, we blend technology, spirituality, and aesthetics, forming the core of our values. For the first time in the industry, we offer an immersive virtual tour of our Pooja Rooms, allowing you to explore our bespoke designs and craftsmanship from the comfort of your home.</p>
              <ul className="tour-features">
                <li><i className="fas fa-check"></i> View custom designs and layouts</li>
                <li><i className="fas fa-check"></i> Experience our quality craftsmanship and materials</li>
                <li><i className="fas fa-check"></i> Visualize how Devasthanam can elevate your space</li>
              </ul>
              <Link href="/virtual-tour" className="btn btn-primary">Start The Virtual Tour</Link>
            </div>
            <div className="tour-image">
              <Image 
                src="/temple design.png" 
                alt="Virtual Tour Experience"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dream Temples Section */}
      <section className="dream-temples">
        <div className="container">
          <h2>Dream Temple for Every Budget</h2>
          <p>Transform your space with our exquisite Dream Temples, thoughtfully designed to suit every style and budget.</p>
          <div className="temples-grid">
            <div className="temple-card">
              <div className="temple-image">
                <Image 
                  src="/temple-2L.png" 
                  alt="3ft Wide Temple"
                  width={300}
                  height={200}
                />
              </div>
              <h3>3ft Wide Temples</h3>
              <p className="temple-price">Starting at INR 3.85L</p>
              <Link href="/dream-temples" className="btn btn-outline">View Details</Link>
            </div>
            <div className="temple-card">
              <div className="temple-image">
                <Image 
                  src="/temple-3L.png" 
                  alt="4ft Wide Temple"
                  width={300}
                  height={200}
                />
              </div>
              <h3>4ft Wide Temples</h3>
              <p className="temple-price">Starting at INR 5.95L</p>
              <Link href="/dream-temples" className="btn btn-outline">View Details</Link>
            </div>
            <div className="temple-card">
              <div className="temple-image">
                <Image 
                  src="/temple-5L.png" 
                  alt="5ft Wide Temple"
                  width={300}
                  height={200}
                />
              </div>
              <h3>5ft Wide Temples</h3>
              <p className="temple-price">Starting at INR 6.95L</p>
              <Link href="/dream-temples" className="btn btn-outline">View Details</Link>
            </div>
            <div className="temple-card">
              <div className="temple-image">
                <Image 
                  src="/temple-7L.png" 
                  alt="6ft Wide Temple"
                  width={300}
                  height={200}
                />
              </div>
              <h3>6ft Wide & Beyond Temples</h3>
              <p className="temple-price">Starting at INR 8.95L</p>
              <Link href="/dream-temples" className="btn btn-outline">View Details</Link>
            </div>
          </div>
          <div className="temples-cta">
            <Link href="/pricing" className="btn btn-secondary">Understand Pricing</Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
    <section className="stats fade-in-up">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <CountUpOnView end={500} />
            <p>Completed Custom Projects</p>
          </div>
          <div className="stat-item">
            <CountUpOnView end={50} />
            <p>Cities</p>
          </div>
          <div className="stat-item">
            <CountUpOnView end={15} />
            <p>Years Experience</p>
          </div>
        </div>
      </div>
    </section>

      {/* Catalog Section - Inspired by Osaanj */}
      <section id="catalog" className="catalog-section fade-in-up">
        <div className="container">
          <h2>Explore Our Collections</h2>
          <p className="section-subtitle">Download our comprehensive catalogs to discover our full range of divine creations</p>
          <div className="catalog-grid">
            <div className="catalog-card">
              <div className="catalog-image">
                <Image 
                  src="/landing page.png" 
                  alt="Pooja Rooms Catalog"
                  width={400}
                  height={500}
                />
                <div className="catalog-overlay">
                  <i className="fas fa-download"></i>
                </div>
              </div>
              <div className="catalog-info">
                <h3>Pooja Rooms Collection</h3>
                <p>Explore our premium pooja room designs</p>
                <a href="#" className="btn btn-outline">Download Catalog</a>
              </div>
            </div>
            <div className="catalog-card">
              <div className="catalog-image">
                <Image 
                  src="/temple design.png" 
                  alt="Dream Temples Catalog"
                  width={400}
                  height={500}
                />
                <div className="catalog-overlay">
                  <i className="fas fa-download"></i>
                </div>
              </div>
              <div className="catalog-info">
                <h3>Dream Temples Collection</h3>
                <p>Browse our exquisite temple designs</p>
                <a href="#" className="btn btn-outline">Download Catalog</a>
              </div>
            </div>
            <div className="catalog-card">
              <div className="catalog-image">
                <Image 
                  src="/marble-craving.png" 
                  alt="Marble Works Catalog"
                  width={400}
                  height={500}
                />
                <div className="catalog-overlay">
                  <i className="fas fa-download"></i>
                </div>
              </div>
              <div className="catalog-info">
                <h3>Premium Marble Works</h3>
                <p>Discover our finest marble craftsmanship</p>
                <a href="#" className="btn btn-outline">Download Catalog</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section - Enhanced */}
      <section className="clients clients-enhanced fade-in-up">
        <div className="container">
          <h2>Trusted by Families Across the Globe</h2>
          <p className="section-subtitle">From luxury residences to heritage temples, our work speaks for itself</p>
          <div className="client-categories">
            <div className="category-section">
              <h3>Residential Projects</h3>
              <div className="clients-grid">
                <div className="client-logo">
                  <div className="client-placeholder">Luxury Villa - Mumbai</div>
                </div>
                <div className="client-logo">
                  <div className="client-placeholder">Penthouse - Delhi</div>
                </div>
                <div className="client-logo">
                  <div className="client-placeholder">Heritage Home - Jaipur</div>
                </div>
                <div className="client-logo">
                  <div className="client-placeholder">Modern Apartment - Bangalore</div>
                </div>
              </div>
            </div>
            <div className="category-section">
              <h3>Institutional Projects</h3>
              <div className="clients-grid">
                <div className="client-logo">
                  <div className="client-placeholder">Community Temple</div>
                </div>
                <div className="client-logo">
                  <div className="client-placeholder">Ashram - Rishikesh</div>
                </div>
                <div className="client-logo">
                  <div className="client-placeholder">Gurudwara - Amritsar</div>
                </div>
                <div className="client-logo">
                  <div className="client-placeholder">Heritage Temple</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-showcase fade-in-up">
        <div className="container">
          <h2>Explore Our Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <Image 
                src="/stone-design1.png" 
                alt="Luxury Pooja Room"
                width={400}
                height={300}
              />
              <div className="project-overlay">
                <h3>Luxury Pooja Room</h3>
                <p>Mumbai Residence</p>
              </div>
            </div>
            <div className="project-card">
              <Image 
                src="/temple design.png" 
                alt="Dream Temple"
                width={400}
                height={300}
              />
              <div className="project-overlay">
                <h3>Grand Dream Temple</h3>
                <p>Delhi Villa</p>
              </div>
            </div>
            <div className="project-card">
              <Image 
                src="/temple-7L.png" 
                alt="Communal Temple"
                width={400}
                height={300}
              />
              <div className="project-overlay">
                <h3>Community Temple</h3>
                <p>Bangalore</p>
              </div>
            </div>
          </div>
          <div className="projects-cta">
            <Link href="/projects" className="btn btn-secondary">Explore all Projects</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials fade-in-up">
        <div className="container">
          <h2>
            <div className='d-flex'>
              <div style={{ marginRight: '10px' }}>
                <CountUpOnView end={1000} /> 
              </div>
              Happy Families
            </div>
          </h2>
          <div className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{
                  opacity: index === currentTestimonial ? 1 : 0.5,
                  transform: index === currentTestimonial ? 'scale(1)' : 'scale(0.95)'
                }}
              >
                <div className="testimonial-content">
                  <p>&quot;{testimonial.content}&quot;</p>
                </div>
                <div className="testimonial-author">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    width={60}
                    height={60}
                  />
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <div className="container">
          <div className="form-content">
            <div className="form-text">
              <h2>Talk to Our Expert</h2>
              <p>Get personalized consultation for your dream temple or pooja room</p>
            </div>
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="fullName" placeholder="Full Name *" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address *" required />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Phone number" />
              </div>
              <div className="form-group">
                <input type="text" name="city" placeholder="City *" required />
              </div>
              <div className="form-group">
                <select name="userType" required>
                  <option value="">Tell us about yourself *</option>
                  <option value="homeowner">I am a homeowner looking for a pooja unit or pooja room</option>
                  <option value="designer">I am an interior designer/consultant seeking solutions for my client</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
