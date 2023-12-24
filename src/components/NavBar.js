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
          <NavLink
            className={`nav-link navbar-brand ${(navData) =>
              navData.isActive ? 'active-style' : 'none'}`}
            to="/"
          >
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
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? 'active-style' : 'none'}`}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? 'active-style' : 'none'}`}
                  to="/shop"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? 'active-style' : 'none'}`}
                  to="/about_us"
                >
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? 'active-style' : 'none'}`}
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? 'active-style' : 'none'}`}
                  to="/blogs"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? 'active-style' : 'none'}`}
                  to="/contact_us"
                >
                  Contact us
                </NavLink>
              </li>
            </ul>
            <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
              <li>
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? 'active-style' : 'none'}`}
                  to="/"
                >
                  <img src={UserImage} alt="User" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-link ${(navData) =>
                    navData.isActive ? 'active-style' : 'none'}`}
                  to="/cart"
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
