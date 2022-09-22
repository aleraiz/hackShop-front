import "./css/style.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../../redux/slices/cartSlice";
import { deleteProductCart } from "../../redux/slices/cartSlice";
import { useState, useEffect } from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [quantityProduct, setQuantityProduct] = useState(1);
  const [removeProduct, setRemoveProduct] = useState(quantityProduct);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


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
        <div className="breadcrumb-area breadcrumb-height bg-height">
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
                                      <RiDeleteBin6Line className="removeItem" />
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
