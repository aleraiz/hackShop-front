export const Home = () => {
  return (
    <>
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
                            <a className="dropdown-item" href="#">
                              GBP
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              ISO
                            </a>
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
                            <a className="dropdown-item" href="#">
                              French
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Italian
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Spanish
                            </a>
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
                      <a href="tel://+00-123-456-789">+00 123 456 789</a>
                    </div>

                    <a href="index.html" className="header-logo">
                      <img src="../../dark.png" alt="Header Logo" />
                    </a>

                    <div className="header-right">
                      <ul>
                        <li>
                          <a
                            href="#exampleModal"
                            className="search-btn bt"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="pe-7s-search"></i>
                          </a>
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
                              <a
                                className="dropdown-item"
                                href="my-account.html"
                              >
                                My account
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="login-register.html"
                              >
                                Login | Register
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="d-none d-lg-block">
                          <a href="wishlist.html">
                            <i className="pe-7s-like"></i>
                          </a>
                        </li>
                        <li className="minicart-wrap me-3 me-lg-0">
                          <a
                            href="#miniCart"
                            className="minicart-btn toolbar-btn"
                          >
                            <i className="pe-7s-shopbag"></i>
                            <span className="quantity">3</span>
                          </a>
                        </li>
                        <li className="mobile-menu_wrap d-block d-lg-none">
                          <a
                            href="#mobileMenu"
                            className="mobile-menu_btn toolbar-btn pl-0"
                          >
                            <i className="pe-7s-menu"></i>
                          </a>
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
                          <a href="index.html">Home</a>
                          <ul className="drop-menu">
                            <li>
                              <a href="index.html">Home One</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home Two</a>
                            </li>
                          </ul>
                        </li>
                        <li className="megamenu-holder">
                          <a href="shop.html">Shop</a>
                          <ul className="drop-menu megamenu">
                            <li>
                              <span className="title">Shop Layout</span>
                              <ul>
                                <li>
                                  <a href="shop.html">Shop Default</a>
                                </li>
                                <li>
                                  <a href="shop-grid-fullwidth.html">
                                    Shop Grid Fullwidth
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-right-sidebar.html">
                                    Shop Right Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-fullwidth.html">
                                    Shop List Fullwidth
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-left-sidebar.html">
                                    Shop List Left Sidebar
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-list-right-sidebar.html">
                                    Shop List Right Sidebar
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span className="title">Product Style</span>
                              <ul>
                                <li>
                                  <a href="single-product-variable.html">
                                    Single Product Variable
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-group.html">
                                    Single Product Group
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product.html">
                                    Single Product Default
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-affiliate.html">
                                    Single Product Affiliate
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-sale.html">
                                    Single Product Sale
                                  </a>
                                </li>
                                <li>
                                  <a href="single-product-sticky.html">
                                    Single Product Sticky
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <span className="title">Product Related</span>
                              <ul>
                                <li>
                                  <a href="my-account.html">My Account</a>
                                </li>
                                <li>
                                  <a href="login-register.html">
                                    Login | Register
                                  </a>
                                </li>
                                <li>
                                  <a href="cart.html">Shopping Cart</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                  <a href="compare.html">Compare</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="drop-holder">
                          <a href="blog.html">Blog</a>
                          <ul className="drop-menu">
                            <li>
                              <a href="blog-listview.html">Blog List View</a>
                            </li>
                            <li>
                              <a href="blog-detail.html">Blog Detail</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li className="drop-holder">
                          <a href="#">Pages</a>
                          <ul className="drop-menu">
                            <li>
                              <a href="faq.html">FAQ</a>
                            </li>
                            <li>
                              <a href="404.html">Error 404</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact Us</a>
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
                    <a href="index.html" className="header-logo">
                      <img
                        src="assets/images/logo/dark.png"
                        alt="Header Logo"
                      />
                    </a>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block">
                    <div className="main-menu">
                      <nav className="main-nav">
                        <ul>
                          <li className="drop-holder">
                            <a href="index.html">Home</a>
                            <ul className="drop-menu">
                              <li>
                                <a href="index.html">Home One</a>
                              </li>
                              <li>
                                <a href="index-2.html">Home Two</a>
                              </li>
                            </ul>
                          </li>
                          <li className="megamenu-holder">
                            <a href="shop.html">Shop</a>
                            <ul className="drop-menu megamenu">
                              <li>
                                <span className="title">Shop Layout</span>
                                <ul>
                                  <li>
                                    <a href="shop.html">Shop Default</a>
                                  </li>
                                  <li>
                                    <a href="shop-grid-fullwidth.html">
                                      Shop Grid Fullwidth
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-right-sidebar.html">
                                      Shop Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-list-fullwidth.html">
                                      Shop List Fullwidth
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-list-left-sidebar.html">
                                      Shop List Left Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-list-right-sidebar.html">
                                      Shop List Right Sidebar
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span className="title">Product Style</span>
                                <ul>
                                  <li>
                                    <a href="single-product-variable.html">
                                      Single Product Variable
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-group.html">
                                      Single Product Group
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product.html">
                                      Single Product Default
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-affiliate.html">
                                      Single Product Affiliate
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-sale.html">
                                      Single Product Sale
                                    </a>
                                  </li>
                                  <li>
                                    <a href="single-product-sticky.html">
                                      Single Product Sticky
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <span className="title">Product Related</span>
                                <ul>
                                  <li>
                                    <a href="my-account.html">My Account</a>
                                  </li>
                                  <li>
                                    <a href="login-register.html">
                                      Login | Register
                                    </a>
                                  </li>
                                  <li>
                                    <a href="cart.html">Shopping Cart</a>
                                  </li>
                                  <li>
                                    <a href="wishlist.html">Wishlist</a>
                                  </li>
                                  <li>
                                    <a href="compare.html">Compare</a>
                                  </li>
                                  <li>
                                    <a href="checkout.html">Checkout</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="drop-holder">
                            <a href="blog.html">Blog</a>
                            <ul className="drop-menu">
                              <li>
                                <a href="blog-listview.html">Blog List View</a>
                              </li>
                              <li>
                                <a href="blog-detail.html">Blog Detail</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="about.html">About Us</a>
                          </li>
                          <li className="drop-holder">
                            <a href="#">Pages</a>
                            <ul className="drop-menu">
                              <li>
                                <a href="faq.html">FAQ</a>
                              </li>
                              <li>
                                <a href="404.html">Error 404</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact Us</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="col-lg-3 col-6">
                    <div className="header-right">
                      <ul>
                        <li>
                          <a
                            href="#exampleModal"
                            className="search-btn bt"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <i className="pe-7s-search"></i>
                          </a>
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
                              <a
                                className="dropdown-item"
                                href="my-account.html"
                              >
                                My account
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="login-register.html"
                              >
                                Login | Register
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="d-none d-lg-block">
                          <a href="wishlist.html">
                            <i className="pe-7s-like"></i>
                          </a>
                        </li>
                        <li className="minicart-wrap me-3 me-lg-0">
                          <a
                            href="#miniCart"
                            className="minicart-btn toolbar-btn"
                          >
                            <i className="pe-7s-shopbag"></i>
                            <span className="quantity">3</span>
                          </a>
                        </li>
                        <li className="mobile-menu_wrap d-block d-lg-none">
                          <a
                            href="#mobileMenu"
                            className="mobile-menu_btn toolbar-btn pl-0"
                          >
                            <i className="pe-7s-menu"></i>
                          </a>
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
                  <a href="#" className="button-close">
                    <i className="pe-7s-close"></i>
                  </a>
                </div>
                <div className="header-contact offcanvas-contact">
                  <i className="pe-7s-call"></i>
                  <a href="tel://+00-123-456-789">+00 123 456 789</a>
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
                          <a className="dropdown-item" href="#">
                            French
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Italian
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Spanish
                          </a>
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
                          <a className="dropdown-item" href="#">
                            GBP
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            ISO
                          </a>
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
                          <a className="dropdown-item" href="my-account.html">
                            My account
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="login-register.html"
                          >
                            Login | Register
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="wishlist.html">
                        <i className="pe-7s-like"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas-menu_area">
                  <nav className="offcanvas-navigation">
                    <ul className="mobile-menu">
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">
                            Home
                            <i className="pe-7s-angle-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="index.html">
                              <span className="mm-text">Home One</span>
                            </a>
                          </li>
                          <li>
                            <a href="index-2.html">
                              <span className="mm-text">Home Two</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">
                            Shop
                            <i className="pe-7s-angle-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">
                              <span className="mm-text">
                                Shop Layout
                                <i className="pe-7s-angle-down"></i>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="shop.html">
                                  <span className="mm-text">Shop Default</span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-fullwidth.html">
                                  <span className="mm-text">
                                    Shop Grid Fullwidth
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  <span className="mm-text">
                                    Shop Right Sidebar
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-list-fullwidth.html">
                                  <span className="mm-text">
                                    Shop List Fullwidth
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-list-left-sidebar.html">
                                  <span className="mm-text">
                                    Shop List Left Sidebar
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-list-right-sidebar.html">
                                  <span className="mm-text">
                                    Shop List Right Sidebar
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">
                              <span className="mm-text">
                                Product Style
                                <i className="pe-7s-angle-down"></i>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="single-product.html">
                                  <span className="mm-text">
                                    Single Product Default
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="single-product-group.html">
                                  <span className="mm-text">
                                    Single Product Group
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="single-product-variable.html">
                                  <span className="mm-text">
                                    Single Product Variable
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="single-product-sale.html">
                                  <span className="mm-text">
                                    Single Product Sale
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="single-product-sticky.html">
                                  <span className="mm-text">
                                    Single Product Sticky
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="single-product-affiliate.html">
                                  <span className="mm-text">
                                    Single Product Affiliate
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item-has-children">
                            <a href="#">
                              <span className="mm-text">
                                Product Related
                                <i className="pe-7s-angle-down"></i>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="my-account.html">
                                  <span className="mm-text">My Account</span>
                                </a>
                              </li>
                              <li>
                                <a href="login-register.html">
                                  <span className="mm-text">
                                    Login | Register
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a href="cart.html">
                                  <span className="mm-text">Shopping Cart</span>
                                </a>
                              </li>
                              <li>
                                <a href="wishlist.html">
                                  <span className="mm-text">Wishlist</span>
                                </a>
                              </li>
                              <li>
                                <a href="compare.html">
                                  <span className="mm-text">Compare</span>
                                </a>
                              </li>
                              <li>
                                <a href="checkout.html">
                                  <span className="mm-text">Checkout</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">
                            Blog
                            <i className="pe-7s-angle-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li className="menu-item-has-children">
                            <a href="#">
                              <span className="mm-text">
                                Blog Holder
                                <i className="pe-7s-angle-down"></i>
                              </span>
                            </a>
                            <ul className="sub-menu">
                              <li>
                                <a href="blog.html">
                                  <span className="mm-text">Blog Default</span>
                                </a>
                              </li>
                              <li>
                                <a href="blog-listview.html">Blog List View</a>
                              </li>
                              <li>
                                <a href="blog-detail.html">Blog Detail</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">
                          <span className="mm-text">About Us</span>
                        </a>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="#">
                          <span className="mm-text">
                            Pages
                            <i className="pe-7s-angle-down"></i>
                          </span>
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a href="faq.html">
                              <span className="mm-text">
                                Frequently Questions
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="404.html">
                              <span className="mm-text">Error 404</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">
                          <span className="mm-text">Contact</span>
                        </a>
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
            tabindex="-1"
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
                        value="Search..."
                        onblur="if(this.value==''){this.value='Search...'}"
                        onfocus="if(this.value=='Search...'){this.value=''}"
                        autocomplete="off"
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
                  <a href="#" className="button-close">
                    <i
                      className="pe-7s-close"
                      data-tippy="Close"
                      data-tippy-inertia="true"
                      data-tippy-animation="shift-away"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-theme="sharpborder"
                    ></i>
                  </a>
                </div>
                <ul className="minicart-list">
                  <li className="minicart-product">
                    <a className="product-item_remove" href="#">
                      <i
                        className="pe-7s-close"
                        data-tippy="Remove"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      ></i>
                    </a>
                    <a
                      href="single-product-variable.html"
                      className="product-item_img"
                    >
                      <img
                        className="img-full"
                        src="../assets/images/product/large-size/1-1-570x633.jpg"
                        alt="Product Image"
                      />
                    </a>
                    <div className="product-item_content">
                      <a
                        className="product-item_title"
                        href="single-product-variable.html"
                      >
                        American Marigold
                      </a>
                      <span className="product-item_quantity">1 x $23.45</span>
                    </div>
                  </li>
                  <li className="minicart-product">
                    <a className="product-item_remove" href="#">
                      <i
                        className="pe-7s-close"
                        data-tippy="Remove"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      ></i>
                    </a>
                    <a
                      href="single-product-variable.html"
                      className="product-item_img"
                    >
                      <img
                        className="img-full"
                        src="assets/images/product/small-size/2-2-70x78.png"
                        alt="Product Image"
                      />
                    </a>
                    <div className="product-item_content">
                      <a
                        className="product-item_title"
                        href="single-product-variable.html"
                      >
                        Black Eyed Susan
                      </a>
                      <span className="product-item_quantity">1 x $25.45</span>
                    </div>
                  </li>
                  <li className="minicart-product">
                    <a className="product-item_remove" href="#">
                      <i
                        className="pe-7s-close"
                        data-tippy="Remove"
                        data-tippy-inertia="true"
                        data-tippy-animation="shift-away"
                        data-tippy-delay="50"
                        data-tippy-arrow="true"
                        data-tippy-theme="sharpborder"
                      ></i>
                    </a>
                    <a
                      href="single-product-variable.html"
                      className="product-item_img"
                    >
                      <img
                        className="img-full"
                        src="assets/images/product/small-size/2-3-70x78.png"
                        alt="Product Image"
                      />
                    </a>
                    <div className="product-item_content">
                      <a
                        className="product-item_title"
                        href="single-product-variable.html"
                      >
                        Bleeding Heart
                      </a>
                      <span className="product-item_quantity">1 x $30.45</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="minicart-item_total">
                <span>Subtotal</span>
                <span className="ammount">$79.35</span>
              </div>
              <div className="group-btn_wrap d-grid gap-2">
                <a href="cart.html" className="btn btn-dark">
                  View Cart
                </a>
                <a href="checkout.html" className="btn btn-dark">
                  Checkout
                </a>
              </div>
            </div>
          </div>
          <div className="global-overlay"></div>
        </header>
        <div className="slider-area">
          <div className="swiper-container main-slider swiper-arrow with-bg_white">
            <div className="swiper-wrapper">
              <div className="swiper-slide animation-style-01">
                <div
                  className="slide-inner style-1 bg-height"
                  data-bg-image="assets/images/slider/bg/1-1.jpg"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                        <div className="slide-content text-black">
                          <span className="offer">65% Off</span>
                          <h2 className="title">New Plant</h2>
                          <p className="short-desc">
                            Pronia, With 100% Natural, Organic & Plant Shop.
                          </p>
                          <div className="btn-wrap">
                            <a
                              className="btn btn-custom-size xl-size btn-pronia-primary"
                              href="shop.html"
                            >
                              Discover Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                        <div className="inner-img">
                          <div className="scene fill">
                            <div className="expand-width" data-depth="0.2">
                              <img
                                src="../../1-1-524x617.png"
                                alt="Inner Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide animation-style-01">
                <div
                  className="slide-inner style-1 bg-height"
                  data-bg-image="assets/images/slider/bg/1-1.jpg"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                        <div className="slide-content text-black">
                          <span className="offer">65% Off</span>
                          <h2 className="title">New Plant</h2>
                          <p className="short-desc">
                            Pronia, With 100% Natural, Organic & Plant Shop.
                          </p>
                          <div className="btn-wrap">
                            <a
                              className="btn btn-custom-size xl-size btn-pronia-primary"
                              href="shop.html"
                            >
                              Discover Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                        <div className="inner-img">
                          <div className="scene fill">
                            <div className="expand-width" data-depth="0.2">
                              <img
                                src="assets/images/slider/inner-img/1-2-524x617.png"
                                alt="Inner Image"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination d-md-none"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>

        <div className="shipping-area section-space-top-100">
          <div className="container">
            <div className="shipping-bg">
              <div className="row shipping-wrap">
                <div className="col-lg-4 col-md-6">
                  <div className="shipping-item">
                    <div className="shipping-img">
                      <img src="../../car.png" alt="Shipping Icon" />
                    </div>
                    <div className="shipping-content">
                      <h2 className="title">Free Shipping</h2>
                      <p className="short-desc mb-0">
                        Capped at $319 per order
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                  <div className="shipping-item">
                    <div className="shipping-img">
                      <img src="../../card.png" alt="Shipping Icon" />
                    </div>
                    <div className="shipping-content">
                      <h2 className="title">Safe Payment</h2>
                      <p className="short-desc mb-0">
                        With our payment gateway
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                  <div className="shipping-item">
                    <div className="shipping-img">
                      <img src="../../service.png" alt="Shipping Icon" />
                    </div>
                    <div className="shipping-content">
                      <h2 className="title">Best Services</h2>
                      <p className="short-desc mb-0">
                        Friendly & Supper Services
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-area section-space-top-100">
          <div className="container">
            <div className="section-title-wrap">
              <h2 className="section-title mb-0">Our Products</h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul
                  className="nav product-tab-nav tab-style-1"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="active"
                      id="featured-tab"
                      data-bs-toggle="tab"
                      href="#featured"
                      role="tab"
                      aria-controls="featured"
                      aria-selected="true"
                    >
                      Featured
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      id="bestseller-tab"
                      data-bs-toggle="tab"
                      href="#bestseller"
                      role="tab"
                      aria-controls="bestseller"
                      aria-selected="false"
                    >
                      Bestseller
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      id="latest-tab"
                      data-bs-toggle="tab"
                      href="#latest"
                      role="tab"
                      aria-controls="latest"
                      aria-selected="false"
                    >
                      Latest
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="featured"
                    role="tabpanel"
                    aria-labelledby="featured-tab"
                  >
                    <div className="product-item-wrap row">
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="../../1-1-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-2-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              American Marigold
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$23.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-2-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-3-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Black Eyed Susan
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$25.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-3-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-4-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Bleeding Heart
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$30.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-4-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-5-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Bloody Cranesbill
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$45.00</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-5-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-6-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Butterfly Weed
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$50.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-6-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-7-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Common Yarrow
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$65.00</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-7-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-8-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Doublefile Viburnum
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$67.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-8-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-1-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Feather Reed Grass
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$20.00</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="bestseller"
                    role="tabpanel"
                    aria-labelledby="bestseller-tab"
                  >
                    <div className="product-item-wrap row">
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-5-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-6-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Butterfly Weed
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$50.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-6-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-7-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Common Yarrow
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$65.00</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-7-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-8-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Doublefile Viburnum
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$67.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-8-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-1-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Feather Reed Grass
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$20.00</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-1-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-2-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              American Marigold
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$23.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-2-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-3-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Black Eyed Susan
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$25.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-3-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-4-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Bleeding Heart
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$30.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-4-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-5-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Bloody Cranesbill
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$45.00</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="latest"
                    role="tabpanel"
                    aria-labelledby="latest-tab"
                  >
                    <div className="product-item-wrap row">
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-7-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-8-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Doublefile Viburnum
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$67.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-8-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-1-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Feather Reed Grass
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$20.00</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-1-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-2-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              American Marigold
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$23.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-2-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-3-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Black Eyed Susan
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$25.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-5-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-6-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Butterfly Weed
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$50.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-6-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-7-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Common Yarrow
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$65.00</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-3-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-4-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Bleeding Heart
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$30.45</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6 pt-4">
                        <div className="product-item">
                          <div className="product-img">
                            <a href="shop.html">
                              <img
                                className="primary-img"
                                src="assets/images/product/medium-size/1-4-270x300.jpg"
                                alt="Product Images"
                              />
                              <img
                                className="secondary-img"
                                src="assets/images/product/medium-size/1-5-270x300.jpg"
                                alt="Product Images"
                              />
                            </a>
                            <div className="product-add-action">
                              <ul>
                                <li>
                                  <a
                                    href="wishlist.html"
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-like"></i>
                                  </a>
                                </li>
                                <li
                                  className="quuickview-btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#quickModal"
                                >
                                  <a
                                    href="#"
                                    data-tippy="Quickview"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-look"></i>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="cart.html"
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                  >
                                    <i className="pe-7s-cart"></i>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="product-content">
                            <a className="product-name" href="shop.html">
                              Bloody Cranesbill
                            </a>
                            <div className="price-box pb-1">
                              <span className="new-price">$45.00</span>
                            </div>
                            <div className="rating-box">
                              <ul>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                                <li>
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-area section-space-top-90">
          <div className="container">
            <div className="row g-min-30 g-4">
              <div className="col-lg-8">
                <div className="banner-item img-hover-effect">
                  <div className="banner-img">
                    <img
                      src="assets/images/banner/1-1-770x300.jpg"
                      alt="Banner Image"
                    />
                  </div>
                  <div className="banner-content text-position-left">
                    <span className="collection">Collection Of Cactus</span>
                    <h3 className="title">
                      Pottery Pots & <br /> Plant
                    </h3>
                    <div className="button-wrap">
                      <a
                        className="btn btn-custom-size btn-pronia-primary"
                        href="shop.html"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="banner-item img-hover-effect">
                  <div className="banner-img">
                    <img
                      src="assets/images/banner/1-2-370x300.jpg"
                      alt="Banner Image"
                    />
                  </div>
                  <div className="banner-content text-position-center">
                    <span className="collection">New Collection</span>
                    <h3 className="title">Plant Port</h3>
                    <div className="button-wrap">
                      <a
                        className="btn btn-custom-size lg-size btn-pronia-primary"
                        href="shop.html"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="banner-item img-hover-effect">
                  <div className="banner-img">
                    <img
                      src="assets/images/banner/1-3-370x300.jpg"
                      alt="Banner Image"
                    />
                  </div>
                  <div className="banner-content text-position-center">
                    <span className="collection">New Collection</span>
                    <h3 className="title">Plant Port</h3>
                    <div className="button-wrap">
                      <a
                        className="btn btn-custom-size lg-size btn-pronia-primary"
                        href="shop.html"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="banner-item img-hover-effect">
                  <div className="banner-img">
                    <img
                      src="assets/images/banner/1-4-770x300.jpg"
                      alt="Banner Image"
                    />
                  </div>
                  <div className="banner-content text-position-left">
                    <span className="collection">Collection Of Cactus</span>
                    <h3 className="title">
                      Hanging Pots & <br /> Plant
                    </h3>
                    <div className="button-wrap">
                      <a
                        className="btn btn-custom-size lg-size btn-pronia-primary"
                        href="shop.html"
                      >
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-area section-space-top-100">
          <div className="container">
            <div className="row">
              <div className="section-title-wrap without-tab">
                <h2 className="section-title">New Products</h2>
                <p className="section-desc">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature
                </p>
              </div>
              <div className="col-lg-12">
                <div className="swiper-container product-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide product-item">
                      <div className="product-img">
                        <a href="shop.html">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-9-270x300.jpg"
                            alt="Product Images"
                          />
                          <img
                            className="secondary-img"
                            src="assets/images/product/medium-size/1-10-270x300.jpg"
                            alt="Product Images"
                          />
                        </a>
                        <div className="product-add-action">
                          <ul>
                            <li>
                              <a
                                href="wishlist.html"
                                data-tippy="Add to wishlist"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-like"></i>
                              </a>
                            </li>
                            <li
                              className="quuickview-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#quickModal"
                            >
                              <a
                                href="#"
                                data-tippy="Quickview"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-tippy="Add to cart"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <a className="product-name" href="shop.html">
                          American Marigold
                        </a>
                        <div className="price-box pb-1">
                          <span className="new-price">$23.45</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-item">
                      <div className="product-img">
                        <a href="shop.html">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-10-270x300.jpg"
                            alt="Product Images"
                          />
                          <img
                            className="secondary-img"
                            src="assets/images/product/medium-size/1-11-270x300.jpg"
                            alt="Product Images"
                          />
                        </a>
                        <div className="product-add-action">
                          <ul>
                            <li>
                              <a
                                href="wishlist.html"
                                data-tippy="Add to wishlist"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-like"></i>
                              </a>
                            </li>
                            <li
                              className="quuickview-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#quickModal"
                            >
                              <a
                                href="#"
                                data-tippy="Quickview"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-tippy="Add to cart"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <a className="product-name" href="shop.html">
                          Black Eyed Susan
                        </a>
                        <div className="price-box pb-1">
                          <span className="new-price">$25.45</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-item">
                      <div className="product-img">
                        <a href="shop.html">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-11-270x300.jpg"
                            alt="Product Images"
                          />
                          <img
                            className="secondary-img"
                            src="assets/images/product/medium-size/1-4-270x300.jpg"
                            alt="Product Images"
                          />
                        </a>
                        <div className="product-add-action">
                          <ul>
                            <li>
                              <a
                                href="wishlist.html"
                                data-tippy="Add to wishlist"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-like"></i>
                              </a>
                            </li>
                            <li
                              className="quuickview-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#quickModal"
                            >
                              <a
                                href="#"
                                data-tippy="Quickview"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-tippy="Add to cart"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <a className="product-name" href="shop.html">
                          Bleeding Heart
                        </a>
                        <div className="price-box pb-1">
                          <span className="new-price">$30.45</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide product-item">
                      <div className="product-img">
                        <a href="shop.html">
                          <img
                            className="primary-img"
                            src="assets/images/product/medium-size/1-7-270x300.jpg"
                            alt="Product Images"
                          />
                          <img
                            className="secondary-img"
                            src="assets/images/product/medium-size/1-8-270x300.jpg"
                            alt="Product Images"
                          />
                        </a>
                        <div className="product-add-action">
                          <ul>
                            <li>
                              <a
                                href="wishlist.html"
                                data-tippy="Add to wishlist"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-like"></i>
                              </a>
                            </li>
                            <li
                              className="quuickview-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#quickModal"
                            >
                              <a
                                href="#"
                                data-tippy="Quickview"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-look"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href="cart.html"
                                data-tippy="Add to cart"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              >
                                <i className="pe-7s-cart"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-content">
                        <a className="product-name" href="shop.html">
                          Bloody Cranesbill
                        </a>
                        <div className="price-box pb-1">
                          <span className="new-price">$45.00</span>
                        </div>
                        <div className="rating-box">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonial-area section-space-top-90 section-space-bottom-95">
          <div className="container-fluid">
            <div
              className="testimonial-bg"
              data-bg-image="assets/images/testimonial/bg/1-1-1820x443.jpg"
            >
              <div className="section-title-wrap">
                <h2 className="section-title">What Say Client</h2>
                <p className="section-desc mb-0">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classNameical Latin
                  literature
                </p>
              </div>
            </div>
            <div className="container custom-space">
              <div className="swiper-container testimonial-slider with-bg">
                <div className="swiper-wrapper">
                  <div className="swiper-slide testimonial-item">
                    <div className="user-info mb-3">
                      <div className="user-shape-wrap">
                        <div className="user-img">
                          <img
                            src="assets/images/testimonial/user/1.png"
                            alt="User Image"
                          />
                        </div>
                      </div>
                      <div className="user-content text-charcoal">
                        <h4 className="user-name mb-1">Phoenix Baker</h4>
                        <span className="user-occupation">Client</span>
                      </div>
                    </div>
                    <p className="user-comment mb-6">
                      Lorem ipsum dolor sit amet, conse adipisic elit, sed do
                      eiusmod tempo incididunt ut labore et dolore. magna
                    </p>
                  </div>
                  <div className="swiper-slide testimonial-item">
                    <div className="user-info mb-3">
                      <div className="user-shape-wrap">
                        <div className="user-img">
                          <img
                            src="assets/images/testimonial/user/2.png"
                            alt="User Image"
                          />
                        </div>
                      </div>
                      <div className="user-content text-charcoal">
                        <h4 className="user-name mb-1">Phoenix Baker</h4>
                        <span className="user-occupation">Client</span>
                      </div>
                    </div>
                    <p className="user-comment mb-6">
                      Lorem ipsum dolor sit amet, conse adipisic elit, sed do
                      eiusmod tempo incididunt ut labore et dolore. magna
                    </p>
                  </div>
                  <div className="swiper-slide testimonial-item">
                    <div className="user-info mb-3">
                      <div className="user-shape-wrap">
                        <div className="user-img">
                          <img
                            src="assets/images/testimonial/user/3.png"
                            alt="User Image"
                          />
                        </div>
                      </div>
                      <div className="user-content text-charcoal">
                        <h4 className="user-name mb-1">Phoenix Baker</h4>
                        <span className="user-occupation">Client</span>
                      </div>
                    </div>
                    <p className="user-comment mb-6">
                      Lorem ipsum dolor sit amet, conse adipisic elit, sed do
                      eiusmod tempo incididunt ut labore et dolore. magna
                    </p>
                  </div>
                </div>

                <div className="swiper-pagination without-absolute"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="brand-area section-space-bottom-100">
          <div className="container">
            <div
              className="brand-bg"
              data-bg-image="assets/images/brand/bg/1-1170x300.jpg"
            >
              <div className="row">
                <div className="col-lg-12">
                  <div className="swiper-container brand-slider">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <a className="brand-item" href="#">
                          <img
                            src="assets/images/brand/1-1.png"
                            alt="Brand Image"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="brand-item" href="#">
                          <img
                            src="assets/images/brand/1-2.png"
                            alt="Brand Image"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="brand-item" href="#">
                          <img
                            src="assets/images/brand/1-3.png"
                            alt="Brand Image"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="brand-item" href="#">
                          <img
                            src="assets/images/brand/1-4.png"
                            alt="Brand Image"
                          />
                        </a>
                      </div>
                      <div className="swiper-slide">
                        <a className="brand-item" href="#">
                          <img
                            src="assets/images/brand/1-5.png"
                            alt="Brand Image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="blog-area section-space-bottom-100">
          <div className="container">
            <div className="section-title-wrap">
              <h2 className="section-title mb-7">Latest Blog</h2>
              <p className="section-desc">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
              </p>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="swiper-container blog-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="blog-item">
                        <div className="blog-content">
                          <div className="blog-meta">
                            <ul>
                              <li className="author">
                                <a href="#">By: Admin</a>
                              </li>
                              <li className="date">24 April 2021</li>
                            </ul>
                          </div>
                          <h2 className="title">
                            <a href="blog.html">There Many Variations</a>
                          </h2>
                          <p className="short-desc mb-7">
                            Lorem ipsum dolor sit amet, consecteturl adipisl
                            elit, sed do eiusmod tempor incidio ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        <div className="blog-img img-hover-effect">
                          <a href="blog.html">
                            <img
                              className="img-full"
                              src="assets/images/blog/medium-size/1-1-310x220.jpg"
                              alt="Blog Image"
                            />
                          </a>
                          <div className="inner-btn-wrap">
                            <a className="inner-btn" href="blog.html">
                              <i className="pe-7s-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="blog-item">
                        <div className="blog-content">
                          <div className="blog-meta">
                            <ul>
                              <li className="author">
                                <a href="#">By: Admin</a>
                              </li>
                              <li className="date">24 April 2021</li>
                            </ul>
                          </div>
                          <h2 className="title">
                            <a href="blog.html">Maecenas Laoreet Massa</a>
                          </h2>
                          <p className="short-desc mb-7">
                            Lorem ipsum dolor sit amet, consecteturl adipisl
                            elit, sed do eiusmod tempor incidio ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        <div className="blog-img img-hover-effect">
                          <a href="blog.html">
                            <img
                              className="img-full"
                              src="assets/images/blog/medium-size/1-2-310x220.jpg"
                              alt="Blog Image"
                            />
                          </a>
                          <div className="inner-btn-wrap">
                            <a className="inner-btn" href="blog.html">
                              <i className="pe-7s-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="blog-item">
                        <div className="blog-content">
                          <div className="blog-meta">
                            <ul>
                              <li className="author">
                                <a href="#">By: Admin</a>
                              </li>
                              <li className="date">24 April 2021</li>
                            </ul>
                          </div>
                          <h2 className="title">
                            <a href="blog.html">Aenean Vulputate Lorem</a>
                          </h2>
                          <p className="short-desc mb-7">
                            Lorem ipsum dolor sit amet, consecteturl adipisl
                            elit, sed do eiusmod tempor incidio ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                        <div className="blog-img img-hover-effect">
                          <a href="blog.html">
                            <img
                              className="img-full"
                              src="assets/images/blog/medium-size/1-3-310x220.jpg"
                              alt="Blog Image"
                            />
                          </a>
                          <div className="inner-btn-wrap">
                            <a className="inner-btn" href="blog.html">
                              <i className="pe-7s-link"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="footer-area"
          data-bg-image="assets/images/footer/bg/1-1920x465.jpg"
        >
          <div className="footer-top section-space-top-100 pb-60">
            <div className="container">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footer-widget-item">
                    <div className="footer-widget-logo">
                      <a href="index.html">
                        <img src="assets/images/logo/dark.png" alt="Logo" />
                      </a>
                    </div>
                    <p className="footer-widget-desc">
                      Lorem ipsum dolor sit amet, consec adipisl elit, sed do
                      eiusmod tempor
                      <br />
                      incidio ut labore et dolore magna.
                    </p>
                    <div className="social-link with-border">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-tippy="Facebook"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Twitter"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Pinterest"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Dribbble"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="fa fa-dribbble"></i>
                          </a>
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
                        <a href="#">About Pronia</a>
                      </li>
                      <li>
                        <a href="#">How to shop</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Contact us</a>
                      </li>
                      <li>
                        <a href="#">Log in</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 pt-40">
                  <div className="footer-widget-item">
                    <h3 className="footer-widget-title">My Account</h3>
                    <ul className="footer-widget-list-item">
                      <li>
                        <a href="#">Sign In</a>
                      </li>
                      <li>
                        <a href="#">View Cart</a>
                      </li>
                      <li>
                        <a href="#">My Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Track My Order</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 pt-40">
                  <div className="footer-widget-item">
                    <h3 className="footer-widget-title">Our Service</h3>
                    <ul className="footer-widget-list-item">
                      <li>
                        <a href="#">Payment Methods</a>
                      </li>
                      <li>
                        <a href="#">Money Guarantee!</a>
                      </li>
                      <li>
                        <a href="#">Returns</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 pt-40">
                  <div className="footer-contact-info">
                    <h3 className="footer-widget-title">
                      Got Question? Call Us
                    </h3>
                    <a className="number" href="tel://123-456-789">
                      123 456 789
                    </a>
                    <div className="address">
                      <ul>
                        <li>Your Address Goes Here</li>
                      </ul>
                    </div>
                  </div>
                  <div className="payment-method">
                    <a href="#">
                      <img
                        src="assets/images/payment/1.png"
                        alt="Payment Method"
                      />
                    </a>
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
                      © 2021 Pronia Made with{" "}
                      <i className="fa fa-heart text-danger"></i> by
                      <a
                        href="https://hasthemes.com/"
                        rel="noopener"
                        target="_blank"
                      >
                        HasThemes
                      </a>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal quick-view-modal fade"
          id="quickModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="quickModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
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
                <div className="modal-wrap row">
                  <div className="col-lg-6">
                    <div className="modal-img">
                      <div className="swiper-container modal-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <a href="#" className="single-img">
                              <img
                                className="img-full"
                                src="assets/images/product/large-size/1-1-570x633.jpg"
                                alt="Product Image"
                              />
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="#" className="single-img">
                              <img
                                className="img-full"
                                src="assets/images/product/large-size/1-2-570x633.jpg"
                                alt="Product Image"
                              />
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="#" className="single-img">
                              <img
                                className="img-full"
                                src="assets/images/product/large-size/1-3-570x633.jpg"
                                alt="Product Image"
                              />
                            </a>
                          </div>
                          <div className="swiper-slide">
                            <a href="#" className="single-img">
                              <img
                                className="img-full"
                                src="assets/images/product/large-size/1-4-570x633.jpg"
                                alt="Product Image"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 pt-5 pt-lg-0">
                    <div className="single-product-content">
                      <h2 className="title">American Marigold</h2>
                      <div className="price-box">
                        <span className="new-price">$23.45</span>
                      </div>
                      <div className="rating-box-wrap">
                        <div className="rating-box">
                          <ul>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                            <li>
                              <i className="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                        <div className="review-status">
                          <a href="#">( 1 Review )</a>
                        </div>
                      </div>
                      <div className="selector-wrap color-option">
                        <span className="selector-title border-bottom-0">
                          Color
                        </span>
                        <select className="nice-select wide border-bottom-0 rounded-0">
                          <option value="default">Black & White</option>
                          <option value="blue">Blue</option>
                          <option value="green">Green</option>
                          <option value="red">Red</option>
                        </select>
                      </div>
                      <div className="selector-wrap size-option">
                        <span className="selector-title">Size</span>
                        <select className="nice-select wide rounded-0">
                          <option value="medium">Medium Size & Poot</option>
                          <option value="large">Large Size With Poot</option>
                          <option value="small">Small Size With Poot</option>
                        </select>
                      </div>
                      <p className="short-desc">
                        Lorem ipsum dolor sit amet, consectetur adipisic elit,
                        sed do eiusmod tempo incid ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostru
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate
                      </p>
                      <ul className="quantity-with-btn">
                        <li className="quantity">
                          <div className="cart-plus-minus">
                            <input
                              className="cart-plus-minus-box"
                              value="1"
                              type="text"
                            />
                          </div>
                        </li>
                        <li className="add-to-cart">
                          <a
                            className="btn btn-custom-size lg-size btn-pronia-primary"
                            href="cart.html"
                          >
                            Add to cart
                          </a>
                        </li>
                        <li className="wishlist-btn-wrap">
                          <a className="custom-circle-btn" href="wishlist.html">
                            <i className="pe-7s-like"></i>
                          </a>
                        </li>
                        <li className="compare-btn-wrap">
                          <a className="custom-circle-btn" href="compare.html">
                            <i className="pe-7s-refresh-2"></i>
                          </a>
                        </li>
                      </ul>
                      <ul className="service-item-wrap pb-0">
                        <li className="service-item">
                          <div className="service-img">
                            <img
                              src="assets/images/shipping/icon/car.png"
                              alt="Shipping Icon"
                            />
                          </div>
                          <div className="service-content">
                            <span className="title">
                              Free <br /> Shipping
                            </span>
                          </div>
                        </li>
                        <li className="service-item">
                          <div className="service-img">
                            <img
                              src="assets/images/shipping/icon/card.png"
                              alt="Shipping Icon"
                            />
                          </div>
                          <div className="service-content">
                            <span className="title">
                              Safe <br /> Payment
                            </span>
                          </div>
                        </li>
                        <li className="service-item">
                          <div className="service-img">
                            <img
                              src="assets/images/shipping/icon/service.png"
                              alt="Shipping Icon"
                            />
                          </div>
                          <div className="service-content">
                            <span className="title">
                              Safe <br /> Payment
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="scroll-to-top" href="">
          <i className="fa fa-angle-double-up"></i>
        </a>
      </div>
    </>
  );
};
