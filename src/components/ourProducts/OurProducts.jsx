import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const OurProducts = () => {
  const [ourProducts, setOurProducts] = useState([]);

  useEffect(() => {
    const listProducts = async () => {
      const response = await axios.get(`http://localhost:8000/products`);
      console.log(response.data);
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
                              {product.productName}
                            </a>
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
