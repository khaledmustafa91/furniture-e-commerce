import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './components/Shop';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import { createContext, useState } from 'react';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PlacedOrder from './components/PlacedOrder';
export const CartContext = createContext(null);

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/about_us" element={<AboutUs />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/blogs" element={<Blogs />} />
            <Route exact path="/contact_us" element={<ContactUs />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/placed_order" element={<PlacedOrder />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;
