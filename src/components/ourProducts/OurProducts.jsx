import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
import "./styles.css";

export const OurProducts = () => {
  const [ourProducts, setOurProducts] = useState([]);
  const MySwal = withReactContent(Swal);

  function handlerMsgErr() {
    MySwal.fire({
      title: "Warning!",
      text: "This functionality escapes from the scope of the project.",
      icon: "warning",
      confirmButtonText: "Cancel",
      confirmButtonColor: "#f8bb86",
    });
  }

  useEffect(() => {
    const listProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/products`,
      });
      setOurProducts(response.data.slice(0, 8));
    };
    listProducts();
  }, []);

  return (
    <div className="product-area section-space-top-100">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title mb-0">Our Products</h2>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav product-tab-nav tab-style-1" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="active ourProductsBtn"
                  id="featured-tab"
                  data-bs-toggle="tab"
                  role="tab"
                  aria-controls="featured"
                  aria-selected="true"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  Featured
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  id="bestseller-tab"
                  className="active ourProductsBtn"
                  data-bs-toggle="tab"
                  to="#bestseller"
                  role="tab"
                  aria-controls="bestseller"
                  aria-selected="false"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  Bestseller
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  id="latest-tab"
                  className="active ourProductsBtn"
                  data-bs-toggle="tab"
                  to="#latest"
                  role="tab"
                  aria-controls="latest"
                  aria-selected="false"
                  onClick={() => {
                    handlerMsgErr();
                  }}
                >
                  Latest
                </button>
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
                  {ourProducts.map((product, index) => {
                    return (
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <div className="product-item" key={index}>
                          <div className="product-img">
                            <Link to={`/product/${product.id}`}>
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
                                    data-tippy="Add to wishlist"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                    className="whislistBtn"
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
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
