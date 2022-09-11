import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavbarFilter } from "./FiltersProducts";
export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const listProducts = async () => {
      const response = await axios.get(`http://localhost:8000/products`);
      console.log(response.data);
      setProducts(response.data);
    };
    listProducts();
  }, []);
  return (
    <>
      <div class="main-wrapper">
        <main class="main-content">
          <div
            class="breadcrumb-area breadcrumb-height"
            data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg"
          >
            <div class="container h-100">
              <div class="row h-100">
                <div class="col-lg-12">
                  <div class="breadcrumb-item">
                    <h2 class="breadcrumb-heading">Shop</h2>
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
          <div class="shop-area section-space-y-axis-100">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <NavbarFilter />
                  <div class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="grid-view"
                      role="tabpanel"
                      aria-labelledby="grid-view-tab"
                    >
                      <div class="product-grid-view row g-y-20">
                        {products.map((product, index) => {
                          return (
                            <div class="col-lg-3 col-md-4 col-sm-6">
                              <div class="product-item">
                                <div class="product-img">
                                  <a href="single-product-variable.html">
                                    <img
                                      class="primary-img"
                                      src={product.image[3].imageDetailOne}
                                      alt="Product Images"
                                    />
                                    <img
                                      class="secondary-img"
                                      src={product.image[4].imageDetailTwo}
                                      alt="Product Images"
                                    />
                                  </a>
                                  <div class="product-add-action">
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
                                          <i class="pe-7s-like"></i>
                                        </a>
                                      </li>
                                      <li
                                        class="quuickview-btn"
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
                                          <i class="pe-7s-look"></i>
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
                                          <i class="pe-7s-cart"></i>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="product-content">
                                  <a class="product-name" href="single-product-variable.html">
                                    {product.productName}
                                  </a>
                                  <div class="price-box pb-1">
                                    <span class="new-price">${product.price}</span>
                                  </div>
                                  <div class="rating-box">
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
