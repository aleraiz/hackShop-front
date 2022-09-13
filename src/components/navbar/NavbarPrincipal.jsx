import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { SearchModal } from "./SearchModal";
import { useState, useRef } from "react";
import { CartOffCanvas } from "./CartOffcanvas";
import { logoutUser } from "../../redux/slices/userSlice";
import { emptyCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./css/style.css";

import Overlay from "react-bootstrap/Overlay";
import Popover from "react-bootstrap/Popover";

export const NavbarPrincipal = () => {
  const [openModalSearch, setOpenModalSearch] = useState(false);
  const [openOffcanvas, setOpenOffcanvas] = useState(false);
  const [show, setShow] = useState(false);
  const [showCanvasNavbar, setShowCanvasNavbar] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const handleClick = (event) => {
    setNavbarShow(true);
    setTarget(event.target);
  };

  const [userError, setUserError] = useState("");

  async function handlerLogout() {
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_DB_HOST}/logout`,
        headers: { Authorization: `Bearer ${user.token}` },
      });
      dispatch(logoutUser());
      dispatch(emptyCart());
    } catch (error) {
      console.log(error);
      setUserError(error.response.data.error);
    }
  }

  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <>
      <header className="main-header-area sticky-top navbarPrincipal">
        <div className="header-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <Navbar expand="md" key="md" className="mb-3">
                  <Container fluid className="p-0 align-items-end">
                    <Navbar.Brand href="#">
                      <div className="logoDiv">
                        <Link to="/" className="header-logo">
                          <img src="../../hackshop.png" alt="Header Logo" id="imgLogoPage" />
                        </Link>
                      </div>
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={() => setShowCanvasNavbar((prev) => !prev)} />
                    <Navbar.Offcanvas
                      show={showCanvasNavbar}
                      onHide={() => setShowCanvasNavbar(false)}
                      id={`offcanvasNavbar-expand-md`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                      placement="start"
                    >
                      <Offcanvas.Header closeButton></Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-md-center flex-grow-1 pe-3 main-nav">
                          <ul id="navbarMenuBtns">
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
                                      <Link to="shop-list-left-sidebar.html">
                                        Shop List Left Sidebar
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="shop-list-right-sidebar.html">
                                        Shop List Right Sidebar
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="title">Product Style</span>
                                  <ul>
                                    <li>
                                      <Link to="single-product-variable.html">
                                        Single Product Variable
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="single-product-group.html">
                                        Single Product Group
                                      </Link>
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
                                      <Link to="single-product-sticky.html">
                                        Single Product Sticky
                                      </Link>
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
                            <li>
                              <Link to="contact.html">{user && <p>{user.firstname}</p>}</Link>
                            </li>
                          </ul>
                        </Nav>
                        <div className="header-right d-flex align-items-end">
                          <ul className="m-0">
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
                            <li className="dropdown">
                              <div ref={ref}>
                                <Button
                                  className="btn btn-link dropdown-toggle ht-btn p-0"
                                  id="btnProfileIcon"
                                  onClick={handleClick}
                                >
                                  <i className="pe-7s-users" id="btnUsersProfile"></i>
                                </Button>

                                <Overlay
                                  show={navbarShow}
                                  target={target}
                                  placement="bottom"
                                  container={ref}
                                  containerPadding={20}
                                >
                                  <Popover id="popover-contained">
                                    {!user ? (
                                      <>
                                        <Link className="dropdown-item" to="/register">
                                          Register
                                        </Link>
                                        <Link className="dropdown-item" to="/login">
                                          Login
                                        </Link>
                                      </>
                                    ) : (
                                      <>
                                        <Link className="dropdown-item" to="/account">
                                          My account
                                        </Link>
                                        <Link
                                          className="dropdown-item"
                                          to="/login"
                                          onClick={() => handlerLogout()}
                                        >
                                          LogOut
                                        </Link>
                                      </>
                                    )}
                                  </Popover>
                                </Overlay>
                              </div>
                            </li>
                            <li className="">
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
                                <span className="quantity" id="numberCartShop">
                                  {cart.length}
                                </span>
                              </button>
                              {openOffcanvas ? (
                                <CartOffCanvas setOpenOffcanvas={setOpenOffcanvas} />
                              ) : null}
                            </li>
                          </ul>
                        </div>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
