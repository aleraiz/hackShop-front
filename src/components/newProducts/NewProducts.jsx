import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./css/style.css";

export const NewProducts = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="product-area section-space-top-100">
        <div className="container">
          <div className="row">
            <div className="section-title-wrap without-tab">
              <h2 className="section-title">New Products</h2>
              <p className="section-desc">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
              </p>
            </div>

            <div className="col-lg-12">
              <div className="swiper-container product-slider">
                <Carousel responsive={responsive} infinite={true}>
                  <div className="swiper-slide product-item">
                    <div className="product-img">
                      <a href="shop.html">
                        <img
                          className="primary-img"
                          src="../../images/newProducts/1-9-270x300.jpg"
                          alt="Product Images"
                        />
                        <img
                          className="secondary-img"
                          src="../../images/newProducts/1-10-270x300.jpg"
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
                          src="../../images/newProducts/1-10-270x300.jpg"
                          alt="Product Images"
                        />
                        <img
                          className="secondary-img"
                          src="../../images/newProducts/1-11-270x300.jpg"
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
                          src="../../images/newProducts/1-11-270x300.jpg"
                          alt="Product Images"
                        />
                        <img
                          className="secondary-img"
                          src="../../images/newProducts/1-4-270x300.jpg"
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
                          src="../../images/newProducts/1-7-270x300.jpg"
                          alt="Product Images"
                        />
                        <img
                          className="secondary-img"
                          src="../../images/newProducts/1-8-270x300.jpg"
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
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
