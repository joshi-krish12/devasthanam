import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>House of Devasthanam</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/experience-centre">Experience Centre</Link></li>
              <li><Link href="/team">The Team</Link></li>
              <li><Link href="/collaborations">Collaborations</Link></li>
              <li><Link href="/clients">Our Clients</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick links</h3>
            <ul>
              <li><Link href="/how-it-works">How it Works</Link></li>
              <li><Link href="/pooja-rooms">Pooja Room</Link></li>
              <li><Link href="/dream-temples">Dream Temples</Link></li>
              <li><Link href="/communal-temples">Communal Temples</Link></li>
              <li><Link href="/services">Devasthanam International</Link></li>
              <li><Link href="/contact">Book appointment</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link href="/corporate-info">Corporate Info</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/cookies">Cookies Policy</Link></li>
              <li><Link href="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Need Help</h3>
            <ul>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/location">Stores</Link></li>
              <li><a href="tel:+919319374633">Call Us</a></li>
              <li><a href="mailto:info@devasthanam.com">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-locations">
          <div className="location-section">
            <h4>Marble Temple across India:</h4>
            <p>Marble Temple in Mumbai | Marble Temple in Delhi | Marble Temple in Bengaluru | Marble Temple in Hyderabad | Marble Temple in Ahmedabad | Marble Temple in Surat | Marble Temple in Kolkata | Marble Temple in Jaipur | Marble Temple in Pune</p>
          </div>
          <div className="location-section">
            <h4>Marble Temple across the Globe:</h4>
            <p>Marble Temple in Dubai | Marble Temple in USA | Marble Temple in Australia | Marble Temple in Tanzania | Marble Temple in UK</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="contact-info">
            <p><strong>Address:</strong> First & Second Floor, Devasthanam India, Mall 21, Mirza Ismail Road, Opposite Rajmandir Cinema, 5 Batti, C Scheme, Jaipur, Rajasthan 302001</p>
            <p><strong>Call:</strong> +91 93193 74633 | <strong>Email:</strong> info@devasthanam.com</p>
          </div>
          <p className="copyright">All Rights Reserved @2025 Devasthanam India</p>
        </div>
      </div>
    </footer>
  )
}
