import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavbarFilter } from "./FiltersProducts";

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const listProducts = async () => {
      const response = await axios({
        method: "get",
        url: `http://localhost:8000/products`,
      });
      setProducts(response.data);
    };
    listProducts();
  }, []);
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
                    <h2 className="breadcrumb-heading">Shop</h2>
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Shop Grid Fullwidth</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shop-area section-space-y-axis-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <NavbarFilter />
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="grid-view"
                      role="tabpanel"
                      aria-labelledby="grid-view-tab"
                    >
                      <div className="product-grid-view row g-y-20">
                        {products.map((product, index) => {
                          return (
                            <div className="col-lg-3 col-md-4 col-sm-6">
                              <div className="product-item">
                                <div className="product-img">
                                  <a href="single-product-variable.html">
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
                                  <a className="product-name" href="single-product-variable.html">
                                    {product.productName}
                                  </a>
                                  <div className="price-box pb-1">
                                    <span className="new-price">${product.price}</span>
                                  </div>
                                  <div className="rating-box">
                                    <ul>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
                                      </li>
                                      <li>
                                        <i class="fa fa-star"></i>
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
                  <div class="pagination-area">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination justify-content-center">
                        <li class="page-item active">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next">
                            &raquo;
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
