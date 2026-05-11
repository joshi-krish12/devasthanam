'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import CountUpOnView from '@/components/CountUpOnView'
import landingPageImg from '@/public/landing page.png'
import temple2LImg from '@/public/temple-2L.png'
import temple3LImg from '@/public/temple-3L.png'
import temple5LImg from '@/public/temple-5L.png'
import temple7LImg from '@/public/temple-7L.png'
import stoneDesign1Img from '@/public/stone-design1.png'
import heroTempleDesign from '@/public/temple design.png'
import marbleCarvingImg from '@/public/marble-craving.png'
import Lightbox from '@/components/Lightbox'
// Real product photography (string paths — served from /public)
const imgMandirGold        = '/3a061ab1-6c2f-4b58-ba74-5dd272186ae9.JPG'
const imgWallPanel         = '/IMG_0486.JPG'
const imgStoneInstalled    = '/59e67835-529b-4b94-a588-4e31f497ae32.JPG'
const imgShowroom          = '/c96cec35-7fd3-4116-b9eb-fe653ebbfd94.JPG'
const imgMandirBacklit     = '/2b612184-fed7-4bf1-a567-70e942bc4c47.JPG'
const imgMandirArch        = '/8cd93079-08b1-4f93-8fe9-14343ea343ce.JPG'
const imgMandirPeacock     = '/bccf36b9-306a-4db9-9815-2f74dec9e86b.JPG'
const imgMandirLarge       = '/IMG_0481.JPG'
const imgMandirGoldInterior = '/IMG_2059.jpeg'

const PRODUCTS = [
  {
    tag: 'Sacred Spaces',
    name: 'Corian Mandirs',
    desc: 'Seamless, non-porous Corian solid surface crafted into exquisite home mandirs — hygienic, timeless, and utterly divine.',
    image: imgMandirGold,
    alt: 'Corian Mandir by Devasthanam',
  },
  {
    tag: 'Interior Surfaces',
    name: 'Wall Panels',
    desc: 'Decorative Corian and stone wall panels that transform interiors with rich textures and architectural elegance.',
    image: imgWallPanel,
    alt: 'Wall Panels by Devasthanam',
  },
  {
    tag: 'Natural Stone',
    name: 'Stone Panels',
    desc: 'Premium natural and engineered stone panels — marble, granite, and quartz — for walls, floors, and feature walls.',
    image: imgStoneInstalled,
    alt: 'Stone Panels by Devasthanam',
  },
  {
    tag: 'Custom Surfaces',
    name: 'Table Tops',
    desc: 'Bespoke table tops in Corian and natural stone, built to exacting dimensions for beauty that lasts a lifetime.',
    image: temple7LImg,
    alt: 'Table Tops by Devasthanam',
  },
]

const TESTIMONIALS = [
  {
    text: 'Devasthanam transformed our pooja room into something truly divine. The Corian mandir is seamless, pristine and absolutely beautiful. Our family is overjoyed.',
    name: 'Rajesh Sharma',
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
  },
  {
    text: 'The stone wall panels in our living room are the centrepiece of our home. Exceptional quality and the installation team was incredibly professional throughout.',
    name: 'Priya Mehta',
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
  },
  {
    text: 'We ordered custom Corian table tops for our office — sleek, flawless, delivered on time. Devasthanam is our go-to for all premium surface work.',
    name: 'Amit Jain',
    location: 'Kolkata',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
  },
]

const GALLERY = [
  // Real studio photos
  { src: imgShowroom,           alt: 'Devasthanam Studio — two mandirs on display',   label: 'Studio Showcase',   location: 'Kolkata Showroom',    featured: true },
  { src: imgMandirBacklit,      alt: 'Backlit Corian Mandir with OM motif',           label: 'Corian Mandir',     location: 'Residential, Kolkata' },
  { src: imgMandirPeacock,      alt: 'Peacock feather OM Corian Mandir',              label: 'Corian Mandir',     location: 'Client Home, Kolkata' },
  { src: imgStoneInstalled,     alt: 'Stone panel with peacock art, installed',        label: 'Stone Panels',      location: 'Luxury Apartment'     },
  { src: imgMandirGold,         alt: 'Gold ornate Corian Mandir',                      label: 'Corian Mandir',     location: 'Showroom Display'     },
  { src: imgMandirArch,         alt: 'Large arch Corian Mandir with deity',            label: 'Corian Mandir',     location: 'Community Space'      },
  { src: imgWallPanel,          alt: 'Corian wall panel with floral relief carvings',  label: 'Wall Panels',       location: 'Residential, Kolkata' },
  { src: imgMandirLarge,        alt: 'Large white ornate Corian Mandir',               label: 'Corian Mandir',     location: 'Home Installation'    },
  { src: imgMandirGoldInterior, alt: 'Gold illuminated Corian Mandir interior',        label: 'Corian Mandir',     location: 'Premium Residence'    },
  // Design & render portfolio
  { src: stoneDesign1Img,       alt: 'Stone panel design',                             label: 'Stone Panels',      location: 'Design Portfolio'     },
  { src: heroTempleDesign,      alt: 'Corian Mandir design render',                    label: 'Corian Mandir',     location: 'Design Portfolio'     },
  { src: marbleCarvingImg,      alt: 'Marble carving wall panel',                      label: 'Wall Panels',       location: 'Design Portfolio'     },
  { src: temple3LImg,           alt: 'Corian Mandir 3L design',                        label: 'Corian Mandir',     location: 'Design Portfolio'     },
  { src: temple5LImg,           alt: 'Corian Mandir 5L design',                        label: 'Corian Mandir',     location: 'Design Portfolio'     },
  { src: temple2LImg,           alt: 'Corian Mandir 2L design',                        label: 'Corian Mandir',     location: 'Design Portfolio'     },
]

