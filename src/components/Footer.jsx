import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="lumina-footer">
      <div className="container py-5">
        <div className="row">
          {/* Brand column */}
          <div className="col-12 col-md-5 mb-4 mb-md-0">
            <h3 className="footer-logo">LUMINA</h3>
            <p className="footer-text">
              Thoughtfully designed garments and accessories for the modern
              aesthetic. Shipping worldwide from our atelier.
            </p>
            <div className="d-flex gap-3 footer-badges">
              <i className="bi bi-patch-check-fill"></i>
              <i className="bi bi-leaf-fill"></i>
              <i className="bi bi-award-fill"></i>
            </div>
          </div>

          {/* Shop column */}
          <div className="col-6 col-md-3 mb-4 mb-md-0">
            <h6 className="footer-heading">SHOP</h6>
            <ul className="footer-links">
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/shop">Bestsellers</Link></li>
              <li><Link to="/about">Sustainability</Link></li>
            </ul>
          </div>

          {/* Support column */}
          <div className="col-6 col-md-4">
            <h6 className="footer-heading">SUPPORT</h6>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/shipping">Shipping Info</Link></li>
              <li><Link to="/returns">Returns</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="container py-3">
        <div className="row align-items-center">
          <div className="col-6">
            <p className="footer-copyright mb-0">© 2024 LUMINA. All rights reserved.</p>
          </div>
          <div className="col-6 text-end">
            <span className="footer-payments">VISA &nbsp; MASTERCARD &nbsp; AMEX &nbsp; APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer