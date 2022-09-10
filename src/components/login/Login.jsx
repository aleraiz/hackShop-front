import React from "react";
import { Link } from "react-router-dom";
export const Login = () => {
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
              <form action="#">
                <div className="login-form">
                  <h4 className="login-title">Login</h4>
                  <div className="row">
                    <div className="col-lg-12">
                      <label>Email Address*</label>
                      <input type="email" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-12">
                      <label>Password</label>
                      <input type="password" placeholder="Password" />
                    </div>
                    <div className="col-md-8">
                      <div className="check-box">
                        <input type="checkbox" id="remember_me" />
                        <label for="remember_me">Remember me</label>
                      </div>
                    </div>
                    <div className="col-md-4 pt-1 mt-md-0">
                      <div className="forgotton-password_info">
                        <Link to="#" className="text-dark">
                          Forgotten password?
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-12 pt-5">
                      <button className="btn btn-custom-size lg-size btn-pronia-primary btn-collection rounded-pill">
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
