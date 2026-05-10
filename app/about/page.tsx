'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import CountUpOnView from '@/components/CountUpOnView'
import stoneDesign1Img from '@/public/stone-design1.png'

// Real studio / product photography (string paths — served from /public)
const imgShowroom      = '/c96cec35-7fd3-4116-b9eb-fe653ebbfd94.JPG'
const imgMandirLarge   = '/IMG_0481.JPG'
const imgStoneInstalled = '/59e67835-529b-4b94-a588-4e31f497ae32.JPG'
const imgMandirArch2   = '/IMG_0482.JPG'

export default function About() {
  const revealRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <>
      {/* ── Page Hero ── */}
      <section className="about-hero-v2">
        <div className="about-hero-v2-bg">
          <Image
            src={imgShowroom}
            alt="Devasthanam studio showroom"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          <div className="about-hero-v2-overlay" />
        </div>
        <div className="about-hero-v2-content container">
          <p className="about-hero-v2-eyebrow">Est. in Kolkata</p>
          <h1 className="about-hero-v2-title">
            Crafted with<br /><em>Material Mastery</em>
          </h1>
          <p className="about-hero-v2-sub">
            15+ years of precision in Corian and stone — from sacred home mandirs to architectural wall panels and bespoke surfaces.
          </p>
        </div>
      </section>

      {/* ── Story Section ── */}
      <section className="about-story-v2">
        <div className="container">
          <div className="about-story-v2-grid">
            <div ref={addRef} className="about-story-v2-images reveal">
              <div className="about-story-img-main">
                <Image src={imgMandirLarge} alt="Large Corian Mandir by Devasthanam" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className="about-story-img-accent">
                <Image src={imgMandirArch2} alt="Ornate Corian Mandir detail" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div ref={addRef} className="about-story-v2-text reveal" style={{ transitionDelay: '0.15s' }}>
              <span className="section-eyebrow">Our Story</span>
              <h2>Where Devotion Meets Design</h2>
              <p>
                Devasthanam was born in Kolkata from a singular conviction — that every sacred space and interior surface deserves the same attention a master sculptor gives to marble. We work exclusively with two material families: <strong>Corian solid surface</strong> and <strong>natural &amp; engineered stone</strong>.
              </p>
              <p>
                Over the years we have moved beyond the traditional to build a practice that is as comfortable designing a seamless Corian home mandir as it is laying a dramatic stone feature wall for a luxury hotel lobby. Both demand precision. Both demand beauty that endures.
              </p>
              <p>
                Based at 48 SN Roy Road, New Alipore, our studio and workshop are in Kolkata — serving clients across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Manifesto Quote ── */}
      <section className="about-manifesto-v2">
        <div className="container">
          <blockquote ref={addRef} className="about-manifesto-quote reveal">
            <span className="manifesto-mark">&ldquo;</span>
            <p>Material is memory. Corian remembers the seamlessness of pure form. Stone remembers the earth. We remember both.</p>
            <cite>— The Devasthanam Studio</cite>
          </blockquote>
        </div>
      </section>

      {/* ── Materials We Work With ── */}
      <section className="about-materials-v2">
        <div className="about-materials-v2-grid">
          <div className="about-material-panel about-material-corian">
            <Image src={imgMandirLarge} alt="Corian Surface" fill style={{ objectFit: 'cover' }} />
            <div className="about-material-overlay" />
            <div ref={addRef} className="about-material-content reveal">
              <span className="about-material-tag">Solid Surface</span>
              <h3>Corian</h3>
              <p>Non-porous, seamlessly thermoformed, endlessly repairable. The material of choice for mandirs, counters, and wall cladding where hygiene and elegance must coexist.</p>
              <ul>
                <li>Hygienic &amp; non-porous</li>
                <li>Invisible joins</li>
                <li>Renewable surface</li>
                <li>600+ colour options</li>
              </ul>
            </div>
          </div>
          <div className="about-material-panel about-material-stone">
            <Image src={imgStoneInstalled} alt="Natural Stone Surface Installed" fill style={{ objectFit: 'cover' }} />
            <div className="about-material-overlay" />
            <div ref={addRef} className="about-material-content reveal" style={{ transitionDelay: '0.12s' }}>
              <span className="about-material-tag">Natural &amp; Engineered</span>
              <h3>Stone</h3>
              <p>Marble, granite, quartzite, and engineered quartz — selected for their veining, density and finish. Every slab is unique; every installation, permanent.</p>
              <ul>
                <li>Marble, granite, quartz</li>
                <li>Unique natural patterns</li>
                <li>Polished or honed finish</li>
                <li>Architectural grade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="about-values-v2">
        <div className="container">
          <div ref={addRef} className="about-values-v2-header reveal">
            <span className="section-eyebrow">What Drives Us</span>
            <h2>Our Principles</h2>
          </div>
          <div className="about-values-v2-grid">
            {[
              {
                icon: 'fas fa-drafting-compass',
                title: 'Precision First',
                desc: 'Every cut, join, and finish is measured to fractions of a millimetre. We do not approximate.',
              },
              {
                icon: 'fas fa-leaf',
                title: 'Material Integrity',
                desc: 'We source Corian through authorised channels and stone from vetted quarries — quality starts before the studio.',
              },
              {
                icon: 'fas fa-pencil-ruler',
                title: 'Bespoke Always',
                desc: 'No catalogue pieces. Every project begins with your space, your brief, your proportions.',
              },
              {
                icon: 'fas fa-handshake',
                title: 'End-to-End',
                desc: 'Design, fabrication, delivery, and installation — one team, one accountability, zero handoff gaps.',
              },
            ].map((v, i) => (
              <div
                key={v.title}
                ref={addRef}
                className="about-value-card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="about-value-icon">
                  <i className={v.icon}></i>
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="about-stats-v2">
        <div className="container">
          <div className="about-stats-v2-grid">
            <div className="about-stat-item">
              <CountUpOnView end={500} suffix="+" duration={2200} />
              <p>Projects Completed</p>
            </div>
            <div className="about-stat-item">
              <CountUpOnView end={15} suffix="+" duration={1800} />
              <p>Years of Expertise</p>
            </div>
            <div className="about-stat-item">
              <CountUpOnView end={50} suffix="+" duration={2000} />
              <p>Cities Served</p>
            </div>
            <div className="about-stat-item">
              <CountUpOnView end={100} suffix="%" duration={1600} />
              <p>Satisfaction Guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-v2">
        <div className="container">
          <div ref={addRef} className="about-cta-v2-inner reveal">
            <h2>Let&apos;s Build Something Extraordinary</h2>
            <p>Whether you are a homeowner with a vision or an interior designer seeking a trusted fabrication partner — we are ready.</p>
            <div className="about-cta-v2-btns">
              <Link href="/contact" className="btn-gold">Book a Consultation</Link>
              <a href="https://wa.me/919007137413" target="_blank" rel="noopener noreferrer" className="btn-ghost-dark">
                <i className="fab fa-whatsapp" style={{ marginRight: 8 }}></i>WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
