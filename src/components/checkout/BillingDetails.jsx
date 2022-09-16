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
      const response = await axios({
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
    <div class="row" style={{ justifyContent: "center" }}>
      {/* <div class="col-lg-6 col-12">
        <form action="javascript:void(0)">
          <div class="checkbox-form">
            <h3>Billing Details</h3>
            <div class="row">
              <div class="col-md-12">
                <div class="country-select clearfix">
                  <label>
                    Country <span class="required">*</span>
                  </label>
                  <select class="myniceselect nice-select wide">
                    <option data-display="uy">Uruguay</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label>
                    First Name <span class="required">*</span>
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
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label>
                    Last Name <span class="required">*</span>
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
              <div class="col-md-12"></div>
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <label>
                    Address <span class="required">*</span>
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
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label>
                    Postcode / Zip <span class="required">*</span>
                  </label>
                  <input placeholder="" type="text" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="checkout-form-list">
                  <label>
                    Phone <span class="required">*</span>
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
              <div class="col-md-12">
                <div class="checkout-form-list">
                  <label>
                    Email <span class="required">*</span>
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
                    <div id="cbox-info" class="checkout-form-list">
                      <p>
                        Create an account by entering the information below. If you are a returning
                        customer please login at the top of the page.
                      </p>
                      <label>
                        Account password <span class="required">*</span>
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
              <div class="col-md-12">
                <div id="cbox-info" class="checkout-form-list create-account">
                  <p>
                    Create an account by entering the information below. If you are a returning
                    customer please login at the top of the page.
                  </p>
                  <label>
                    Account password <span class="required">*</span>
                  </label>
                  <input placeholder="password" type="password" />
                </div>
              </div>
            </div>
            <div class="different-address">
              <div class="order-notes">
                <div class="checkout-form-list checkout-form-list-2">
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
      <div class="col-lg-6 col-12">
        <div class="your-order">
          <h3>Your order</h3>
          <div class="your-order-table table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th class="cart-product-name">Product</th>
                  <th class="cart-product-total">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr class="cart_item">
                      <td class="cart-product-name">
                        {product.productName}
                        <strong class="product-quantity">× {product.quantity}</strong>
                      </td>
                      <td class="cart-product-total">
                        {priceFormat.format(product.price * product.quantity)}
                        <span class="amount"></span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr class="cart-subtotal">
                  <th>Cart Subtotal</th>
                  <td>
                    <span class="amount">
                      {priceFormat.format(
                        cart.reduce(
                          (total, product) => total + product.price * product.quantity,
                          0,
                        ),
                      )}
                    </span>
                  </td>
                </tr>
                <tr class="order-total">
                  <th>Order Total</th>
                  <td>
                    <strong>
                      <span class="amount">
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
          <div class="payment-method">
            <div class="payment-accordion">
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="payment-1">
                    <h5 class="panel-title">
                      <span
                        class="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                      >
                        Direct Bank Transfer.
                      </span>
                    </h5>
                  </div>
                  <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                    <div class="card-body">
                      <p>
                        Make your payment directly into our bank account. Please use your Order ID
                        as the payment reference. Your order won’t be shipped until the funds have
                        cleared in our account.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="payment-2">
                    <h5 class="panel-title">
                      <span
                        class="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                      >
                        Cheque Payment
                      </span>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                      <p>
                        Make your payment directly into our bank account. Please use your Order ID
                        as the payment reference. Your order won’t be shipped until the funds have
                        cleared in our account.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="payment-3">
                    <h5 class="panel-title">
                      <span
                        class="collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                      >
                        PayPal
                      </span>
                    </h5>
                  </div>
                  <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                    <div class="card-body">
                      <p>
                        Make your payment directly into our bank account. Please use your Order ID
                        as the payment reference. Your order won’t be shipped until the funds have
                        cleared in our account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-button-payment">
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
