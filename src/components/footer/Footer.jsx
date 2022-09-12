import { Link } from "react-router-dom";
import "./style.css";

export const Footer = () => {
  return (
    <div className="footer-area">
      <div className="footer-top section-space-top-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget-item">
                <div className="footer-widget-logo">
                  <Link to="index.html">
                    <img src="../../dark.png" alt="Logo" />
                  </Link>
                </div>
                <p className="footer-widget-desc">
                  Lorem ipsum dolor sit amet, consec adipisl elit, sed do eiusmod tempor
                  <br />
                  incidio ut labore et dolore magna.
                </p>
                <div className="social-link with-border">
                  <ul>
                    <li>
                      <Link
                        to="#"
                        data-tippy="Facebook"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      >
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-tippy="Twitter"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      >
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-tippy="Pinterest"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      >
                        <i className="fa fa-pinterest"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        data-tippy="Dribbble"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      >
                        <i className="fa fa-dribbble"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 pt-40">
              <div className="footer-widget-item">
                <h3 className="footer-widget-title">Useful Links</h3>
                <ul className="footer-widget-list-item">
                  <li>
                    <Link to="#">About Pronia</Link>
                  </li>
                  <li>
                    <Link to="#">How to shop</Link>
                  </li>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#">Contact us</Link>
                  </li>
                  <li>
                    <Link to="#">Log in</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 pt-40">
              <div className="footer-widget-item">
                <h3 className="footer-widget-title">My Account</h3>
                <ul className="footer-widget-list-item">
                  <li>
                    <Link to="#">Sign In</Link>
                  </li>
                  <li>
                    <Link to="#">View Cart</Link>
                  </li>
                  <li>
                    <Link to="#">My Wishlist</Link>
                  </li>
                  <li>
                    <Link to="#">Track My Order</Link>
                  </li>
                  <li>
                    <Link to="#">Help</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 pt-40">
              <div className="footer-widget-item">
                <h3 className="footer-widget-title">Our Service</h3>
                <ul className="footer-widget-list-item">
                  <li>
                    <Link to="#">Payment Methods</Link>
                  </li>
                  <li>
                    <Link to="#">Money Guarantee!</Link>
                  </li>
                  <li>
                    <Link to="#">Returns</Link>
                  </li>
                  <li>
                    <Link to="#">Shipping</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 pt-40">
              <div className="footer-contact-info">
                <h3 className="footer-widget-title">Got Question? Call Us</h3>
                <Link className="number" to="tel://123-456-789">
                  123 456 789
                </Link>
                <div className="address">
                  <ul>
                    <li>Your Address Goes Here</li>
                  </ul>
                </div>
              </div>
              <div className="payment-method">
                <Link to="#">
                  <img src="../../../image/formas-de-pago-footer.jpg" alt="Payment Method" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright">
                <span className="copyright-text">
                  © 2022 Hack academy {/* <i className="fa fa-heart text-danger"></i> by */}
                  <Link to="https://hasthemes.com/" rel="noopener" target="_blank">
                    -Equipo 5
                  </Link>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
