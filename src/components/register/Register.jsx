import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");

  async function registerClient() {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:8000/register",
        data: {
          firstname,
          lastname,
          email,
          password,
          address,
          phoneNumber,
        },
      });
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
                      <label>Nombre</label>
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
                      <label>Apellido</label>
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
                      <label>Dirección</label>
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
                      <label>Numero de teléfono</label>
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
                      <label>Contraseña</label>
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
