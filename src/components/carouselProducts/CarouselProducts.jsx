import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "react-multi-carousel/lib/styles.css";
import "../newProducts/style.css";

export const CarouselProducts = () => {
  const MySwal = withReactContent(Swal);

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
    <Carousel responsive={responsive} infinite={true}>
      <div className="swiper-slide product-item">
        <div className="product-img">
          <Link to={""}>
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
          </Link>
          <div className="product-add-action">
            <ul>
              <li>
                <button
                  className="whislistBtn"
                  data-tippy="Add to wishlist"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  <i className="pe-7s-like"></i>
                </button>
              </li>
              <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                <Link
                  to="#"
                  data-tippy="Quickview"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="pe-7s-look"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="cart.html"
                  data-tippy="Add to cart"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="pe-7s-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-content">
          <Link className="product-name" to="shop.html">
            American Marigold
          </Link>
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
          <Link to="shop.html">
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
          </Link>
          <div className="product-add-action">
            <ul>
              <li>
                <button
                  className="whislistBtn"
                  data-tippy="Add to wishlist"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  <i className="pe-7s-like"></i>
                </button>
              </li>
              <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                <Link
                  to="#"
                  data-tippy="Quickview"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="pe-7s-look"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="cart.html"
                  data-tippy="Add to cart"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="pe-7s-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-content">
          <Link className="product-name" to="shop.html">
            Black Eyed Susan
          </Link>
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
          <Link to="shop.html">
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
          </Link>
          <div className="product-add-action">
            <ul>
              <li>
                <button
                  className="whislistBtn"
                  data-tippy="Add to wishlist"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  <i className="pe-7s-like"></i>
                </button>
              </li>
              <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                <Link
                  to="#"
                  data-tippy="Quickview"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="pe-7s-look"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="cart.html"
                  data-tippy="Add to cart"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="pe-7s-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-content">
          <Link className="product-name" to="shop.html">
            Bleeding Heart
          </Link>
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
          <Link to="shop.html">
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
          </Link>
          <div className="product-add-action">
            <ul>
              <li>
                <button
                  className="whislistBtn"
                  data-tippy="Add to wishlist"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  <i className="pe-7s-like"></i>
                </button>
              </li>
              <li className="quuickview-btn" data-bs-toggle="modal" data-bs-target="#quickModal">
                <Link
                  to="#"
                  data-tippy="Quickview"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="pe-7s-look"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="cart.html"
                  data-tippy="Add to cart"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                >
                  <i className="pe-7s-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-content">
          <Link className="product-name" to="shop.html">
            Bloody Cranesbill
          </Link>
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
  );
};
