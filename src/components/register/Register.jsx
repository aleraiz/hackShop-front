import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/slices/userSlice";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import axios from "axios";

export const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  async function registerClient() {
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_DB_HOST}/register`,
        data: {
          firstname,
          lastname,
          email,
          password,
          address,
          phoneNumber,
        },
      });
      dispatch(
        registerUser({
          id: response.data.client.id,
          token: response.data.token,
          firstname: response.data.client.firstname,
        }),
      );
      navigate("/account");
    } catch (error) {
      setUserError(error.response.data.error);
    }
  }

  return (
    <main className="main-content">
      <div
        className="breadcrumb-area breadcrumb-height"
        data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg"
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="breadcrumb-heading">Register Page</h2>
                <ul className="p-0">
                  <li>
                    <Link to="/" className="text-dark">
                      Home
                    </Link>
                  </li>
                  <li>Register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-register-area section-space-y-axis-100">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6 pt-5 pt-lg-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="login-form">
                  <h4 className="login-title">Register</h4>
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <label>Firstname</label>
                      <input
                        type="text"
                        placeholder="Firstname"
                        name="firstname"
                        onChange={(e) => {
                          setFirstname(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Lastname</label>
                      <input
                        type="text"
                        placeholder="Lastname"
                        name="lastname"
                        onChange={(e) => {
                          setLastname(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Address</label>
                      <input
                        type="text"
                        placeholder="Lastname"
                        name="address"
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-6 col-12">
                      <label>Phone</label>
                      <input
                        type="text"
                        placeholder="Lastname"
                        name="phoneNumber"
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        onFocus={() => {
                          setUserError();
                        }}
                      />
                    </div>
                    <div className="col-md-12">
                      <label>Password</label>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    {userError && (
                      <div className="paragraphError">
                        <AiOutlineExclamationCircle />
                        <p>{userError}</p>
                      </div>
                    )}
                    <div className="col-12">
                      <button
                        className="btn btn-custom-size lg-size btn-pronia-primary btn-collection rounded-pill mt-4"
                        onClick={() => {
                          registerClient();
                        }}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