const TICKER = [
  'Corian Mandirs', 'Wall Panels', 'Stone Panels', 'Table Tops',
  'Kolkata Craftsmanship', 'Pan India Delivery', 'Custom Made',
]

const PROCESS = [
  { n: '01', title: 'Free Consultation', desc: 'One-on-one consultation to understand your space, vision and budget — no obligation.' },
  { n: '02', title: 'Design Proposal', desc: 'Custom design proposal with material samples, 3D references and transparent pricing.' },
  { n: '03', title: 'Fabrication', desc: 'Precision fabrication at our Kolkata workshop by expert craftsmen using premium materials.' },
  { n: '04', title: 'Quality Check', desc: 'Rigorous quality inspection of every piece before it leaves our facility.' },
  { n: '05', title: 'Installation', desc: 'Professional installation at your site with full cleanup and final walkthrough.' },
]

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600)

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))

    return () => {
      clearTimeout(t)
      io.disconnect()
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitting(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'ffb4b26f-218a-4cfd-bdb5-042c33b095ff',
          subject: `New Enquiry from ${formData.name}${formData.service ? ` — ${formData.service}` : ''}`,
          from_name: 'Devasthanam Website',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          'Product Interest': formData.service || 'Not specified',
          message: formData.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setFormSubmitted(true)
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        alert('Something went wrong. Please try again or WhatsApp us directly.')
      }
    } catch {
      alert('Network error. Please WhatsApp us directly at +91 90071 37413.')
    } finally {
      setFormSubmitting(false)
    }
  }

  return (
    <>
      {/* Preloader */}
      {loading && (
        <div className="preloader">
          <div className="preloader-content">
            <div className="preloader-logo">Devasthanam</div>
            <div className="preloader-spinner"></div>
          </div>
        </div>
      )}

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="hero-v2">
        <div className="hero-v2-bg">
          <Image
            src={landingPageImg}
            alt="Devasthanam Premium Interiors"
            fill
            priority
            quality={92}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="hero-v2-overlay" />
        </div>
        <div className="hero-v2-content">
          <div className="hero-v2-inner">
            <span className="hero-v2-badge">Kolkata · Pan India</span>
            <h1 className="hero-v2-title">
              Where Stone<br /><em>Meets Soul</em>
            </h1>
            <p className="hero-v2-desc">
              Premium Corian Mandirs, Wall Panels, Stone Panels &amp; Table Tops —
              handcrafted by master artisans in Kolkata.
            </p>
            <div className="hero-v2-cta">
              <Link href="#products" className="btn-gold">Explore Collections</Link>
              <Link href="/contact" className="btn-ghost-white">Book Free Consultation</Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-mouse"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ── TICKER ────────────────────────────────────────── */}
      <div className="ticker-section" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER, ...TICKER, ...TICKER].map((item, i) => (
            <div key={i} className="ticker-item">
              <span className="ticker-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS ──────────────────────────────────────── */}
      <section id="products" className="products-v2">
        <div className="container">
          <div className="products-v2-header reveal">
            <p className="eyebrow">What We Create</p>
            <h2 className="products-v2-title">Our Signature Collections</h2>
            <p className="products-v2-subtitle">
              From sacred mandirs to striking surfaces — every piece made-to-measure, just for you.
            </p>
          </div>
        </div>
        <div className="products-v2-grid reveal">
          {PRODUCTS.map((p) => (
            <Link href="/contact" key={p.name} className="product-card-v2">
              <div className="product-card-v2-img">
                <Image src={p.image} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 25vw" style={{ objectFit: 'cover' }} />
              </div>
              <div className="product-card-v2-overlay" />
              <div className="product-card-v2-content">
                <span className="product-card-v2-tag">{p.tag}</span>
                <h3 className="product-card-v2-name">{p.name}</h3>
                <p className="product-card-v2-desc">{p.desc}</p>
                <div className="product-card-v2-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── MATERIALS ─────────────────────────────────────── */}
      <section className="materials-section">
        <div className="material-panel">
          <div className="material-panel-bg">
            <Image src={imgMandirArch} alt="Corian Solid Surface" fill sizes="50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="material-panel-overlay" />
          <div className="material-panel-content reveal">
            <span className="material-label">Material · 01</span>
            <h2 className="material-title">Corian<br />Solid Surface</h2>
            <p className="material-desc">
              DuPont&apos;s premium solid surface — non-porous, seamless and thermoformable.
              The choice for mandirs and panels that demand flawless, lasting beauty.
            </p>
            <ul className="material-features">
              <li>Non-porous &amp; hygienic — ideal for sacred spaces</li>
              <li>Seamless joins, zero visible grout lines</li>
              <li>100+ colours, textures and finishes</li>
              <li>Repairable, renewable, sustainable</li>
            </ul>
            <Link href="/contact" className="btn-gold">Enquire About Corian</Link>
          </div>
        </div>

        <div className="material-panel">
          <div className="material-panel-bg">
            <Image src={imgStoneInstalled} alt="Natural & Engineered Stone" fill sizes="50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div className="material-panel-overlay" />
          <div className="material-panel-content reveal">
            <span className="material-label">Material · 02</span>
            <h2 className="material-title">Natural &amp;<br />Engineered Stone</h2>
            <p className="material-desc">
              Timeless marble, granite and engineered quartz with one-of-a-kind natural veining.
              Each slab is a unique work of art — yours to own forever.
            </p>
            <ul className="material-features">
              <li>Unique natural veining &amp; patterns</li>
              <li>Exceptional hardness &amp; durability</li>
              <li>Marble, granite, slate &amp; engineered quartz</li>
              <li>Pan India sourcing &amp; installation</li>
            </ul>
            <Link href="/contact" className="btn-gold">Enquire About Stone</Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────── */}
      <section className="why-us-v2">
        <div className="container">
          <div className="why-us-v2-header reveal">
            <p className="eyebrow">Why Devasthanam</p>
            <h2>Craftsmanship You Can Trust</h2>
            <p className="products-v2-subtitle">
              Built on 15+ years of experience and hundreds of delighted families across India.
            </p>
          </div>
          <div className="why-us-v2-grid reveal">
            {[
              {
                icon: 'fas fa-gem',
                title: 'Premium Materials Only',
                desc: 'We source the finest Corian solid surface and hand-selected natural stones. Material quality is never compromised.',
              },
              {
                icon: 'fas fa-ruler-combined',
                title: '100% Custom Made',
                desc: 'Every piece is made-to-measure for your exact space. No standard sizes — pure bespoke craftsmanship.',
              },
              {
                icon: 'fas fa-tools',
                title: 'Expert Installation',
                desc: 'Trained installation teams handle every project with precision, from Kolkata across Pan India.',
              },
              {
                icon: 'fas fa-headset',
                title: 'After-Sales Support',
                desc: "Your satisfaction doesn't end at delivery. We provide dedicated after-sales support and warranty on all work.",
              },
            ].map((card) => (
              <div key={card.title} className="why-card-v2">
                <div className="why-card-icon"><i className={card.icon}></i></div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section className="process-v2">
        <div className="container">
          <div className="process-v2-header reveal">
            <span className="eyebrow process-eyebrow">Our Process</span>
            <h2>Crafted With Care, Every Step</h2>
            <p>From your first call to the final installation — here&apos;s how we bring your vision to life.</p>
          </div>
          <div className="process-v2-steps reveal">
            {PROCESS.map((step) => (
              <div key={step.n} className="process-step-v2">
                <div className="process-step-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────── */}
      <section id="projects" className="gallery-v2">
        <div className="container">
          <div className="gallery-v2-header reveal">
            <p className="eyebrow">Portfolio</p>
            <h2>Our Work Speaks</h2>
            <p className="products-v2-subtitle">A selection of projects completed across India — each one a testament to precision and craft.</p>
          </div>
          <div className="gallery-grid-v2 reveal">
            {GALLERY.map((item, i) => (
              <div
                key={i}
                className={`gallery-item-v2${item.featured ? ' featured' : ''}`}
                onClick={() => setLightboxIndex(i)}
                style={{ cursor: 'zoom-in' }}
              >
                <div className="gallery-item-v2-inner">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes={item.featured ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 50vw, 33vw'}
                    style={{ objectFit: 'cover' }}
                    className="gallery-item-v2-img"
                    unoptimized={typeof item.src === 'string'}
                  />
                  <div className="gallery-item-v2-overlay">
                    <div className="gallery-item-v2-info">
                      <h4>{item.label}</h4>
                      <span>{item.location}</span>
                    </div>
                    <div className="gallery-item-v2-zoom"><i className="fas fa-expand"></i></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {lightboxIndex !== null && (
            <Lightbox
              images={GALLERY.map((g) => ({ src: g.src, alt: g.alt }))}
              index={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
              onNav={setLightboxIndex}
            />
          )}
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section className="testimonials-v2">
        <div className="container">
          <div className="testimonials-v2-header reveal">
            <p className="eyebrow process-eyebrow">Client Stories</p>
            <h2 style={{ color: '#fff' }}>Trusted by Families Across India</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '460px', margin: '0 auto' }}>
              Real words from real clients — because our work truly speaks for itself.
            </p>
          </div>
          <div className="testimonials-v2-grid reveal">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-v2-card">
                <span className="testimonial-v2-quote">&ldquo;</span>
                <div className="testimonial-v2-stars">
                  {[1, 2, 3, 4, 5].map((s) => <i key={s} className="fas fa-star"></i>)}
                </div>
                <p className="testimonial-v2-text">{t.text}</p>
                <div className="testimonial-v2-author">
                  <div className="testimonial-v2-avatar">
                    <Image src={t.image} alt={t.name} width={50} height={50} style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p className="testimonial-v2-author-name">{t.name}</p>
                    <p className="testimonial-v2-author-location">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="stats-v2">
        <div className="container">
          <div className="stats-v2-grid reveal">
            <div className="stat-v2-item">
              <CountUpOnView end={500} />
              <p className="stat-v2-label">Projects Completed</p>
              <p className="stat-v2-sub">Across India</p>
            </div>
            <div className="stat-v2-item">
              <CountUpOnView end={15} />
              <p className="stat-v2-label">Years of Excellence</p>
              <p className="stat-v2-sub">Kolkata-based craftsmanship</p>
            </div>
            <div className="stat-v2-item">
              <CountUpOnView end={50} />
              <p className="stat-v2-label">Cities Served</p>
              <p className="stat-v2-sub">Pan India delivery</p>
            </div>
            <div className="stat-v2-item">
              <CountUpOnView end={100} suffix="%" />
              <p className="stat-v2-label">Custom Made</p>
              <p className="stat-v2-sub">Every single piece</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────── */}
      <section className="contact-cta-v2">
        <div className="container">
          <div className="contact-cta-v2-inner">
            <div className="contact-cta-v2-text reveal">
              <p className="eyebrow">Get In Touch</p>
              <h2>Let&apos;s Create Something<br />Beautiful Together</h2>
              <p>
                Ready to transform your space with premium Corian or stone surfaces?
                Our team guides you from concept to perfect completion.
              </p>
              <div className="contact-v2-info-items">
                <div className="contact-v2-info-item">
                  <div className="contact-v2-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <span>48, SN Roy Rd, New Alipore, Kolkata — 700038</span>
                </div>
                <div className="contact-v2-info-item">
                  <div className="contact-v2-icon"><i className="fas fa-phone"></i></div>
                  <a href="tel:+919007137413">+91 90071 37413</a>
                </div>
                <div className="contact-v2-info-item">
                  <div className="contact-v2-icon"><i className="fas fa-envelope"></i></div>
                  <a href="mailto:devasthanamsurfaces@gmail.com">devasthanamsurfaces@gmail.com</a>
                </div>
                <div className="contact-v2-info-item">
                  <div className="contact-v2-icon"><i className="fab fa-whatsapp"></i></div>
                  <a href="https://wa.me/919007137413" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-v2-form reveal">
              <h3 style={{ marginBottom: '28px', color: 'var(--text-dark)', fontSize: '1.4rem' }}>Send Us an Enquiry</h3>
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <i className="fas fa-check-circle" style={{ fontSize: '2.8rem', color: 'var(--secondary-color)', marginBottom: '16px', display: 'block' }}></i>
                  <p style={{ fontWeight: 600, color: 'var(--primary-dark)', marginBottom: '8px' }}>Thank you!</p>
                  <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem' }}>We&apos;ll reach out within 24 hours.</p>
                </div>
              ) : (
              <form onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="">I&apos;m interested in... *</option>
                    <option value="corian-mandir">Corian Mandir</option>
                    <option value="wall-panels">Wall Panels</option>
                    <option value="stone-panels">Stone Panels</option>
                    <option value="table-tops">Table Tops</option>
                    <option value="multiple">Multiple / Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Tell us about your project, space and vision..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ resize: 'vertical' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }} disabled={formSubmitting}>
                  {formSubmitting ? 'Sending…' : 'Send Enquiry →'}
                </button>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP FLOAT ────────────────────────────────── */}
      <div className="whatsapp-float">
        <span className="whatsapp-tooltip">Chat on WhatsApp</span>
        <a
          href="https://wa.me/919007137413"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float-btn"
          aria-label="Chat on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </>
  )
}
