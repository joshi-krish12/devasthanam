import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-v2">
      <div className="container">
        <div className="footer-v2-top">
          {/* Brand Column */}
          <div className="footer-v2-brand">
            <Link href="/">
              <Image
                src="/logo-transparent.png"
                alt="Devasthanam"
                width={160}
                height={64}
                className="footer-v2-logo"
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            </Link>
            <p>
              Kolkata&apos;s premier Corian and stone interior specialists.
              Crafting mandirs, wall panels, stone panels and table tops
              that blend artistry with enduring quality.
            </p>
            <div className="footer-v2-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://wa.me/919007137413" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="footer-v2-col">
            <h4>Our Products</h4>
            <ul>
              <li><Link href="/#products">Corian Mandirs</Link></li>
              <li><Link href="/#products">Wall Panels</Link></li>
              <li><Link href="/#products">Stone Panels</Link></li>
              <li><Link href="/#products">Table Tops</Link></li>
              <li><Link href="/contact">Custom Projects</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-v2-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/#projects">Gallery</Link></li>
              <li><Link href="/#projects">Our Projects</Link></li>
              <li><Link href="/contact">Enquire / Collaborate</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-v2-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="tel:+919007137413">+91 90071 37413</a>
              </li>
              <li>
                <a href="mailto:info@devasthanam.com">info@devasthanam.com</a>
              </li>
              <li>
                <a href="https://maps.google.com/?q=48+SN+Roy+Rd+Kolkata" target="_blank" rel="noopener noreferrer">
                  48, SN Roy Rd, New Alipore<br />Kolkata, WB — 700038
                </a>
              </li>
              <li>
                <Link href="/contact">Book a Consultation</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-v2-bottom">
          <p>&copy; {new Date().getFullYear()} Devasthanam India. All rights reserved.</p>
          <div className="footer-v2-bottom-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms &amp; Conditions</Link>
            <Link href="/privacy#disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
