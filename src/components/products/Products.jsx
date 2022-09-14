import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavbarFilter } from "./FiltersProducts";
import "./style.css";
export const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(2);

  useEffect(() => {
    const listProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/products/${category}`,
      });
      setProducts(response.data);
    };
    listProducts();
  }, [category]);

  function onChangeInput(e) {
    setCategory(e.target.value);
  }

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
                        <Link to="index.html">Home</Link>
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
                    <form onSubmit={(e) => e.preventDefault()}>
                      <label>
                        <input
                          type="radio"
                          id="cbox1"
                          value={1}
                          onChange={onChangeInput}
                          name="category"
                        />{" "}
                        Interior
                      </label>
                      <label>
                        <input
                          type="radio"
                          id="cbox1"
                          value={2}
                          onChange={onChangeInput}
                          name="category"
                        />{" "}
                        Exterior
                      </label>
                    </form>
                    <div
                      className="tab-pane fade show active"
                      id="grid-view"
                      role="tabpanel"
                      aria-labelledby="grid-view-tab"
                    >
                      <div className="product-grid-view row g-y-20">
                        {/* {productsFilter.length !== 0 ? (
                          <>
                            {productsFilter[0].categoryId === 1 ? (
                              <h2 className="titleCategory">Interior</h2>
                            ) : (
                              <h2 className="titleCategory">Exterior</h2>
                            )} */}
                        {products.map((product, index) => {
                          return (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                              <div className="product-item">
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
                                        <Link
                                          to="wishlist.html"
                                          data-tippy="Add to wishlist"
                                          data-tippy-inertia="true"
                                          data-tippy-animation="shift-away"
                                          data-tippy-delay="50"
                                          data-tippy-arrow="true"
                                          data-tippy-theme="sharpborder"
                                        >
                                          <i className="pe-7s-like"></i>
                                        </Link>
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
                                  <Link className="product-name" to="single-product-variable.html">
                                    {product.productName}
                                  </Link>
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
                          <Link class="page-link" to="#">
                            1
                          </Link>
                        </li>
                        <li class="page-item">
                          <Link class="page-link" to="#">
                            2
                          </Link>
                        </li>
                        <li class="page-item">
                          <Link class="page-link" to="#">
                            3
                          </Link>
                        </li>
                        <li class="page-item">
                          <Link class="page-link" to="#" aria-label="Next">
                            &raquo;
                          </Link>
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
