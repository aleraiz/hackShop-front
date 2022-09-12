import { Link } from "react-router-dom";
import { SearchModal } from "./SearchModal";
import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { CartOffCanvas } from "./CartOffcanvas";
import "./css/style.css";
import Button from "react-bootstrap/Button";
import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

export const NavbarPrincipal = () => {
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const [openOffcanvas, setOpenOffcanvas] = useState(false);
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const cart = useSelector((state) => state.cart.cart);

  return (
    <header className="main-header-area sticky-top navbarPrincipal">
      <div className="header-middle">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="header-middle-wrap position-relative">
                <Link to="/" className="header-logo">
                  <img src="../../dark.png" alt="Header Logo" />
                </Link>
                <nav className="main-nav">
                  <ul>
                    <li className="drop-holder">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="megamenu-holder">
                      <Link to="shop.html">Shop</Link>
                      <ul className="drop-menu megamenu">
                        <li>
                          <span className="title">Shop Layout</span>
                          <ul>
                            <li>
                              <Link to="shop.html">Shop Default</Link>
                            </li>
                            <li>
                              <Link to="shop-grid-fullwidth.html">Shop Grid Fullwidth</Link>
                            </li>
                            <li>
                              <Link to="shop-right-sidebar.html">Shop Right Sidebar</Link>
                            </li>
                            <li>
                              <Link to="shop-list-fullwidth.html">Shop List Fullwidth</Link>
                            </li>
                            <li>
                              <Link to="shop-list-left-sidebar.html">Shop List Left Sidebar</Link>
                            </li>
                            <li>
                              <Link to="shop-list-right-sidebar.html">Shop List Right Sidebar</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="title">Product Style</span>
                          <ul>
                            <li>
                              <Link to="single-product-variable.html">Single Product Variable</Link>
                            </li>
                            <li>
                              <Link to="single-product-group.html">Single Product Group</Link>
                            </li>
                            <li>
                              <Link to="single-product.html">Single Product Default</Link>
                            </li>
                            <li>
                              <Link to="single-product-affiliate.html">
                                Single Product Affiliate
                              </Link>
                            </li>
                            <li>
                              <Link to="single-product-sale.html">Single Product Sale</Link>
                            </li>
                            <li>
                              <Link to="single-product-sticky.html">Single Product Sticky</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <span className="title">Product Related</span>
                          <ul>
                            <li>
                              <Link to="my-account.html">My Account</Link>
                            </li>
                            <li>
                              <Link to="login-register.html">Login | Register</Link>
                            </li>
                            <li>
                              <Link to="cart.html">Shopping Cart</Link>
                            </li>
                            <li>
                              <Link to="wishlist.html">Wishlist</Link>
                            </li>
                            <li>
                              <Link to="compare.html">Compare</Link>
                            </li>
                            <li>
                              <Link to="checkout.html">Checkout</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact Us</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header-right">
                  <ul>
                    <li>
                      <button
                        className="search-btn bt"
                        type="button"
                        onClick={() => {
                          setOpenModalSearch(true);
                        }}
                      >
                        <i className="pe-7s-search"></i>
                      </button>
                      {openModalSearch ? (
                        <SearchModal setOpenModalSearch={setOpenModalSearch} />
                      ) : null}
                    </li>
                    <li className="dropdown d-none d-lg-block">
                      <div ref={ref}>
                        <Button
                          className="btn btn-link btn-light dropdown-toggle ht-btn p-0"
                          onClick={handleClick}
                        >
                          <i className="pe-7s-users"></i>
                        </Button>

                        <Overlay
                          show={show}
                          target={target}
                          placement="bottom"
                          container={ref}
                          containerPadding={20}
                        >
                          <Popover id="popover-contained">
                            <Link className="dropdown-item" to="/register">
                              Register
                            </Link>
                            <Link className="dropdown-item" to="/login">
                              Login
                            </Link>
                            <Link className="dropdown-item" to="/account">
                              My account
                            </Link>
                          </Popover>
                        </Overlay>
                      </div>
                    </li>
                    <li className="d-none d-lg-block">
                      <Link to="wishlist.html" style={{ color: "#212529" }}>
                        <i className="pe-7s-like"></i>
                      </Link>
                    </li>
                    <li className="minicart-wrap me-3 me-lg-0">
                      <button
                        className="minicart-btn toolbar-btn btnOffcanvas"
                        type="button"
                        onClick={() => {
                          setOpenOffcanvas(true);
                        }}
                      >
                        <i className="pe-7s-shopbag"></i>
                        <span className="quantity">{cart.length}</span>
                      </button>
                      {openOffcanvas ? <CartOffCanvas setOpenOffcanvas={setOpenOffcanvas} /> : null}
                    </li>
                    <li className="mobile-menu_wrap d-block d-lg-none">
                      <Link to="#mobileMenu" className="mobile-menu_btn toolbar-btn pl-0">
                        <i className="pe-7s-menu"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="global-overlay"></div>
    </header>
  );
};
