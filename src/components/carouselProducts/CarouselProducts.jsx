import Carousel from "react-multi-carousel";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "react-multi-carousel/lib/styles.css";
import "../newProducts/style.css";
import { useState, useEffect } from "react";
import { Products } from "../products/Products";

export const CarouselProducts = () => {
  const MySwal = withReactContent(Swal);

  const [newProducts, setNewProducts] = useState([]);
  const quantityDisplayed = 6; // cantidad de productos a mostrar

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_DB_HOST}/products`,
      });
      if (result.data.length <= quantityDisplayed) {
        setNewProducts(result.data);
      }
      setNewProducts(result.data.splice(0, quantityDisplayed));
    };
    getProducts();
  }, []);

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
      {newProducts.map((product) => {
        return (
          <div className="swiper-slide product-item" key={product.id}>
            <div className="product-img">
              <Link to={""}>
                <img
                  className="primary-img"
                  src={product.image[3].imageDetailOne}
                  alt="Product Images"
                />
                <img
                  className="secondary-img"
                  src={product.image[4].imageDetailTwo}
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
                  <li
                    className="quuickview-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#quickModal"
                  >
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
                {product.productName}
              </Link>
              <div className="price-box pb-1">
                <span className="new-price">${product.price}</span>
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
        );
      })}
    </Carousel>
  );
};
