import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './Pages/Home/Home.jsx'
import ShopAll from './Pages/ShopAll/ShopAll.jsx'
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx'
import NewArrivals from './Pages/NewArrivals/NewArrivals.jsx'
import AboutUs from './Pages/AboutUs/AboutUs.jsx'
import ContactUs from './Pages/ContactUs/ContactUs.jsx'
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart.jsx'
import Checkout from './Pages/Checkout/Checkout.jsx'
import MyAccount from './Pages/MyAccount/MyAccount.jsx'

function App() {
  return (
    <>
      <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopAll />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/new-arrivals" element={<NewArrivals />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/account" element={<MyAccount />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App