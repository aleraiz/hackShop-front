import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/slices/userSlice";
import { emptyCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import "./styles.css";

export const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const [userError, setUserError] = useState("");
  const [userErrorPassword, setUserErrorPassword] = useState("");
  const [orders, setOrders] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [address, SetAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userData, setUserData] = useState("");

  async function handlerLogout() {
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_DB_HOST}/logout`,
        headers: { Authorization: `Bearer ${user.token}` },
      });
      dispatch(logoutUser());
      dispatch(emptyCart());
      navigate("/");
    } catch (error) {
      setUserError(error.response.data.error);
    }
  }

  async function handlerOrders() {
    try {
      const response = await axios({
        method: "get",
        url: `${process.env.REACT_APP_DB_HOST}/order`,
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setOrders(response.data);
    } catch (error) {
      setUserError(error.response.data.error);
    }
  }

  async function changeDatas() {
    try {
      await axios({
        method: "patch",
        url: `${process.env.REACT_APP_DB_HOST}/myaccount`,
        headers: { Authorization: `Bearer ${user.token}` },
        data: {
          firstname,
          lastname,
          email,
          password,
          newPassword,
          address,
          phoneNumber,
        },
      });
    } catch (error) {
      setUserError(error.response.data.error);
    }
  }

  function comparePassword() {
    if (newPassword !== passwordConfirm) {
      setUserErrorPassword("passwords do not match, please try again");
    }
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
        <div
          className="breadcrumb-area breadcrumb-height"
          data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg"
        >
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12">
                <div className="breadcrumb-item">
                  <h2 className="breadcrumb-heading">My Account Page</h2>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>My Account</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="account-page-area section-space-y-axis-100">
          <div className="container">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#dashboard">
              <Row>
                <Col lg={3}>
                  <ListGroup>
                    <ListGroup.Item action href="#dashboard" className="itemAccountOptions">
                      DASHBOARD
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#orders"
                      className="itemAccountOptions"
                      onClick={() => {
                        handlerOrders();
                      }}
                    >
                      ORDERS
                    </ListGroup.Item>
                    <ListGroup.Item action href="#addresses" className="itemAccountOptions">
                      ADDRESSES
                    </ListGroup.Item>
                    <ListGroup.Item action href="#accountDetails" className="itemAccountOptions">
                      ACCOUNT DETAILS
                    </ListGroup.Item>
                    <ListGroup.Item
                      action
                      href="#logout"
                      onClick={() => {
                        handlerLogout();
                      }}
                      className="itemAccountOptions"
                    >
                      LOGOUT
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col lg={9}>
                  <Tab.Content>
                    <div
                      className="tab-content myaccount-tab-content"
                      id="account-page-tab-content"
                    >
                      <Tab.Pane eventKey="#dashboard">
                        <div
                          className="tab-pane fade show active"
                          id="account-dashboard"
                          role="tabpanel"
                          aria-labelledby="account-dashboard-tab"
                        >
                          <div className="myaccount-dashboard">
                            <p>
                              Hello <b>Hackshop</b> (not Hackshop?{" "}
                              <span
                                onClick={() => {
                                  handlerLogout();
                                }}
                                style={{ cursor: "pointer", color: "#0D6EFD" }}
                              >
                                Sign out
                              </span>
                              )
                            </p>
                            <p>
                              From your account dashboard you can view your recent orders, manage
                              your shipping and billing addresses and edit your password and account
                              details
                            </p>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#orders">
                        <div className="myaccount-orders">
                          <h4 className="small-title">MY ORDERS</h4>
                          {orders.length === 0 ? (
                            <div className="divOrderEmpty">
                              <div>
                                <img src="./cat-travel-bag-svgrepo-com.svg" />
                                <div>
                                  <p>There are no recent orders to show!</p>
                                  <p>The kitten will be happy when you buy :)</p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="table-responsive">
                              <table className="table table-bordered table-hover">
                                <tbody>
                                  <tr>
                                    <th>ORDER</th>
                                    <th>DATE</th>
                                    <th>STATUS</th>
                                    <th>PAYMENT METHOD</th>
                                    <th>ADDRESS</th>
                                    <th>TOTAL</th>
                                  </tr>
                                  {orders.map((order) => {
                                    return (
                                      <tr>
                                        <td>
                                          <div className="account-order-id">#{order.id}</div>
                                        </td>
                                        <td>
                                          {new Date(order.createdAt)
                                            .toISOString()
                                            .slice(0, 16)
                                            .replace("T", ", ")}
                                        </td>
                                        <td>Complete</td>
                                        <td>{order.paymentMethod}</td>
                                        <td>{order.address}</td>
                                        <td>
                                          {priceFormat.format(
                                            order.productList.reduce(
                                              (total, product) =>
                                                total + product.price * product.quantity,
                                              0,
                                            ),
                                          )}
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#addresses">
                        <div className="myaccount-address">
                          <p>
                            The following addresses will be used on the checkout page by default.
                          </p>
                          <div className="row">
                            <div className="col">
                              <h4 className="small-title">SHIPPING ADDRESS</h4>
                              <address>{user.address}</address>
                            </div>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#accountDetails">
                        <div className="myaccount-details">
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                            }}
                            className="myaccount-form"
                          >
                            <div className="myaccount-form-inner">
                              <div className="single-input single-input-half">
                                <label>Firstname</label>
                                <input
                                  type="text"
                                  name="firstname"
                                  onChange={(e) => {
                                    setFirstname(e.target.value);
                                  }}
                                  defaultValue={user.firstname}
                                />
                              </div>
                              <div className="single-input single-input-half">
                                <label>Lastname</label>
                                <input
                                  type="text"
                                  name="lastname"
                                  onChange={(e) => {
                                    setLastname(e.target.value);
                                  }}
                                  defaultValue={user.lastname}
                                />
                              </div>
                              <div className="single-input">
                                <label>Email</label>
                                <input
                                  type="email"
                                  name="email"
                                  onChange={(e) => {
                                    setEmail(e.target.value);
                                  }}
                                  defaultValue={user.email}
                                />
                              </div>
                              <div className="single-input">
                                <label>Address</label>
                                <input
                                  type="text"
                                  name="address"
                                  onChange={(e) => {
                                    SetAddress(e.target.value);
                                  }}
                                  defaultValue={user.address}
                                />
                              </div>
                              <div className="single-input">
                                <label>phone number</label>
                                <input
                                  type="text"
                                  name="phoneNumber"
                                  onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                  }}
                                  defaultValue={user.phoneNumber}
                                />
                              </div>
                              <div className="single-input">
                                <label>Current Password(leave blank to leave unchanged)</label>
                                <input
                                  type="password"
                                  name="password"
                                  onChange={(e) => {
                                    setPassword(e.target.value);
                                  }}
                                  onFocus={() => {
                                    setUserError();
                                  }}
                                />
                              </div>
                              <div className="single-input">
                                <label>New Password (leave blank to leave unchanged)</label>
                                <input
                                  type="password"
                                  name="newPassword"
                                  onChange={(e) => {
                                    setNewPassword(e.target.value);
                                  }}
                                  onFocus={() => setUserErrorPassword()}
                                />
                              </div>
                              <div className="single-input">
                                <label>Confirm New Password</label>
                                <input
                                  type="password"
                                  onChange={(e) => {
                                    setPasswordConfirm(e.target.value);
                                  }}
                                  onFocus={() => setUserErrorPassword()}
                                />
                              </div>
                              {userError && (
                                <div className="paragraphError">
                                  <AiOutlineExclamationCircle />
                                  <p>{userError}</p>
                                </div>
                              )}
                              {userErrorPassword && (
                                <div className="paragraphError" style={{ width: "100%" }}>
                                  <AiOutlineExclamationCircle />
                                  <p>{userErrorPassword}</p>
                                </div>
                              )}
                              <div className="single-input">
                                <button
                                  className="btn btn-custom-size lg-size btnSaveChanges"
                                  type="submit"
                                  onClick={() => {
                                    comparePassword();
                                    changeDatas();
                                  }}
                                >
                                  SAVE CHANGES
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="#logout"></Tab.Pane>
                    </div>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </main>
    </>
  );
};
