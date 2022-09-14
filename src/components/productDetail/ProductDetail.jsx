import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useParams } from "react-router-dom";
import { CarouselProducts } from "../carouselProducts/CarouselProducts";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addProductCart } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../redux/slices/cartSlice";
import "./style.css";

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState([]);
  const { id } = useParams();
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [isReadMore, setIsReadMore] = useState(true);
  const [removeProduct, setRemoveProduct] = useState(quantityProduct);
  const cart = useSelector((state) => state.cart.cart);

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
    dispatch(addProductCart({ productDetail, quantityProduct }));
    setQuantityProduct(0);
  }

  function handlerIncrementProduct(productId) {
    if (quantityProduct < productDetail.stock) {
      setQuantityProduct(quantityProduct + 1);
    }
    dispatch(incrementQuantity({ productId }));
  }

  function handlerDecrementProduct(productId) {
    if (quantityProduct > 1) {
      setQuantityProduct(quantityProduct - 1);
    }
    dispatch(decrementQuantity({ productId }));
  }

  function toggleReadMore() {
    setIsReadMore(!isReadMore);
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
                        <Link to="/">Home</Link>
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
                          <Link
                            to="/"
                            // to={productDetail.image[0].imageOne}
                            className="single-img gallery-popup"
                          >
                            {productDetail.image ? (
                              <img
                                className="img-full"
                                src={productDetail?.image[0].imageOne}
                                alt="Product Image"
                              />
                            ) : (
                              <h1>No hay imagen</h1>
                            )}
                          </Link>
                        </div>
                        <div className="swiper-slide">
                          <Link
                            src="assets/images/product/large-size/1-2-570x633.jpg"
                            className="single-img gallery-popup"
                            to="/"
                          >
                            <img
                              className="img-full"
                              src="../../../image/imageDetail3.jpg"
                              alt="Product Image"
                            />
                          </Link>
                        </div>
                        <div className="swiper-slide">
                          <Link
                            src="assets/images/product/large-size/1-3-570x633.jpg"
                            className="single-img gallery-popup"
                            to="/"
                          >
                            <img
                              className="img-full"
                              src="assets/images/product/large-size/1-3-570x633.jpg"
                              alt="Product Image"
                            />
                          </Link>
                        </div>
                        <div className="swiper-slide">
                          <Link
                            src="assets/images/product/large-size/1-4-570x633.jpg"
                            className="single-img gallery-popup"
                            to="/"
                          >
                            <img
                              className="img-full"
                              src="assets/images/product/large-size/1-4-570x633.jpg"
                              alt="Product Image"
                            />
                          </Link>
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
                    </div>
                    <p className="short-desc">
                      {isReadMore
                        ? productDetail.description?.slice(0, 150)
                        : productDetail.description}
                      <span
                        onClick={() => {
                          toggleReadMore();
                        }}
                        className="read-or-hide"
                      >
                        {isReadMore ? "...read more" : " show less"}
                      </span>
                    </p>
                    <ul className="quantity-with-btn ps-0">
                      <li className="quantity">
                        <div className="cart-plus-minus">
                          <button
                            className="cart-plus-minus-box"
                            id="quantityBtnDecrement"
                            type="submit"
                            onClick={() => {
                              handlerDecrementProduct(productDetail.id);
                            }}
                          >
                            <div className="dec qtybutton">
                              <i className="fa fa-minus"></i>
                            </div>
                          </button>
                        </div>
                        <span className="quantityNumber">{quantityProduct}</span>
                        <div className="cart-plus-minus">
                          <button
                            className="cart-plus-minus-box "
                            id="quantityBtn"
                            type="submit"
                            onClick={() => {
                              handlerIncrementProduct(productDetail.id);
                            }}
                          >
                            <div className="inc qtybutton">
                              <i className="fa fa-plus"></i>
                            </div>
                          </button>
                        </div>
                      </li>
                      <li className="affiliate-btn-wrap">
                        <button
                          className="btn btn-custom-size btn-pronia-primary  btn-collection"
                          id="btnAddToCart"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddCart();
                          }}
                        >
                          ADD TO CART
                        </button>
                      </li>
                    </ul>
                    <div className="product-category">
                      <span className="title">SKU:</span>
                      <ul>
                        <li>
                          <Link to="#">Ch-256xl</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product-category product-tags">
                      <span className="title">Tags :</span>
                      <ul>
                        <li>
                          <Link to="#">Furniture</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="product-category social-link align-items-center pb-0">
                      <span className="title pe-3">Share:</span>
                      <ul>
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
                            <i className="fa fa-pinterest-p"></i>
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
                            data-tippy="Tumblr"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="fa fa-tumblr"></i>
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
              </div>
            </div>
          </div>
          <div className="product-area section-space-y-axis-90">
            <div className="container">
              <div className="row">
                <div className="section-title-wrap without-tab">
                  <h2 className="section-title">Related Products</h2>
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
                            <Link to="#" className="single-img">
                              <img
                                className="img-full"
                                src="assets/images/product/large-size/1-3-570x633.jpg"
                                alt="Product Image"
                              />
                            </Link>
                          </div>
                          <div className="swiper-slide">
                            <Link to="#" className="single-img">
                              <img
                                className="img-full"
                                src="assets/images/product/large-size/1-4-570x633.jpg"
                                alt="Product Image"
                              />
                            </Link>
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
    </>
  );
};