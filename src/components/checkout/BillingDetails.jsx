import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { emptyCart } from "../../redux/slices/cartSlice";
import axios from "axios";

export const BillingDetails = () => {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  console.log("soy el user", user);
  const [userError, setUserError] = useState("");
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();

  const priceFormat = new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
    roundingIncrement: 5,
  });

  function handlerMsgErr() {
    MySwal.fire({
      title: "success!",
      text: "Your purchase was successful",
      icon: "success",
      confirmButtonText: "OK",
      confirmButtonColor: "#abd373",
    });
  }

  async function orderSend(cart) {
    try {
      await axios({
        method: "patch",
        url: `http://localhost:8000/order`,
        headers: { Authorization: `Bearer ${user.token}` },
        data: {
          productList: cart,
          address: user.address,
        },
      });
      handlerMsgErr();
      dispatch(emptyCart());
    } catch (error) {
      setUserError(error.response.data.error);
    }
  }

  return (
    <div className="row" style={{ justifyContent: "center" }}>
      <div className="col-lg-6 col-12">
        <div className="your-order">
          <h3>Your order</h3>
          <div className="your-order-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th className="cart-product-name">Product</th>
                  <th className="cart-product-total">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr className="cart_item">
                      <td className="cart-product-name">
                        {product.productName}
                        <strong className="product-quantity">× {product.quantity}</strong>
                      </td>
                      <td className="cart-product-total">
                        {priceFormat.format(product.price * product.quantity)}
                        <span className="amount"></span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="cart-subtotal">
                  <th>Cart Subtotal</th>
                  <td>
                    <span className="amount">
                      {priceFormat.format(
                        cart.reduce(
                          (total, product) => total + product.price * product.quantity,
                          0,
                        ),
                      )}
                    </span>
                  </td>
                </tr>
                <tr className="order-total">
                  <th>Order Total</th>
                  <td>
                    <strong>
                      <span className="amount">
                        {priceFormat.format(
                          cart.reduce(
                            (total, product) => total + product.price * product.quantity,
                            0,
                          ),
                        )}
                      </span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="payment-method">
            <div className="payment-accordion">
              <div id="accordion">
                <div className="card">
                  <div className="card-header" id="payment-1">
                    <h5 className="panel-title">
                      <span
                        className="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                      >
                        Direct Bank Transfer.
                      </span>
                    </h5>
                  </div>
                  <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
                    <div className="card-body">
                      <p>
                        Make your payment directly into our bank account. Please use your Order ID
                        as the payment reference. Your order won’t be shipped until the funds have
                        cleared in our account.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="payment-2">
                    <h5 className="panel-title">
                      <span
                        className="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                      >
                        Cheque Payment
                      </span>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                      <p>
                        Make your payment directly into our bank account. Please use your Order ID
                        as the payment reference. Your order won’t be shipped until the funds have
                        cleared in our account.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="payment-3">
                    <h5 className="panel-title">
                      <span
                        className="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                      >
                        PayPal
                      </span>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                      <p>
                        Make your payment directly into our bank account. Please use your Order ID
                        as the payment reference. Your order won’t be shipped until the funds have
                        cleared in our account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-button-payment">
                <button
                  value="Place order"
                  id="placeOrderBtn"
                  type="submit"
                  onClick={() => {
                    // if (!user) {
                    //   orderSend(cart);
                    //   registerClient();
                    // }
                    orderSend(cart);
                  }}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
