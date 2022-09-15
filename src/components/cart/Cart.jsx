import "./css/style.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../redux/slices/cartSlice";
import { deleteProductCart } from "../../redux/slices/cartSlice";
import { useState } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [removeProduct, setRemoveProduct] = useState(quantityProduct);

  function handlerIncrementProduct(productId) {
    setQuantityProduct(quantityProduct + 1);
    dispatch(incrementQuantity({ productId }));
  }

  function handlerDecrementProduct(productId) {
    setRemoveProduct(quantityProduct - 1);
    dispatch(decrementQuantity({ productId }));
  }

  function handlerDeleteProductFromCart(productId) {
    dispatch(deleteProductCart(productId));
  }

  const priceFormat = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
  });

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
                      <Link to="index.html">Home</Link>
                    </li>
                    <li>Cart Page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {cart.length !== 0 ? (
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
                          <>
                            {cart.map((product) => {
                              return (
                                <tr key={product.id}>
                                  <td className="product_remove">
                                    <button
                                      className="product-item_remove btnRemoveCartPage"
                                      type="button"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        handlerDeleteProductFromCart(product.id);
                                      }}
                                    >
                                      <i
                                        className="pe-7s-close"
                                        data-tippy="Remove"
                                        data-tippy-inertia="true"
                                        data-tippy-animation="shift-away"
                                        data-tippy-delay="50"
                                        data-tippy-arrow="true"
                                        data-tippy-theme="sharpborder"
                                      ></i>
                                    </button>
                                  </td>
                                  <td className="product-thumbnail td-align-center">
                                    <div className="img-container">
                                      <Link to="#">
                                        <img src={product.image} alt="Cart Thumbnail" />
                                      </Link>
                                    </div>
                                  </td>
                                  <td className="product-name ">
                                    <Link className="product-name-link" to="#">
                                      {product.productName}
                                    </Link>
                                  </td>
                                  <td className="product-price">
                                    <span className="amount">${product.price}</span>
                                  </td>
                                  <td id="quantityTableCart">
                                    <div className="containerBtnMoreAndRemove">
                                      <div className="cart-plus-minus">
                                        <button
                                          className="cart-plus-minus-box"
                                          type="submit"
                                          id="quantityDecrement"
                                          onClick={() => {
                                            handlerDecrementProduct(product.id);
                                          }}
                                        >
                                          <div className="dec qtybutton">
                                            <i className="fa fa-minus"></i>
                                          </div>
                                        </button>
                                      </div>
                                      <span className="quantityNumber"> {product.quantity}</span>
                                      <div className="cart-plus-minus">
                                        <button
                                          className="cart-plus-minus-box"
                                          type="submit"
                                          id="quantityIncrement"
                                          onClick={() => {
                                            handlerIncrementProduct(product.id);
                                          }}
                                        >
                                          <div className="inc qtybutton">
                                            <i className="fa fa-plus"></i>
                                          </div>
                                        </button>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="product-subtotal">
                                    <span className="amount">
                                      {priceFormat.format(product.price * product.quantity)}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })}
                          </>
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
                              value="Apply coupon"
                              type="submit"
                            />
                          </div>
                          <div className="coupon2">
                            <input
                              className="button"
                              name="update_cart"
                              value="Update cart"
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
                              Subtotal:
                              <span>
                                {priceFormat.format(
                                  cart.reduce(
                                    (total, product) => total + product.price * product.quantity,
                                    0,
                                  ),
                                )}
                              </span>
                            </li>
                            <li>
                              Total
                              <span>
                                {priceFormat.format(
                                  cart.reduce(
                                    (total, product) => total + product.price * product.quantity,
                                    0,
                                  ),
                                )}
                              </span>
                            </li>
                          </ul>
                          <Link to="/checkout">Proceed to checkout</Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="cartEmptyMsj" id="emptyCartDiv">
            <div className="iconCartEmpty">
              <MdOutlineRemoveShoppingCart className="svgCartEmpty" />
            </div>
            <div>
              <h4>Your cart is empty</h4>
            </div>
            <div>
              <p className="paragraphEmptyCart">Add something to make us happy :)</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
