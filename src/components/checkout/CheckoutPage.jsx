import "./style.css";
import { BillingDetails } from "./BillingDetails";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <h2 className="breadcrumb-heading">Checkout Page</h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-area section-space-y-axis-100">
        <div className="container">
          <BillingDetails />
        </div>
      </div>
    </main>
  );
};
