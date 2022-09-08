import { Carousel } from "./carousel/Carousel";
import { ShippingArea } from "./shippingArea/ShippingArea";
import { OurProducts } from "./ourProducts/OurProducts";
import { Collection } from "./collection/Collection";
import { NewProducts } from "./newProducts/NewProducts";
import { Testimonial } from "./testimonial/Testimonial";
import { BrandArea } from "./brandArea/BrandArea";
import { LatestBlog } from "./latestBlog/LatestBlog";

export const Home = () => {
  return (
    <div className="main-wrapper">
      <Carousel />
      <ShippingArea />
      <OurProducts />
      <Collection />
      <NewProducts />
      <Testimonial />
      <BrandArea />
      <LatestBlog />
      {/* <div
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
        </div>  */}
      <a className="scroll-to-top" href="">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};
