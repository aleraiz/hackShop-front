import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import { CarouselProducts } from "../carouselProducts/CarouselProducts";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const productDetail = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/product/${id}`,
      });
      setProductDetail(response.data);
    };
    productDetail();
  }, []);

  function handleAddCart() {
    dispatch(addProductCart(productDetail));
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="main-wrapper">
        <main className="main-content">
          <div
            className="breadcrumb-area breadcrumb-height"
            data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg"
          >
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-12">
                  <div className="breadcrumb-item">
                    <h2 className="breadcrumb-heading">Single Product</h2>
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Single Product Affiliate</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-product-area section-space-top-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="single-product-img">
                    <div className="swiper-container single-product-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <a
                            // href={productDetail.image[0].imageOne}
                            className="single-img gallery-popup"
                          >
                            {productDetail.image ? (
                              <img
                                className="img-full"
                                src={productDetail?.image[0].imageOne}
                                alt="Product Image"
                              />
                            ) : (
                              <h1>Hola</h1>
                            )}
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a
                            href="assets/images/product/large-size/1-2-570x633.jpg"
                            className="single-img gallery-popup"
                          >
                            <img
                              className="img-full"
                              src="../../../image/imageDetail3.jpg"
                              alt="Product Image"
                            />
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a
                            href="assets/images/product/large-size/1-3-570x633.jpg"
                            className="single-img gallery-popup"
                          >
                            <img
                              className="img-full"
                              src="assets/images/product/large-size/1-3-570x633.jpg"
                              alt="Product Image"
                            />
                          </a>
                        </div>
                        <div className="swiper-slide">
                          <a
                            href="assets/images/product/large-size/1-4-570x633.jpg"
                            className="single-img gallery-popup"
                          >
                            <img
                              className="img-full"
                              src="assets/images/product/large-size/1-4-570x633.jpg"
                              alt="Product Image"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-container single-product-thumbs">
                      <Carousel responsive={responsive} infinite={true} arrows={true}>
                        <div className="swiper-slide">
                          <img
                            className="img-full"
                            src="../../../image/macetaUno.jpg"
                            alt="Product Thumnail"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            className="img-full"
                            src="../../../image/macetaDos.jpg"
                            alt="Product Thumnail"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            className="img-full"
                            src="../../../image/macetaTres.jpg"
                            alt="Product Thumnail"
                          />
                        </div>
                        <div className="swiper-slide">
                          <img
                            className="img-full"
                            src="../../../image/macetaSiete.jpg"
                            alt="Product Thumnail"
                          />
                        </div>
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 pt-5 pt-lg-0">
                  <div className="single-product-content">
                    <h2 className="title">{productDetail.productName}</h2>
                    <div className="price-box">
                      <span className="new-price">${productDetail.price}</span>
                    </div>
                    <div className="rating-box-wrap pb-4">
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
                    <p className="short-desc">
                      Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempo
                      incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                      aute irure dolor in reprehenderit in voluptate
                    </p>
                    <ul className="quantity-with-btn pb-4">
                      <li className="affiliate-btn-wrap">
                        <button
                          className="btn btn-custom-size xl-size btn-pronia-primary"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddCart();
                          }}
                        >
                          Buy Now
                        </button>
                      </li>
                    </ul>
                    <div className="product-category">
                      <span className="title">SKU:</span>
                      <ul>
                        <li>
                          <a href="#">Ch-256xl</a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-category">
                      <span className="title">Categories :</span>
                      <ul>
                        <li>
                          <a href="#">Office,</a>
                        </li>
                        <li>
                          <a href="#">Home</a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-category product-tags">
                      <span className="title">Tags :</span>
                      <ul>
                        <li>
                          <a href="#">Furniture</a>
                        </li>
                      </ul>
                    </div>
                    <div className="product-category social-link align-items-center pb-0">
                      <span className="title pe-3">Share:</span>
                      <ul>
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
                            <i className="fa fa-pinterest-p"></i>
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
                            data-tippy="Tumblr"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="fa fa-tumblr"></i>
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
              </div>
            </div>
          </div>
          <div className="product-tab-area section-space-top-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <ul className="nav product-tab-nav tab-style-2 pt-0" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="tab-btn"
                        id="information-tab"
                        data-bs-toggle="tab"
                        href="#information"
                        role="tab"
                        aria-controls="information"
                        aria-selected="false"
                      >
                        Information
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="active tab-btn"
                        id="description-tab"
                        data-bs-toggle="tab"
                        href="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="tab-btn"
                        id="reviews-tab"
                        data-bs-toggle="tab"
                        href="#reviews"
                        role="tab"
                        aria-controls="reviews"
                        aria-selected="false"
                      >
                        Reviews(3)
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content product-tab-content">
                    <div
                      className="tab-pane fade"
                      id="information"
                      role="tabpanel"
                      aria-labelledby="information-tab"
                    >
                      <div className="product-information-body">
                        <h4 className="title">Shipping</h4>
                        <p className="short-desc mb-4">
                          The item will be shipped from China. So it need 15-20 days to deliver. Our
                          product is good with reasonable price and we believe you will worth it. So
                          please wait for it patiently! Thanks.Any question please kindly to contact
                          us and we promise to work hard to help you to solve the problem
                        </p>
                        <h4 className="title">About return request</h4>
                        <p className="short-desc mb-4">
                          If you don't need the item with worry, you can contact us then we will
                          help you to solve the problem, so please close the return request! Thanks
                        </p>
                        <h4 className="title">Guarantee</h4>
                        <p className="short-desc mb-0">
                          If it is the quality question, we will resend or refund to you; If you
                          receive damaged or wrong items, please contact us and attach some pictures
                          about product, we will exchange a new correct item to you after the
                          confirmation.
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div className="product-description-body">
                        <p className="short-desc mb-0">{productDetail.description}</p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="reviews"
                      role="tabpanel"
                      aria-labelledby="reviews-tab"
                    >
                      <div className="product-review-body">
                        <div className="blog-comment mt-0">
                          <h4 className="heading">Comments (03)</h4>
                          <div className="blog-comment-item">
                            <div className="blog-comment-img">
                              <img
                                src="assets/images/blog/avatar/1-1-120x120.png"
                                alt="User Image"
                              />
                            </div>
                            <div className="blog-comment-content">
                              <div className="user-meta">
                                <h2 className="user-name">Donald Chavez</h2>
                                <span className="date">21 July 2021</span>
                              </div>
                              <p className="user-comment">
                                Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod
                                tempor incidid ut labore etl dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitati ullamco laboris nisi ut aliquiex ea
                                commodo consequat.
                              </p>
                              <a className="btn btn-custom-size comment-btn" href="#">
                                Reply
                              </a>
                            </div>
                          </div>
                          <div className="blog-comment-item relpy-item">
                            <div className="blog-comment-img">
                              <img
                                src="assets/images/blog/avatar/1-2-120x120.png"
                                alt="User Image"
                              />
                            </div>
                            <div className="blog-comment-content">
                              <div className="user-meta">
                                <h2 className="user-name">Marissa Swan</h2>
                                <span className="date">21 July 2021</span>
                              </div>
                              <p className="user-comment">
                                Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod
                                tempr incidid ut labore etl dolore magna aliqua. Ut enim ad minim
                                veniam, quisnos exercitati ullamco laboris nisi ut aliquiex.
                              </p>
                              <a className="btn btn-custom-size comment-btn style-2" href="#">
                                Reply
                              </a>
                            </div>
                          </div>
                          <div className="blog-comment-item">
                            <div className="blog-comment-img">
                              <img
                                src="assets/images/blog/avatar/1-3-120x120.png"
                                alt="User Image"
                              />
                            </div>
                            <div className="blog-comment-content">
                              <div className="user-meta">
                                <h2 className="user-name">Donald Chavez</h2>
                                <span className="date">21 July 2021</span>
                              </div>
                              <p className="user-comment">
                                Lorem ipsum dolor sit amet, consectetur adipisi elit, sed do eiusmod
                                tempor incidid ut labore etl dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitati ullamco laboris nisi ut aliquiex ea
                                commodo consequat.
                              </p>
                              <a className="btn btn-custom-size comment-btn" href="#">
                                Reply
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="feedback-area">
                          <h2 className="heading">Leave a comment</h2>
                          <form className="feedback-form" action="#">
                            <div className="group-input">
                              <div className="form-field me-md-30 mb-30 mb-md-0">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Your Name*"
                                  className="input-field"
                                />
                              </div>
                              <div className="form-field">
                                <input
                                  type="text"
                                  name="email"
                                  placeholder="Your Email*"
                                  className="input-field"
                                />
                              </div>
                            </div>
                            <div className="form-field mt-30">
                              <input
                                type="text"
                                name="subject"
                                placeholder="Subject (Optinal)"
                                className="input-field"
                              />
                            </div>
                            <div className="form-field mt-30">
                              <textarea
                                name="message"
                                placeholder="Message"
                                className="textarea-field"
                              ></textarea>
                            </div>
                            <div className="button-wrap pt-5">
                              <button
                                type="submit"
                                value="submit"
                                className="btn btn-custom-size xl-size btn-pronia-primary"
                                name="submit"
                              >
                                Post Comment
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product-area section-space-y-axis-90">
            <div className="container">
              <div className="row">
                <div className="section-title-wrap without-tab">
                  <h2 className="section-title">Related Products</h2>
                  <p className="section-desc">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                    in a piece of classNameical Latin literature
                  </p>
                </div>
                <div className="col-lg-12">
                  <CarouselProducts productDetail={productDetail} />
                </div>
              </div>
            </div>
          </div>
        </main>
        <div
          className="modal quick-view-modal fade"
          id="quickModal"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
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
                            <Link to={`/product/${productDetail.id}`} className="single-img">
                              <img
                                className="img-full"
                                src="assets/images/product/large-size/1-1-570x633.jpg"
                                alt="Product Image"
                              />
                            </Link>
                          </div>
                          <div className="swiper-slide">
                            <Link to={`/product/${productDetail.id}`} className="single-img">
                              <img
                                className="img-full"
                                src="assets/images/product/large-size/1-2-570x633.jpg"
                                alt="Product Image"
                              />
                            </Link>
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
                        <span className="selector-title border-bottom-0">Color</span>
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
                        Lorem ipsum dolor sit amet, consectetur adipisic elit, sed do eiusmod tempo
                        incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostru
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                        aute irure dolor in reprehenderit in voluptate
                      </p>
                      <ul className="quantity-with-btn">
                        <li className="quantity">
                          <div className="cart-plus-minus">
                            <input className="cart-plus-minus-box" type="text" />
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
                            <img src="assets/images/shipping/icon/car.png" alt="Shipping Icon" />
                          </div>
                          <div className="service-content">
                            <span className="title">
                              Free <br />
                              Shipping
                            </span>
                          </div>
                        </li>
                        <li className="service-item">
                          <div className="service-img">
                            <img src="assets/images/shipping/icon/card.png" alt="Shipping Icon" />
                          </div>
                          <div className="service-content">
                            <span className="title">
                              Safe <br />
                              Payment
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
                              Safe <br />
                              Payment
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
