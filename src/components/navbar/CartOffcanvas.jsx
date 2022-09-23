import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { deleteProductCart } from "../../redux/slices/cartSlice";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";

export const CartOffCanvas = ({ setOpenOffcanvas }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  const handleClose = () => setOpenOffcanvas(false);

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
    <Offcanvas
      show={true}
      onHide={handleClose}
      placement="end"
      id="miniCart"
      scroll={true}
      backdrop={true}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      {cart.length !== 0 ? (
        <Offcanvas.Body>
          <div className="minicart-content">
            <ul className="minicart-list">
              {cart.map((product) => {
                return (
                  <>
                    <li className="minicart-product minicart-flex" key={product.id}>
                      <Link
                        to={`/product/${product.slug}`}
                        className="product-item_img imgMinicart"
                      >
                        <img
                          className="img-full img-cartOffCanvas"
                          src={product.image}
                          alt="Product Image"
                          onClick={() => handleClose()}
                        />
                      </Link>
                      <div className="nameAndCloseBtn">
                        <div className="product-item_content itemContentMinicart">
                          <Link
                            className="product-item_title"
                            to={`/product/${product.slug}`}
                            onClick={() => handleClose()}
                          >
                            {product.productName}
                          </Link>
                          {product.quantity <= product.stock ? (
                            <span className="product-item_quantity">
                              {product.quantity} x${product.price}
                            </span>
                          ) : (
                            <span className="product-item_quantity">
                              {product.stock} x${product.price}
                              <p>
                                <strong>Stock disponible : {product.stock} ud</strong>
                              </p>
                            </span>
                          )}
                        </div>
                        <button
                          className="product-item_remove btnRemove"
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
                      </div>
                    </li>
                    <hr className="hrCartOffCanvas" />
                  </>
                );
              })}
            </ul>
          </div>
          <div className="minicart-item_total">
            <span className="subtotalMinicart">Subtotal</span>
            <span className="ammount">
              {priceFormat.format(
                cart.reduce((total, product) => total + product.price * product.quantity, 0),
              )}
            </span>
          </div>
          <div className="group-btn_wrap d-grid gap-2">
            <Link
              to="/cart"
              className="btn btn-dark"
              onClick={() => {
                handleClose();
              }}
            >
              View Cart
            </Link>
            <Link to="/checkout" className="btn btn-dark" onClick={() => handleClose()}>
              Checkout
            </Link>
          </div>
        </Offcanvas.Body>
      ) : (
        <div className="cartEmptyMsj">
          <div className="iconCartEmpty">
            <MdOutlineRemoveShoppingCart className="svgCartEmpty" />
          </div>
          <div style={{ textAlign: "center" }}>
            <h4>Your cart is empty</h4>
          </div>
          <div>
            <p className="paragraphEmptyCart">Add something to make us happy :)</p>
          </div>
        </div>
      )}
    </Offcanvas>
  );
};
