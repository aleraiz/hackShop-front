import { Link, useNavigate, Navigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/slices/userSlice";

import "./style.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function loginClient() {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/token",
        data: {
          email,
          password,
        },
      });
      dispatch(loginUser({ data: response.data.buyer.id, token: response.data.token }));
      navigate("/");
    } catch (error) {
      console.log(error);
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
                <h2 className="breadcrumb-heading">Login</h2>
                <ul className="p-0">
                  <li>
                    <Link className="text-dark" to="/">
                      Home
                    </Link>
                  </li>
                  <li>Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-register-area section-space-y-axis-100">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="login-form">
                  <h4 className="login-title">Login</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        onFocus={() => {
                          setUserError();
                        }}
                      />
                    </div>
                    <div className="col-lg-12">
                      <label>Contraseña</label>
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        onFocus={() => {
                          setUserError();
                        }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="check-box">
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">Remember me</label>
                      </div>
                    </div>
                    <div className="col-md-4 pt-1 mt-md-0">
                      <div className="forgotton-password_info">
                        <Link to="#" className="text-dark">
                          Forgotten password?
                        </Link>
                      </div>
                    </div>
                    {userError && (
                      <div className="paragraphError">
                        <AiOutlineExclamationCircle />
                        <p>{userError}</p>
                      </div>
                    )}
                    <div className="col-lg-12 pt-5">
                      <button
                        className="btn btn-custom-size lg-size btn-pronia-primary btn-collection rounded-pill"
                        onClick={() => {
                          loginClient();
                        }}
                      >
                        Login
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
