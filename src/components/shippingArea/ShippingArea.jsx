export const ShippingArea = () => {
  return (
    <div className="shipping-area section-space-top-100">
      <div className="container">
        <div className="shipping-bg">
          <div className="row shipping-wrap">
            <div className="col-lg-4 col-md-6">
              <div className="shipping-item">
                <div className="shipping-img">
                  <img src="../../car.png" alt="Shipping Icon" />
                </div>
                <div className="shipping-content">
                  <h2 className="title">Free shipping</h2>
                  <p className="short-desc mb-0 shippingText">Capped at $319 per order</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div className="shipping-item">
                <div className="shipping-img">
                  <img src="../../card.png" alt="Shipping Icon" />
                </div>
                <div className="shipping-content">
                  <h2 className="title">Safe payment</h2>
                  <p className="short-desc mb-0 shippingText">With our payment gateway</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="shipping-item">
                <div className="shipping-img">
                  <img src="../../service.png" alt="Shipping Icon" />
                </div>
                <div className="shipping-content">
                  <h2 className="title">Best services</h2>
                  <p className="short-desc mb-0 shippingText">Friendly & supper services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
