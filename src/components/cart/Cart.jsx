import "./css/style.css";
export const Cart = () => {
  return (
    <>
      <main className="main-content">
        <div className="breadcrumb-area breadcrumb-height">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12">
                <div className="breadcrumb-item">
                  <h2 className="breadcrumb-heading">Cart Page</h2>
                  <ul>
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>Cart Page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-area section-space-y-axis-100">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <form action="javascript:void(0)">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product_remove">remove</th>
                          <th className="product-thumbnail">images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Unit Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-subtotal">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="product_remove">
                            <a href="#">
                              <i
                                className="pe-7s-close"
                                data-tippy="Remove"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              ></i>
                            </a>
                          </td>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img src="../../small-size/1-1-112x124.webp" alt="Cart Thumbnail" />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">American Marigold</a>
                          </td>
                          <td className="product-price">
                            <span className="amount">$23.45</span>
                          </td>
                          <td className="quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                // value="1"
                                type="text"
                              />
                              <div className="dec qtybutton">
                                <i className="fa fa-minus"></i>
                              </div>
                              <div className="inc qtybutton">
                                <i className="fa fa-plus"></i>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">$23.45</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="product_remove">
                            <a href="#">
                              <i
                                className="pe-7s-close"
                                data-tippy="Remove"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              ></i>
                            </a>
                          </td>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img src="../../small-size/1-2-112x124.webp" alt="Cart Thumbnail" />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Black Eyed Susan</a>
                          </td>
                          <td className="product-price">
                            <span className="amount">$25.45</span>
                          </td>
                          <td className="quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                // value="1"
                                type="text"
                              />
                              <div className="dec qtybutton">
                                <i className="fa fa-minus"></i>
                              </div>
                              <div className="inc qtybutton">
                                <i className="fa fa-plus"></i>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">$25.45</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="product_remove">
                            <a href="#">
                              <i
                                className="pe-7s-close"
                                data-tippy="Remove"
                                data-tippy-inertia="true"
                                data-tippy-animation="shift-away"
                                data-tippy-delay="50"
                                data-tippy-arrow="true"
                                data-tippy-theme="sharpborder"
                              ></i>
                            </a>
                          </td>
                          <td className="product-thumbnail">
                            <a href="#">
                              <img src="../../small-size/1-3-112x124.webp" alt="Cart Thumbnail" />
                            </a>
                          </td>
                          <td className="product-name">
                            <a href="#">Bleeding Heart</a>
                          </td>
                          <td className="product-price">
                            <span className="amount">$30.45</span>
                          </td>
                          <td className="quantity">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                // value="1"
                                type="text"
                              />
                              <div className="dec qtybutton">
                                <i className="fa fa-minus"></i>
                              </div>
                              <div className="inc qtybutton">
                                <i className="fa fa-plus"></i>
                              </div>
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">$30.45</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="coupon-all">
                        <div className="coupon">
                          <input
                            id="coupon_code"
                            className="input-text"
                            name="coupon_code"
                            // value=""
                            placeholder="Coupon code"
                            type="text"
                          />
                          <input
                            className="button mt-xxs-30"
                            name="apply_coupon"
                            // value="Apply coupon"
                            type="submit"
                          />
                        </div>
                        <div className="coupon2">
                          <input
                            className="button"
                            name="update_cart"
                            // value="Update cart"
                            type="submit"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 ml-auto">
                      <div className="cart-page-total">
                        <h2>Cart totals</h2>
                        <ul>
                          <li>
                            Subtotal <span>$79.35</span>
                          </li>
                          <li>
                            Total <span>$79.35</span>
                          </li>
                        </ul>
                        <a href="#">Proceed to checkout</a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
