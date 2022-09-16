import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/slices/userSlice";
import { emptyCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import "./css/style.css";

export const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const [userError, setUserError] = useState("");

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
            <div className="row">
              <div className="col-lg-3">
                <ul
                  className="nav myaccount-tab-trigger flex-column"
                  id="account-page-tab"
                  role="tablist"
                >
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      id="account-dashboard-tab"
                      data-bs-toggle="tab"
                      to="#account-dashboard"
                      role="tab"
                      aria-controls="account-dashboard"
                      aria-selected="true"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="account-orders-tab"
                      data-bs-toggle="tab"
                      to="#account-orders"
                      role="tab"
                      aria-controls="account-orders"
                      aria-selected="false"
                    >
                      Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="account-address-tab"
                      data-bs-toggle="tab"
                      to="#account-address"
                      role="tab"
                      aria-controls="account-address"
                      aria-selected="false"
                    >
                      Addresses
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      id="account-details-tab"
                      data-bs-toggle="tab"
                      to="#account-details"
                      role="tab"
                      aria-controls="account-details"
                      aria-selected="false"
                    >
                      Account Details
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn-logout"
                      id="account-logout-tab"
                      role="tab"
                      aria-selected="false"
                      onClick={() => {
                        handlerLogout();
                      }}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="tab-content myaccount-tab-content" id="account-page-tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="account-dashboard"
                    role="tabpanel"
                    aria-labelledby="account-dashboard-tab"
                  >
                    <div className="myaccount-dashboard">
                      <p>
                        Hello <b>Pronia</b> (not Pronia?{" "}
                        <Link to="login-register.html">Sign out</Link>)
                      </p>
                      <p>
                        From your account dashboard you can view your recent orders, manage your
                        shipping and billing addresses and{" "}
                        <Link to="#">edit your password and account details</Link>.
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="account-orders"
                    role="tabpanel"
                    aria-labelledby="account-orders-tab"
                  >
                    <div className="myaccount-orders">
                      <h4 className="small-title">MY ORDERS</h4>
                      <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                          <tbody>
                            <tr>
                              <th>ORDER</th>
                              <th>DATE</th>
                              <th>STATUS</th>
                              <th>TOTAL</th>
                              <th></th>
                            </tr>
                            <tr>
                              <td>
                                <Link className="account-order-id" to="#">
                                  #5364
                                </Link>
                              </td>
                              <td>Mar 27, 2019</td>
                              <td>On Hold</td>
                              <td>$162.00 for 2 items</td>
                              <td>
                                <Link to="#" className="btn btn-dark">
                                  <span>View</span>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link className="account-order-id" to="#">
                                  #5356
                                </Link>
                              </td>
                              <td>Mar 27, 2019</td>
                              <td>On Hold</td>
                              <td>$162.00 for 2 items</td>
                              <td>
                                <Link to="#" className="btn btn-dark">
                                  <span>View</span>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="account-address"
                    role="tabpanel"
                    aria-labelledby="account-address-tab"
                  >
                    <div className="myaccount-address">
                      <p>The following addresses will be used on the checkout page by default.</p>
                      <div className="row">
                        <div className="col">
                          <h4 className="small-title">BILLING ADDRESS</h4>
                          <address>
                            1234 Heaven Stress, Beverly Hill OldYork UnitedState of Lorem
                          </address>
                        </div>
                        <div className="col">
                          <h4 className="small-title">SHIPPING ADDRESS</h4>
                          <address>
                            1234 Heaven Stress, Beverly Hill OldYork UnitedState of Lorem
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="account-details"
                    role="tabpanel"
                    aria-labelledby="account-details-tab"
                  >
                    <div className="myaccount-details">
                      <form action="#" className="myaccount-form">
                        <div className="myaccount-form-inner">
                          <div className="single-input single-input-half">
                            <label>First Name*</label>
                            <input type="text" />
                          </div>
                          <div className="single-input single-input-half">
                            <label>Last Name*</label>
                            <input type="text" />
                          </div>
                          <div className="single-input">
                            <label>Email*</label>
                            <input type="email" />
                          </div>
                          <div className="single-input">
                            <label>Current Password(leave blank to leave unchanged)</label>
                            <input type="password" />
                          </div>
                          <div className="single-input">
                            <label>New Password (leave blank to leave unchanged)</label>
                            <input type="password" />
                          </div>
                          <div className="single-input">
                            <label>Confirm New Password</label>
                            <input type="password" />
                          </div>
                          <div className="single-input">
                            <button
                              className="btn btn-custom-size lg-size btn-pronia-primary"
                              type="submit"
                            >
                              <span>SAVE CHANGES</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
