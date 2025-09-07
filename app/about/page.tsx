import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'About Us - Devasthanam',
  description: 'Learn about Devasthanam\'s story, mission, and 15+ years of excellence in crafting premium marble temples and pooja rooms.',
}

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Devasthanam</h1>
          <p>Crafting Sacred Spaces with Devotion and Excellence</p>
        </div>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <div className="intro-text">
              <h2>Our Story</h2>
              <p>For over 15 years, Devasthanam has been at the forefront of creating exquisite marble temples and pooja rooms that blend traditional craftsmanship with contemporary design. Founded with a vision to bring divine beauty into every home, we have grown from a small artisan workshop to India&apos;s leading marble temple manufacturer.</p>
              <p>Our journey began with a simple belief: every sacred space should be a masterpiece that inspires devotion and brings peace to the soul. Today, we have created over 500 custom temples across 50+ cities, touching the lives of thousands of families worldwide.</p>
            </div>
            <div className="intro-image">
              <Image 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop" 
                alt="Devasthanam Workshop"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>To be the world&apos;s most trusted name in marble temple craftsmanship, creating sacred spaces that inspire spiritual connection and bring families together in devotion.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To preserve and elevate the ancient art of marble carving while making divine craftsmanship accessible to every home through innovative design and exceptional service.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h3>Our Values</h3>
              <p>Excellence in craftsmanship, integrity in business, devotion to tradition, innovation in design, and unwavering commitment to customer satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Devasthanam?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-hammer"></i>
              </div>
              <div>
                <h3>Master Craftsmanship</h3>
                <p>Our skilled artisans have honed their craft over generations, ensuring every temple is a work of art that stands the test of time.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div>
                <h3>Custom Design</h3>
                <p>Every temple is uniquely designed to match your space, preferences, and spiritual requirements, creating a truly personalized sacred space.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-gem"></i>
              </div>
              <div>
                <h3>Premium Materials</h3>
                <p>We source only the finest marble from renowned quarries, ensuring durability, beauty, and spiritual purity in every creation.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-tools"></i>
              </div>
              <div>
                <h3>Complete Service</h3>
                <p>From initial consultation to final installation, we provide end-to-end service with professional project management and support.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div>
                <h3>Global Reach</h3>
                <p>With installations across India and internationally, we bring our expertise to devotees worldwide while maintaining local cultural sensitivity.</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div>
                <h3>Quality Assurance</h3>
                <p>Every temple comes with comprehensive warranty and after-sales support, ensuring your investment is protected for years to come.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="company-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Temples Created</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Cities Served</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="stat-item">
              <h3>1000+</h3>
              <p>Happy Families</p>
            </div>
            <div className="stat-item">
              <h3>25+</h3>
              <p>Master Artisans</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Countries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Create Your Sacred Space?</h2>
            <p>Let our master craftsmen bring your vision to life with a custom marble temple that reflects your devotion and enhances your spiritual journey.</p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary">Start Your Journey</Link>
              <Link href="/virtual-tour" className="btn btn-secondary">Take Virtual Tour</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
