import "./assets/css/style.css";
import "./assets/css/animate.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/ion.rangeSlider.min.css";
import "./assets/css/magnific-popup.min.css";
import "./assets/css/nice-select.css";
import "./assets/css/Pe-icon-7-stroke.css";
import "./assets/css/plugins.min.css";
import "./assets/css/swiper-bundle.min.css";
import { Footer } from "./components/footer/Footer";
import { NavbarPrincipal } from "./components/navbar/NavbarPrincipal";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Cart } from "./components/cart/Cart";
import { ProductDetail } from "./components/productDetail.jsx/ProductDetail";
import { Error404 } from "./components/error404/Error404";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Products } from "./components/products/Products";
import { Admin } from "./components/administrator/Admin";
import { ContactUs } from "./components/contactUs/ContactUs";
import { AboutUs } from "./components/aboutUs/AboutUs";
import React, { useEffect } from "react";
import { TbArrowBigUpLines } from "react-icons/tb";
import { MyAccount } from "./components/navbar/MyAccount";
import PrivateRoutes from "./components/privateRoutes/PrivateRoutes.jsx";
import { CheckoutPage } from "./components/checkout/CheckoutPage";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="app">
      <NavbarPrincipal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <div>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            fontSize: "70px",
            bottom: "40px",
            right: "40px",
            backgroundColor: "transparent",
            color: "#abd373",
            textAlign: "center",
            border: "0",
            zIndex: "9999",
          }}
        >
          <TbArrowBigUpLines />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
