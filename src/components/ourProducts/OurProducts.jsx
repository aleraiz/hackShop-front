import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { addProductCart } from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export const OurProducts = () => {
  const [ourProducts, setOurProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

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

  function handleAddCart(product) {
    console.log(product);
    dispatch(addProductCart(product));
  }

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
                <Link
                  className="active"
                  id="featured-tab"
                  data-bs-toggle="tab"
                  to="#featured"
                  role="tab"
                  aria-controls="featured"
                  aria-selected="true"
                >
                  Featured
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  id="bestseller-tab"
                  data-bs-toggle="tab"
                  to="#bestseller"
                  role="tab"
                  aria-controls="bestseller"
                  aria-selected="false"
                >
                  Bestseller
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  id="latest-tab"
                  data-bs-toggle="tab"
                  to="#latest"
                  role="tab"
                  aria-controls="latest"
                  aria-selected="false"
                >
                  Latest
                </Link>
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
                                    to=""
                                    data-tippy="Add to cart"
                                    data-tippy-inertia="true"
                                    data-tippy-animation="shift-away"
                                    data-tippy-delay="50"
                                    data-tippy-arrow="true"
                                    data-tippy-theme="sharpborder"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      handleAddCart(product);
                                    }}
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
