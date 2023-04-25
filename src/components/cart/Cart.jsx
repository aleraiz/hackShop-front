import "./css/style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const priceFormat = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
  });

  return (
    <>
      <main className="main-content">
        <div className="breadcrumb-area breadcrumb-height bg-height">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12">
                <div className="breadcrumb-item">
                  <h2 className="breadcrumb-heading">Cart Page</h2>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
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
                            <th className="product_remove"></th>
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
                              return <CartItem product={product} />;
                            })}
                          </>
                        </tbody>
                      </table>
                    </div>
                    <div className="row justify-content-between">
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
                        </div>
                      </div>
                      <div className="col-md-5 ml-auto proceed-checkout">
                        <Link to="/checkout">Proceed to checkout</Link>
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
