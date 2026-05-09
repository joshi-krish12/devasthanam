'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const PRODUCTS = [
  { name: 'Corian Mandirs', href: '/contact' },
  { name: 'Wall Panels', href: '/contact' },
  { name: 'Stone Panels', href: '/contact' },
  { name: 'Table Tops', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(!isHome)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)

  useEffect(() => {
    setScrolled(!isHome || window.scrollY > 60)
    if (!isHome) return
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  const close = () => {
    setMenuOpen(false)
    setMobileProductsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link href="/" onClick={close}>
            <Image
              src="/logo-transparent.png"
              alt="Devasthanam"
              width={180}
              height={72}
              priority
              className="logo-image"
              style={{ objectFit: 'contain' }}
              unoptimized
            />
          </Link>
        </div>

        {/* Desktop + Mobile Menu */}
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/" className="nav-link" onClick={close}>Home</Link>
          </li>

          {/* Desktop dropdown (hidden on mobile via CSS) */}
          <li
            className="nav-item nav-dropdown desktop-dropdown"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <span className="nav-link nav-dropdown-toggle">
              Products <i className="fas fa-chevron-down nav-chevron" style={{ fontSize: '0.65rem', marginLeft: '4px' }}></i>
            </span>
            {productsOpen && (
              <ul className="dropdown-menu">
                {PRODUCTS.map((p) => (
                  <li key={p.name}>
                    <Link href={p.href} onClick={() => { close(); setProductsOpen(false) }}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Mobile accordion (hidden on desktop via CSS) */}
          <li className="nav-item mobile-dropdown">
            <span
              className="nav-link nav-dropdown-toggle"
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            >
              Products{' '}
              <i
                className={`fas fa-chevron-${mobileProductsOpen ? 'up' : 'down'}`}
                style={{ fontSize: '0.65rem', marginLeft: '4px' }}
              ></i>
            </span>
            {mobileProductsOpen && (
              <ul className="mobile-sub-list">
                {PRODUCTS.map((p) => (
                  <li key={p.name}>
                    <Link href={p.href} className="mobile-sub-link" onClick={close}>
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="nav-item">
            <Link href="/#projects" className="nav-link" onClick={close}>Gallery</Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link" onClick={close}>About</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link" onClick={close}>Contact</Link>
          </li>

          {/* CTA inside mobile menu */}
          <li className="nav-item mobile-cta">
            <Link href="/contact" className="btn-appointment" onClick={close}>
              Get Free Quote
            </Link>
          </li>
        </ul>

        {/* Desktop CTA */}
        <Link href="/contact" className="btn-appointment desktop-cta" onClick={close}>
          Get Free Quote
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  )
}
