export const OurProducts = () => {
  return (
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
  );
};
