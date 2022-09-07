import { Link } from "react-router-dom";
import "./assets/css/style.css";
function App() {
  return (
    <>
      <div className="app">
        {/* <div className="preloader-activate preloader-active open_tm_preloader">
          <div className="preloader-area-wrap">
            <div className="spinner d-flex justify-content-center align-items-center h-100">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        </div> */}
        <div className="main-wrapper">
          <header className="main-header-area">
            <div className="header-top bg-pronia-primary d-none d-lg-block">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="header-top-left">
                      <span className="pronia-offer">
                        HELLO EVERYONE! 25% Off All Products
                      </span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="header-top-right">
                      <ul className="dropdown-wrap">
                        <li className="dropdown">
                          <button
                            className="btn btn-link dropdown-toggle ht-btn"
                            type="button"
                            id="currencyButton"
                            data-bs-toggle="dropdown"
                            aria-label="currency"
                            aria-expanded="false"
                          >
                            USD
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="currencyButton"
                          >
                            <li>
                              <Link className="dropdown-item" to="#">
                                GBP
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                ISO
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <button
                            className="btn btn-link dropdown-toggle ht-btn"
                            type="button"
                            id="languageButton"
                            data-bs-toggle="dropdown"
                            aria-label="language"
                            aria-expanded="false"
                          >
                            English
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="languageButton"
                          >
                            <li>
                              <Link className="dropdown-item" to="#">
                                French
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Italian
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="#">
                                Spanish
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-middle py-30">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="header-middle-wrap position-relative">
                      <div className="header-contact d-none d-lg-flex">
                        <i className="pe-7s-call"></i>
                        <Link to="tel://+00-123-456-789">+00 123 456 789</Link>
                      </div>

                      <Link to="index.html" className="header-logo">
                        <img
                          src="./assets/images/logo/dark.png"
                          alt="Header Logo"
                        />
                      </Link>

                      <div className="header-right">
                        <ul>
                          <li>
                            <Link
                              to="#exampleModal"
                              className="search-btn bt"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="pe-7s-search"></i>
                            </Link>
                          </li>
                          <li className="dropdown d-none d-lg-block">
                            <button
                              className="btn btn-link dropdown-toggle ht-btn p-0"
                              type="button"
                              id="settingButton"
                              data-bs-toggle="dropdown"
                              aria-label="setting"
                              aria-expanded="false"
                            >
                              <i className="pe-7s-users"></i>
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="settingButton"
                            >
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="my-account.html"
                                >
                                  My account
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="login-register.html"
                                >
                                  Login | Register
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="d-none d-lg-block">
                            <Link to="wishlist.html">
                              <i className="pe-7s-like"></i>
                            </Link>
                          </li>
                          <li className="minicart-wrap me-3 me-lg-0">
                            <Link
                              to="#miniCart"
                              className="minicart-btn toolbar-btn"
                            >
                              <i className="pe-7s-shopbag"></i>
                              <span className="quantity">3</span>
                            </Link>
                          </li>
                          <li className="mobile-menu_wrap d-block d-lg-none">
                            <Link
                              to="#mobileMenu"
                              className="mobile-menu_btn toolbar-btn pl-0"
                            >
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
            <div className="header-bottom d-none d-lg-block">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="main-menu position-relative">
                      <nav className="main-nav">
                        <ul>
                          <li className="drop-holder">
                            <Link to="index.html">Home</Link>
                            <ul className="drop-menu">
                              <li>
                                <Link to="index.html">Home One</Link>
                              </li>
                              <li>
                                <Link to="index-2.html">Home Two</Link>
                              </li>
                            </ul>
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
                                    <Link to="shop-grid-fullwidth.html">
                                      Shop Grid Fullwidth
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="shop-right-sidebar.html">
                                      Shop Right Sidebar
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="shop-list-fullwidth.html">
                                      Shop List Fullwidth
                                    </Link>
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
                                    <Link to="single-product.html">
                                      Single Product Default
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="single-product-affiliate.html">
                                      Single Product Affiliate
                                    </Link>
                                  </li>
                                  <li>
                                    <Link to="single-product-sale.html">
                                      Single Product Sale
                                    </Link>
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
                                    <Link to="login-register.html">
                                      Login | Register
                                    </Link>
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
                          <li className="drop-holder">
                            <Link to="blog.html">Blog</Link>
                            <ul className="drop-menu">
                              <li>
                                <Link to="blog-listview.html">
                                  Blog List View
                                </Link>
                              </li>
                              <li>
                                <Link to="blog-detail.html">Blog Detail</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="about.html">About Us</Link>
                          </li>
                          <li className="drop-holder">
                            <Link to="#">Pages</Link>
                            <ul className="drop-menu">
                              <li>
                                <Link to="faq.html">FAQ</Link>
                              </li>
                              <li>
                                <Link to="404.html">Error 404</Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link to="contact.html">Contact Us</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-sticky py-4 py-lg-0">
              <div className="container">
                <div className="header-nav position-relative">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-6">
                      <Link to="index.html" className="header-logo">
                        <img
                          src="./assets/images/logo/dark.png"
                          alt="Header Logo"
                        />
                      </Link>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block">
                      <div className="main-menu">
                        <nav className="main-nav">
                          <ul>
                            <li className="drop-holder">
                              <Link to="index.html">Home</Link>
                              <ul className="drop-menu">
                                <li>
                                  <Link to="index.html">Home One</Link>
                                </li>
                                <li>
                                  <Link to="index-2.html">Home Two</Link>
                                </li>
                              </ul>
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
                                      <Link to="shop-grid-fullwidth.html">
                                        Shop Grid Fullwidth
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="shop-right-sidebar.html">
                                        Shop Right Sidebar
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="shop-list-fullwidth.html">
                                        Shop List Fullwidth
                                      </Link>
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
                                      <Link to="single-product.html">
                                        Single Product Default
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="single-product-affiliate.html">
                                        Single Product Affiliate
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="single-product-sale.html">
                                        Single Product Sale
                                      </Link>
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
                                      <Link to="my-account.html">
                                        My Account
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="login-register.html">
                                        Login | Register
                                      </Link>
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
                            <li className="drop-holder">
                              <Link to="blog.html">Blog</Link>
                              <ul className="drop-menu">
                                <li>
                                  <Link to="blog-listview.html">
                                    Blog List View
                                  </Link>
                                </li>
                                <li>
                                  <Link to="blog-detail.html">Blog Detail</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="about.html">About Us</Link>
                            </li>
                            <li className="drop-holder">
                              <Link to="#">Pages</Link>
                              <ul className="drop-menu">
                                <li>
                                  <Link to="faq.html">FAQ</Link>
                                </li>
                                <li>
                                  <Link to="404.html">Error 404</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="contact.html">Contact Us</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                    <div className="col-lg-3 col-6">
                      <div className="header-right">
                        <ul>
                          <li>
                            <Link
                              to="#exampleModal"
                              className="search-btn bt"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i className="pe-7s-search"></i>
                            </Link>
                          </li>
                          <li className="dropdown d-none d-lg-block">
                            <button
                              className="btn btn-link dropdown-toggle ht-btn p-0"
                              type="button"
                              id="stickysettingButton"
                              data-bs-toggle="dropdown"
                              aria-label="setting"
                              aria-expanded="false"
                            >
                              <i className="pe-7s-users"></i>
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="stickysettingButton"
                            >
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="my-account.html"
                                >
                                  My account
                                </Link>
                              </li>
                              <li>
                                <Link
                                  className="dropdown-item"
                                  to="login-register.html"
                                >
                                  Login | Register
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="d-none d-lg-block">
                            <Link to="wishlist.html">
                              <i className="pe-7s-like"></i>
                            </Link>
                          </li>
                          <li className="minicart-wrap me-3 me-lg-0">
                            <Link
                              to="#miniCart"
                              className="minicart-btn toolbar-btn"
                            >
                              <i className="pe-7s-shopbag"></i>
                              <span className="quantity">3</span>
                            </Link>
                          </li>
                          <li className="mobile-menu_wrap d-block d-lg-none">
                            <Link
                              to="#mobileMenu"
                              className="mobile-menu_btn toolbar-btn pl-0"
                            >
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
            <div className="mobile-menu_wrapper" id="mobileMenu">
              <div className="offcanvas-body">
                <div className="inner-body">
                  <div className="offcanvas-top">
                    <Link to="#" className="button-close">
                      <i className="pe-7s-close"></i>
                    </Link>
                  </div>
                  <div className="header-contact offcanvas-contact">
                    <i className="pe-7s-call" />
                    <Link to="tel://+00-123-456-789">+00 123 456 789</Link>
                  </div>
                  <div className="offcanvas-user-info">
                    <ul className="dropdown-wrap">
                      <li className="dropdown dropdown-left">
                        <button
                          className="btn btn-link dropdown-toggle ht-btn"
                          type="button"
                          id="languageButtonTwo"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          English
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="languageButtonTwo"
                        >
                          <li>
                            <Link className="dropdown-item" to="#">
                              French
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Italian
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              Spanish
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <button
                          className="btn btn-link dropdown-toggle ht-btn usd-dropdown"
                          type="button"
                          id="currencyButtonTwo"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          USD
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="currencyButtonTwo"
                        >
                          <li>
                            <Link className="dropdown-item" to="#">
                              GBP
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="#">
                              ISO
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <button
                          className="btn btn-link dropdown-toggle ht-btn p-0"
                          type="button"
                          id="settingButtonTwo"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="pe-7s-users"></i>
                        </button>
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="settingButtonTwo"
                        >
                          <li>
                            <Link
                              className="dropdown-item"
                              to="my-account.html"
                            >
                              My account
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              to="login-register.html"
                            >
                              Login | Register
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="wishlist.html">
                          <i className="pe-7s-like"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="offcanvas-menu_area">
                    <nav className="offcanvas-navigation">
                      <ul className="mobile-menu">
                        <li className="menu-item-has-children">
                          <Link to="#">
                            <span className="mm-text">
                              Home
                              <i className="pe-7s-angle-down"></i>
                            </span>
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="index.html">
                                <span className="mm-text">Home One</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="index-2.html">
                                <span className="mm-text">Home Two</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="#">
                            <span className="mm-text">
                              Shop
                              <i className="pe-7s-angle-down"></i>
                            </span>
                          </Link>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <Link to="#">
                                <span className="mm-text">
                                  Shop Layout
                                  <i className="pe-7s-angle-down"></i>
                                </span>
                              </Link>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="shop.html">
                                    <span className="mm-text">
                                      Shop Default
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-grid-fullwidth.html">
                                    <span className="mm-text">
                                      Shop Grid Fullwidth
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-right-sidebar.html">
                                    <span className="mm-text">
                                      Shop Right Sidebar
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-list-fullwidth.html">
                                    <span className="mm-text">
                                      Shop List Fullwidth
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-list-left-sidebar.html">
                                    <span className="mm-text">
                                      Shop List Left Sidebar
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="shop-list-right-sidebar.html">
                                    <span className="mm-text">
                                      Shop List Right Sidebar
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <Link to="#">
                                <span className="mm-text">
                                  Product Style
                                  <i className="pe-7s-angle-down"></i>
                                </span>
                              </Link>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="single-product.html">
                                    <span className="mm-text">
                                      Single Product Default
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="single-product-group.html">
                                    <span className="mm-text">
                                      Single Product Group
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="single-product-variable.html">
                                    <span className="mm-text">
                                      Single Product Variable
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="single-product-sale.html">
                                    <span className="mm-text">
                                      Single Product Sale
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="single-product-sticky.html">
                                    <span className="mm-text">
                                      Single Product Sticky
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="single-product-affiliate.html">
                                    <span className="mm-text">
                                      Single Product Affiliate
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <Link to="#">
                                <span className="mm-text">
                                  Product Related
                                  <i className="pe-7s-angle-down"></i>
                                </span>
                              </Link>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="my-account.html">
                                    <span className="mm-text">My Account</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="login-register.html">
                                    <span className="mm-text">
                                      Login | Register
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="cart.html">
                                    <span className="mm-text">
                                      Shopping Cart
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="wishlist.html">
                                    <span className="mm-text">Wishlist</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="compare.html">
                                    <span className="mm-text">Compare</span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="checkout.html">
                                    <span className="mm-text">Checkout</span>
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="#">
                            <span className="mm-text">
                              Blog
                              <i className="pe-7s-angle-down"></i>
                            </span>
                          </Link>
                          <ul className="sub-menu">
                            <li className="menu-item-has-children">
                              <Link to="#">
                                <span className="mm-text">
                                  Blog Holder
                                  <i className="pe-7s-angle-down"></i>
                                </span>
                              </Link>
                              <ul className="sub-menu">
                                <li>
                                  <Link to="blog.html">
                                    <span className="mm-text">
                                      Blog Default
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="blog-listview.html">
                                    Blog List View
                                  </Link>
                                </li>
                                <li>
                                  <Link to="blog-detail.html">Blog Detail</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="about.html">
                            <span className="mm-text">About Us</span>
                          </Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="#">
                            <span className="mm-text">
                              Pages
                              <i className="pe-7s-angle-down"></i>
                            </span>
                          </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="faq.html">
                                <span className="mm-text">
                                  Frequently Questions
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link to="404.html">
                                <span className="mm-text">Error 404</span>
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="contact.html">
                            <span className="mm-text">Contact</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModal"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-fullscreen">
                <div className="modal-content modal-bg-dark">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      data-tippy="Close"
                      data-tippy-inertia="true"
                      data-tippy-animation="shift-away"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-theme="sharpborder"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="modal-search">
                      <span className="searchbox-info">
                        Start typing and press Enter to search or ESC to close
                      </span>
                      <form action="#" className="hm-searchbox">
                        <input
                          type="text"
                          name="Search..."
                          // value="Search..."
                          // onBlur="if(this.value==''){this.value='Search...'}"
                          // onFocus="if(this.value=='Search...'){this.value=''}"
                          autoComplete="off"
                        />
                        <button
                          className="search-btn"
                          type="submit"
                          aria-label="searchbtn"
                        >
                          <i className="pe-7s-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offcanvas-minicart_wrapper" id="miniCart">
              <div className="offcanvas-body">
                <div className="minicart-content">
                  <div className="minicart-heading">
                    <h4 className="mb-0">Shopping Cart</h4>
                    <Link to="#" className="button-close">
                      <i
                        className="pe-7s-close"
                        data-tippy="Close"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      ></i>
                    </Link>
                  </div>
                  <ul className="minicart-list">
                    <li className="minicart-product">
                      <Link className="product-item_remove" to="#">
                        <i
                          className="pe-7s-close"
                          data-tippy="Remove"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        ></i>
                      </Link>
                      <Link
                        to="single-product-variable.html"
                        className="product-item_img"
                      >
                        <img
                          className="img-full"
                          src="./assets/images/product/small-size/2-1-70x78.png"
                          alt="Product"
                        />
                      </Link>
                      <div className="product-item_content">
                        <Link
                          className="product-item_title"
                          to="single-product-variable.html"
                        >
                          American Marigold
                        </Link>
                        <span className="product-item_quantity">
                          1 x $23.45
                        </span>
                      </div>
                    </li>
                    <li className="minicart-product">
                      <Link className="product-item_remove" to="#">
                        <i
                          className="pe-7s-close"
                          data-tippy="Remove"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        ></i>
                      </Link>
                      <Link
                        to="single-product-variable.html"
                        className="product-item_img"
                      >
                        <img
                          className="img-full"
                          src="./assets/images/product/small-size/2-2-70x78.png"
                          alt="Product"
                        />
                      </Link>
                      <div className="product-item_content">
                        <Link
                          className="product-item_title"
                          to="single-product-variable.html"
                        >
                          Black Eyed Susan
                        </Link>
                        <span className="product-item_quantity">
                          1 x $25.45
                        </span>
                      </div>
                    </li>
                    <li className="minicart-product">
                      <Link className="product-item_remove" to="#">
                        <i
                          className="pe-7s-close"
                          data-tippy="Remove"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay="50"
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                        ></i>
                      </Link>
                      <Link
                        to="single-product-variable.html"
                        className="product-item_img"
                      >
                        <img
                          className="img-full"
                          src="./assets/images/product/small-size/2-3-70x78.png"
                          alt="Product"
                        />
                      </Link>
                      <div className="product-item_content">
                        <Link
                          className="product-item_title"
                          to="single-product-variable.html"
                        >
                          Bleeding Heart
                        </Link>
                        <span className="product-item_quantity">
                          1 x $30.45
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="minicart-item_total">
                  <span>Subtotal</span>
                  <span className="ammount">$79.35</span>
                </div>
                <div className="group-btn_wrap d-grid gap-2">
                  <Link to="cart.html" className="btn btn-dark">
                    View Cart
                  </Link>
                  <Link to="checkout.html" className="btn btn-dark">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
            <div className="global-overlay"></div>
          </header>
          <div className="slider-area">
            <div className="swiper-container main-slider-2 swiper-arrow with-bg_white">
              <div className="swiper-wrapper">
                <div className="swiper-slide animation-style-02">
                  <div
                    className="slide-inner style-2"
                    data-bg-image="assets/images/slider/bg/2-1.jpg"
                  >
                    <div className="slide-content text-black">
                      <h2 className="title">
                        Indoor <br /> Planters
                      </h2>
                      <p className="short-desc">
                        Pronia, With 100% Natural, Organic & Plant Shop.
                      </p>
                      <div className="btn-wrap">
                        <Link
                          className="btn btn-custom-size xl-size btn-pronia-primary"
                          to="shop.html"
                        >
                          Discover Now
                        </Link>
                      </div>
                    </div>
                    <div className="slide-img" />
                    <img
                      src="./assets/images/slider/slide-img/2-1-960x741.jpg"
                      alt="Slide"
                    />
                    <div className="slide-count">
                      <span className="data-count" data-count="01">
                        <span className="forward-slash">/</span>
                        <span>03</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide animation-style-02">
                <div
                  className="slide-inner style-2"
                  data-bg-image="assets/images/slider/bg/2-1.jpg"
                >
                  <div className="slide-content text-black">
                    <h2 className="title">
                      Indoor <br /> Planters
                    </h2>
                    <p className="short-desc">
                      Pronia, With 100% Natural, Organic & Plant Shop.
                    </p>
                    <div className="btn-wrap">
                      <Link
                        className="btn btn-custom-size xl-size btn-pronia-primary"
                        to="shop.html"
                      >
                        Discover Now
                      </Link>
                    </div>
                  </div>
                  <div className="slide-img">
                    <img
                      src="./assets/images/slider/slide-img/2-2-960x741.jpg"
                      alt="Slide"
                    />
                    <div className="slide-count">
                      <span className="data-count" data-count="02">
                        <span className="forward-slash">/</span>
                        <span>03</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide animation-style-02">
                <div
                  className="slide-inner style-2"
                  data-bg-image="assets/images/slider/bg/2-1.jpg"
                >
                  <div className="slide-content text-black">
                    <h2 className="title">
                      Indoor <br /> Planters
                    </h2>
                    <p className="short-desc">
                      Pronia, With 100% Natural, Organic & Plant Shop.
                    </p>
                    <div className="btn-wrap">
                      <Link
                        className="btn btn-custom-size xl-size btn-pronia-primary"
                        to="shop.html"
                      >
                        Discover Now
                      </Link>
                    </div>
                  </div>
                  <div className="slide-img" />
                  <img
                    src="./assets/images/slider/slide-img/2-3-960x741.jpg"
                    alt="Slide"
                  />
                  <div className="slide-count">
                    <span className="data-count" data-count="03">
                      <span className="forward-slash">/</span>
                      <span>03</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-button-wrap">
            <div className="slide-button-prev">
              <i className="pe-7s-angle-left"></i>
            </div>
            <div className="slide-button-next">
              <i className="pe-7s-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
