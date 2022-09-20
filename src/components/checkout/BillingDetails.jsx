import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/userSlice";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { emptyCart } from "../../redux/slices/cartSlice";
import axios from "axios";

export const BillingDetails = () => {
  const cart = useSelector((state) => state.cart.cart);
  const user = useSelector((state) => state.user.user);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const navigate = useNavigate();
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

  // async function registerClient() {
  //   try {
  //     const response = await axios({
  //       method: "post",
  //       url: `http://localhost:8000/register`,
  //       data: {
  //         firstname,
  //         lastname,
  //         email,
  //         password,
  //         address,
  //         phoneNumber,
  //       },
  //     });
  //     dispatch(
  //       registerUser({
  //         id: response.data.client.id,
  //         token: response.data.token,
  //         firstname: response.data.client.firstname,
  //       }),
  //     );
  //   } catch (error) {
  //     setUserError(error.response.data.error);
  //   }
  // }

  async function orderSend(cart) {
    try {
      await axios({
        method: "post",
        url: `http://localhost:8000/order`,
        headers: { Authorization: `Bearer ${user.token}` },
        data: {
          productList: cart,
          address,
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
      {/* <div className="col-lg-6 col-12">
        <form action="javascript:void(0)">
          <div className="checkbox-form">
            <h3>Billing Details</h3>
            <div className="row">
              <div className="col-md-12">
                <div className="country-select clearfix">
                  <label>
                    Country <span className="required">*</span>
                  </label>
                  <select className="myniceselect nice-select wide">
                    <option data-display="uy">Uruguay</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    placeholder=""
                    type="text"
                    name="firstname"
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    placeholder=""
                    type="text"
                    name="lastname"
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12"></div>
              <div className="col-md-12">
                <div className="checkout-form-list">
                  <label>
                    Address <span className="required">*</span>
                  </label>
                  <input
                    placeholder="Street address"
                    type="text"
                    name="address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>
                    Postcode / Zip <span className="required">*</span>
                  </label>
                  <input placeholder="" type="text" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="checkout-form-list">
                  <label>
                    Phone <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="checkout-form-list">
                  <label>
                    Email <span className="required">*</span>
                  </label>
                  <input
                    placeholder=""
                    type="email"
                    name="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onFocus={() => {
                      setUserError();
                    }}
                  />
                </div>
                {userError && (
                  <div className="paragraphError" style={{ marginBottom: "30px" }}>
                    <AiOutlineExclamationCircle />
                    <p>{userError}</p>
                  </div>
                )}
              </div>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Create an account?</Accordion.Header>
                  <Accordion.Body>
                    <div id="cbox-info" className="checkout-form-list">
                      <p>
                        Create an account by entering the information below. If you are a returning
                        customer please login at the top of the page.
                      </p>
                      <label>
                        Account password <span className="required">*</span>
                      </label>
                      <input
                        placeholder="password"
                        type="password"
                        name="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <div className="col-md-12">
                <div id="cbox-info" className="checkout-form-list create-account">
                  <p>
                    Create an account by entering the information below. If you are a returning
                    customer please login at the top of the page.
                  </p>
                  <label>
                    Account password <span className="required">*</span>
                  </label>
                  <input placeholder="password" type="password" />
                </div>
              </div>
            </div>
            <div className="different-address">
              <div className="order-notes">
                <div className="checkout-form-list checkout-form-list-2">
                  <label>Order Notes</label>
                  <textarea
                    id="checkout-mess"
                    cols="30"
                    rows="10"
                    placeholder="Notes about your order, e.g. special notes for delivery."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div> */}
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
