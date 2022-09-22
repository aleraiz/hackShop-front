import Carousel from "react-multi-carousel";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { addProductCart } from "../../redux/slices/cartSlice";
import "react-multi-carousel/lib/styles.css";
import "../newProducts/style.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
export const CarouselProducts = (setRefresSlug) => {
  const [productsCarousel, setProductsCarousel] = useState([]);
  const MySwal = withReactContent(Swal);

  const dispatch = useDispatch();

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

  useEffect(() => {
    const listProducts = async () => {
      const quantityDisplayed = 8;
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/products`,
      });
      if (response.data <= quantityDisplayed) {
        setProductsCarousel(response.data);
      }
      setProductsCarousel(response.data.slice(0, quantityDisplayed));
    };
    listProducts();
  }, []);

  function handleAddCart(element) {
    dispatch(addProductCart({ productDetail: element, quantityProduct: 1 }));
    handleMsgAdded();
  }

  function handleMsgAdded() {
    MySwal.fire({
      title: "Added!",
      icon: "success",
      confirmButtonColor: "#505050",
    });
  }

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
      {productsCarousel.map((element, index) => {
        return (
          <div className="swiper-slide product-item" key={index}>
            <div className="product-img">
              <Link to={`/product/${element.slug}`} onClick={() => setRefresSlug(true)}>
                <img className="primary-img" src={element.image[3]} alt="Product Images" />
                <img
                  className="secondary-img secondary-img-bg"
                  src={element.image[4]}
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
                      to={`/product/${element.slug}`}
                      onClick={() => setRefresSlug(true)}
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
                    <button
                      data-tippy="Add to cart"
                      data-tippy-inertia="true"
                      data-tippy-animation="shift-away"
                      data-tippy-delay="50"
                      data-tippy-arrow="true"
                      data-tippy-theme="sharpborder"
                      className="whislistBtn"
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddCart(element);
                      }}
                    >
                      <i className="pe-7s-cart"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-content">
              <Link className="product-name" to={`/product/${element.slug}`}>
                {element.productName}
              </Link>
              <div className="price-box pb-1">
                <span className="new-price">${element.price}</span>
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
