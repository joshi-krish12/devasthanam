'use client'

import Link from 'next/link'
import Image from 'next/image'
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
            <Image 
              src="/logo.jpg" 
              alt="Devasthanam - Sacred Craftsmanship for Your Home" 
              width={300}
              height={150}
              priority
              className="logo-image"
              style={{ objectFit: 'contain' }}
              unoptimized
            />
          </Link>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link href="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#pricing" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Our Collections
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#catalog" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Catalogs
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link btn-appointment" onClick={() => setIsMenuOpen(false)}>
              Book Appointment
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
