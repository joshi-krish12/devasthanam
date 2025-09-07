'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">
            <h2>Devasthanam</h2>
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              House of Devasthanam
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/pooja-rooms" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Our Creations
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Our Services
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              How it Works
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/location" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Location
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Book Appointment
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
          </li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}
