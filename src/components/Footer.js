import { Link } from 'react-router-dom';
import SofaImage from '../assets/images/sofa.png';
const Footer = () => {
  return (
    <>
      {/* Start Footer Section */}
      <footer className="footer-section">
        <div className="container relative">
          <div className="sofa-img">
            <img src={SofaImage} alt="sofa" className="img-fluid" />
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="subscription-form">
                <h3 className="d-flex align-items-center">
                  <span className="me-1">
                    <i className="fa fa-newspaper" aria-hidden="true"></i>
                  </span>
                  <span>Subscribe to Newsletter</span>
                </h3>
                <form action="#" className="row g-3">
                  <div className="col-auto">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-primary">
                      <span className="fa fa-paper-plane" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row g-5 mb-5">
            <div className="col-lg-4">
              <div className="mb-4 footer-logo-wrap">
                <Link className="footer-logo">
                  Furni<span>.</span>
                </Link>
              </div>
              <p className="mb-4">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>
              <ul className="list-unstyled custom-social">
                <li>
                  <Link>
                    <span className="fa fa-brands fa-facebook-f" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="fa fa-brands fa-twitter" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="fa fa-brands fa-instagram" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <span className="fa fa-brands fa-linkedin" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <div className="row links-wrap">
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/about_us">About us</Link>
                    </li>

                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact_us">Contact us</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="">Support</Link>
                      {/* <Link>Support</Link> */}
                    </li>
                    <li>
                      <Link to="">Knowledge base</Link>
                    </li>
                    <li>
                      <Link to="">Live chat</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link>Jobs</Link>
                    </li>
                    <li>
                      <Link>Our team</Link>
                    </li>
                    <li>
                      <Link>Leadership</Link>
                    </li>
                    <li>
                      <Link>Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-sm-6 col-md-3">
                  <ul className="list-unstyled">
                    <li>
                      <Link>Nordic Chair</Link>
                    </li>
                    <li>
                      <Link>Kruzo Aero</Link>
                    </li>
                    <li>
                      <Link>Ergonomic Chair</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="border-top copyright">
            <div className="row pt-4">
              <div className="col-lg-6">
                <p className="mb-2 text-center text-lg-start">
                  Copyright ©. All Rights Reserved. — Designed with love by
                  <a href="https://untree.co">Untree.co</a> Distributed By
                  <a href="https://themewagon.com">ThemeWagon</a>
                  {/* License information: https://untree.co/license/ */}
                </p>
              </div>
              <div className="col-lg-6 text-center text-lg-end">
                <ul className="list-unstyled d-inline-flex ms-auto">
                  <li className="me-4">
                    <Link>Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer Section */}
    </>
  );
};

export default Footer;
