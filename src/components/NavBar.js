import UserImage from '../assets/images/user.svg';
import CartImage from '../assets/images/cart.svg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      {/* Start Header/Navigation */}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            Furni<span>.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarsFurni">
            <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about_us" className="nav-link">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="nav-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact_us" className="nav-link">
                  Contact us
                </Link>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <Link to="/" className="nav-link">
                  <img src={UserImage} alt="User" />
                </Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link">
                  <img src={CartImage} alt="Cart" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Header/Navigation */}
    </>
  );
};

export default NavBar;
