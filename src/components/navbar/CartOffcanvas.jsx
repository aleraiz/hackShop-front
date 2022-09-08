import { Link } from "react-router-dom";
import React, { useState } from "react";

export const CartModal = () => {
  return (
    <div className="offcanvas-minicart_wrapper" id="miniCart">
      <div className="offcanvas-body">
        <div className="minicart-content">
          <div className="minicart-heading">
            <h4 className="mb-0">Shopping Cart</h4>
            <Link to="#" className="button-close">
              <i
                className="pe-7s-close"
                data-tippy="Close"
                data-tippy-inertia="true"
                data-tippy-animation="shift-away"
                data-tippy-delay="50"
                data-tippy-arrow="true"
                data-tippy-theme="sharpborder"
              ></i>
            </Link>
          </div>
          <ul className="minicart-list">
            <li className="minicart-product">
              <Link className="product-item_remove" to="#">
                <i
                  className="pe-7s-close"
                  data-tippy="Remove"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                ></i>
              </Link>
              <Link
                to="single-product-variable.html"
                className="product-item_img"
              >
                <img
                  className="img-full"
                  src="../assets/images/product/large-size/1-1-570x633.jpg"
                  alt="Product Image"
                />
              </Link>
              <div className="product-item_content">
                <Link
                  className="product-item_title"
                  to="single-product-variable.html"
                >
                  American Marigold
                </Link>
                <span className="product-item_quantity">1 x $23.45</span>
              </div>
            </li>
            <li className="minicart-product">
              <Link className="product-item_remove" to="#">
                <i
                  className="pe-7s-close"
                  data-tippy="Remove"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                ></i>
              </Link>
              <Link
                to="single-product-variable.html"
                className="product-item_img"
              >
                <img
                  className="img-full"
                  src="assets/images/product/small-size/2-2-70x78.png"
                  alt="Product Image"
                />
              </Link>
              <div className="product-item_content">
                <Link
                  className="product-item_title"
                  to="single-product-variable.html"
                >
                  Black Eyed Susan
                </Link>
                <span className="product-item_quantity">1 x $25.45</span>
              </div>
            </li>
            <li className="minicart-product">
              <Link className="product-item_remove" to="#">
                <i
                  className="pe-7s-close"
                  data-tippy="Remove"
                  data-tippy-inertia="true"
                  data-tippy-animation="shift-away"
                  data-tippy-delay="50"
                  data-tippy-arrow="true"
                  data-tippy-theme="sharpborder"
                ></i>
              </Link>
              <Link
                to="single-product-variable.html"
                className="product-item_img"
              >
                <img
                  className="img-full"
                  src="assets/images/product/small-size/2-3-70x78.png"
                  alt="Product Image"
                />
              </Link>
              <div className="product-item_content">
                <Link
                  className="product-item_title"
                  to="single-product-variable.html"
                >
                  Bleeding Heart
                </Link>
                <span className="product-item_quantity">1 x $30.45</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="minicart-item_total">
          <span>Subtotal</span>
          <span className="ammount">$79.35</span>
        </div>
        <div className="group-btn_wrap d-grid gap-2">
          <Link to="cart.html" className="btn btn-dark">
            View Cart
          </Link>
          <Link to="checkout.html" className="btn btn-dark">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
