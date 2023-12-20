import UserImage from '../assets/images/user.svg';
import CartImage from '../assets/images/cart.svg';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      {/* Start Header/Navigation */}
      <nav
        className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
        arial-label="Furni navigation bar"
      >
        <div className="container">
          <NavLink activeClassName="active" to="/" className="navbar-brand">
            Furni<span>.</span>
          </NavLink>
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
              <li className="nav-item">
                <NavLink activeClassName="active" to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/shop"
                  className="nav-link"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/about_us"
                  className="nav-link"
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/services"
                  className="nav-link"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/blogs"
                  className="nav-link"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/contact_us"
                  className="nav-link"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <NavLink activeClassName="active" to="/" className="nav-link">
                  <img src={UserImage} alt="User" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active"
                  to="/cart"
                  className="nav-link"
                >
                  <img src={CartImage} alt="Cart" />
                </NavLink>
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
