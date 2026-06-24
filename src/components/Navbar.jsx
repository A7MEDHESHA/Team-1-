import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 py-3 lumina-navbar">
      <Link className="navbar-brand lumina-logo" to="/">LUMINA</Link>

      <div className="d-flex flex-grow-1 justify-content-center gap-4 lumina-links">
        <Link to="/shop" className="lumina-link active">Shop All</Link>
        <Link to="/new-arrivals" className="lumina-link">Categories</Link>
        <Link to="/about" className="lumina-link">About Us</Link>
        <Link to="/contact" className="lumina-link">Contact Us</Link>
      </div>

      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-search lumina-icon"></i>
        <Link to="/account"><i className="bi bi-person lumina-icon"></i></Link>
        <Link to="/cart" className="position-relative">
          <i className="bi bi-cart lumina-icon"></i>
          <span className="cart-dot"></span>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar