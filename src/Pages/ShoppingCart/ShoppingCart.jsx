import './ShoppingCart.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Cart1 from '../../assets/Cart1.png'

const initialCartItems = [
  {
    id: 1,
    name: 'Ethereal Form Ceramic Vase',
    details: 'SIZE: MEDIUM | COLOR: IVORY',
    price: 185.00,
    image: Cart1,
    qty: 1,
  },
  {
    id: 2,
    name: 'Amber & Velvet Signature Candle',
    details: 'SCENT: OAK | 12 OZ',
    price: 64.00,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200&q=80",
    qty: 1,
  },
  {
    id: 3,
    name: 'Pure Linen Heirloom Throw',
    details: 'COLOR: SLATE | SIZE: 50X70 | MATERIAL: LINEN',
    price: 210.00,
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=200&q=80",
    qty: 1,
  },
]

const recommended = [
  { id: 1, name: 'Midnight Beam Table Lamp', price: 295.00, image: 'https://placehold.co/300x180/e2e8f0/64748b?text=Lamp' },
  { id: 2, name: 'Ripple Glass Set', price: 110.00, image: 'https://placehold.co/300x180/e2e8f0/64748b?text=Glass+Set' },
  { id: 3, name: 'Modern Form: An Archive', price: 85.00, image: 'https://placehold.co/300x180/e2e8f0/64748b?text=Book' },
  { id: 4, name: 'Brass Incense Obelisk', price: 145.00, image: 'https://placehold.co/300x180/e2e8f0/64748b?text=Incense' },
]

function ShoppingCart() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  // Increase quantity
  function handleIncrease(id) {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ))
  }

  // Decrease quantity — remove item if qty reaches 0
  function handleDecrease(id) {
    setCartItems(cartItems
      .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
      .filter(item => item.qty > 0)
    )
  }

  // Remove item completely
  function handleRemove(id) {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  const shipping = 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="cart-page">
      <div className="container py-5">

        {/* PAGE TITLE */}
        <h1 className="cart-title">Your Shopping Bag</h1>
        <p className="cart-count">
          {cartItems.length === 0
            ? 'Your cart is empty.'
            : `There are ${cartItems.length} items in your cart.`}
        </p>

        <div className="row g-4">

          {/* LEFT — CART ITEMS */}
          <div className="col-12 col-lg-8">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <p>You have no items in your bag.</p>
                <Link to="/shop" className="btn-lumina-primary px-4 py-2">SHOP NOW</Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <h6 className="cart-item-name">{item.name}</h6>
                    <p className="cart-item-details">{item.details}</p>
                    <div className="cart-item-qty">
                      <button className="qty-btn" onClick={() => handleDecrease(item.id)}>-</button>
                      <span className="qty-value">{item.qty}</span>
                      <button className="qty-btn" onClick={() => handleIncrease(item.id)}>+</button>
                    </div>
                  </div>
                  <div className="cart-item-right">
                    <p className="cart-item-price">${(item.price * item.qty).toFixed(2)}</p>
                    <button className="remove-btn" onClick={() => handleRemove(item.id)}>✕ REMOVE</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <div className="col-12 col-lg-4">
            <div className="order-summary">
              <h5 className="summary-title">Order Summary</h5>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Estimated Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Sales Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-row summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link to="/checkout">
                <button className="checkout-btn" disabled={cartItems.length === 0}>
                  PROCEED TO CHECKOUT
                </button>
              </Link>

              <div className="summary-badges">
                <p><i className="bi bi-shield-check"></i> SECURE CHECKOUT GUARANTEED</p>
                <p><i className="bi bi-truck"></i> FREE GLOBAL EXPRESS SHIPPING</p>
              </div>
            </div>
          </div>

        </div>

        {/* YOU MAY ALSO LIKE */}
        <div className="recommended-section mt-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="recommended-title">You May Also Like</h4>
            <Link to="/shop" className="explore-link">EXPLORE ALL</Link>
          </div>

          <div className="row g-3">
            {recommended.map((item) => (
              <div key={item.id} className="col-6 col-md-3">
                <div className="rec-card">
                  <img src={item.image} alt={item.name} className="rec-card-img" />
                  <h6 className="rec-card-name">{item.name}</h6>
                  <p className="rec-card-price">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShoppingCart