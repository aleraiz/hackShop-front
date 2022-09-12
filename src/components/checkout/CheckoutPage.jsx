import { BillingDetails } from "./BillingDetails";
import { Link } from "react-router-dom";

import "./style.css";

export const CheckoutPage = () => {
  return (
    <main class="main-content">
      <div
        class="breadcrumb-area breadcrumb-height"
        data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg"
      >
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-lg-12">
              <div class="breadcrumb-item">
                <h2 class="breadcrumb-heading">Checkout Page</h2>
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
      <div class="checkout-area section-space-y-axis-100">
        <div class="container">
          <BillingDetails />
        </div>
      </div>
    </main>
  );
};
