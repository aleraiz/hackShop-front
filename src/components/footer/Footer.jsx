import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { CartOffCanvas } from "../navbar/CartOffcanvas";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import "./style.css";

export const Footer = () => {
  const user = useSelector((state) => state.user.user);
  const MySwal = withReactContent(Swal);
  const [openOffcanvas, setOpenOffcanvas] = useState(false);

  function handlerMsgErr() {
    MySwal.fire({
      title: "Warning!",
      text: "This functionality escapes from the scope of the project.",
      icon: "warning",
      confirmButtonText: "Cancel",
      confirmButtonColor: "#f8bb86",
    });
  }

  return (
    <div className="footer-area">
      <div className="footer-top section-space-top-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-widget-item">
                <div className="footer-widget-logo logoDiv">
                  <Link to="/">
                    <img src="./hackshopEDITADA.png" alt="Logo" id="imgLogoPage" />
                  </Link>
                </div>
                <p className="footer-widget-desc">
                  To keep up to date with our news, follow us on all our social networks
                </p>
                <div className="social-link with-border">
                  <ul className="socialBtns">
                    <li>
                      <Link
                        to="#"
                        data-tippy="Facebook"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                        onClick={() => handlerMsgErr()}
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
                        onClick={() => handlerMsgErr()}
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
                        onClick={() => handlerMsgErr()}
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
                        onClick={() => handlerMsgErr()}
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
                    <Link to="/aboutus">About Hackshop</Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      How to shop
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      Contact us
                    </Link>
                  </li>
                  {!user && (
                    <li>
                      <Link to="/login">Log in</Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 pt-40">
              <div className="footer-widget-item">
                <h3 className="footer-widget-title">My Account</h3>
                <ul className="footer-widget-list-item">
                  {!user && (
                    <li>
                      <Link to="/register">Sign In</Link>
                    </li>
                  )}
                  <li>
                    <Link
                      to="#"
                      onClick={() => {
                        setOpenOffcanvas(true);
                      }}
                    >
                      View Cart
                    </Link>
                    {openOffcanvas ? <CartOffCanvas setOpenOffcanvas={setOpenOffcanvas} /> : null}
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      My Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      Track My Order
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 pt-40">
              <div className="footer-widget-item">
                <h3 className="footer-widget-title">Our Service</h3>
                <ul className="footer-widget-list-item">
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      Payment Methods
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      Money Guarantee!
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      Returns
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      Shipping
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => handlerMsgErr()}>
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 pt-40">
              <div className="footer-contact-info">
                <h3 className="footer-widget-title">Payments Methods</h3>
              </div>
              <div className="payment-method">
                <img src="../../../image/formas-de-pago-footer.jpg" alt="Payment Method" />
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
                <span className="copyright-text">© 2022 Hack academy -Equipo 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
