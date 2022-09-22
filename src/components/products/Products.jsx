import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarFilter } from "./NavbarFilter";
import { addProductCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./style.css";

const MySwal = withReactContent(Swal);

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const allProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/products`,
      });
      setProducts(response.data);
    };
    const listProducts = async () => {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/products/${category}`,
      });
      setProducts(response.data);
    };

    if (category === 0) {
      allProducts();
    } else {
      listProducts();
    }
  }, [category]);

  function handleAddCart(product) {
    dispatch(addProductCart({ productDetail: product, quantityProduct: 1 }));
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

  // function onChangeInput(e) {
  //   setCategory(e.target.value);
  // }

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
                        <Link to="/">Home</Link>
                      </li>
                      <li>Shop</li>
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
                  <div className="tab-content">
                    <ul className="nav product-tab-nav tab-style-1 pt-0" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button
                          className="active ourProductsBtn"
                          id="featured-tab"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-controls="featured"
                          aria-selected="true"
                          onClick={() => {
                            setCategory(0);
                          }}
                        >
                          All
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="active ourProductsBtn"
                          id="featured-tab"
                          data-bs-toggle="tab"
                          role="tab"
                          aria-controls="featured"
                          aria-selected="true"
                          onClick={() => {
                            setCategory(1);
                          }}
                        >
                          Indoor
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
                            setCategory(2);
                          }}
                        >
                          Outdoor
                        </button>
                      </li>
                    </ul>
                    <div
                      className="tab-pane fade show active"
                      id="grid-view"
                      role="tabpanel"
                      aria-labelledby="grid-view-tab"
                    >
                      <div className="product-grid-view row g-y-20">
                        {products.map((product, index) => {
                          return (
                            <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                              <div className="product-item">
                                <div className="product-img">
                                  <Link to={`/product/${product.slug}`}>
                                    <img
                                      className="primary-img"
                                      src={product.image[3]}
                                      alt="Product Images"
                                    />
                                    <img
                                      className="secondary-img secondary-img-bg"
                                      src={product.image[4]}
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
                                          to={`/product/${product.slug}`}
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
                                            handleAddCart(product);
                                          }}
                                        >
                                          <i className="pe-7s-cart"></i>
                                        </button>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="product-content">
                                  <Link className="product-name" to={`/product/${product.slug}`}>
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
                  <div className="pagination-area">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item active">
                          <Link className="page-link" to="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" to="#" aria-label="Next">
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
