import React from "react";

const Error404 = () => {
  return (
    <>
      <div
        className="breadcrumb-area breadcrumb-height"
        data-bg-image="assets/images/breadcrumb/bg/1-1-1919x388.jpg"
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12">
              <div className="breadcrumb-item">
                <h2 className="breadcrumb-heading">Error 404</h2>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>404</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="error-404-area section-space-y-axis-100"
        data-bg-image="assets/images/error-404/bg/1-1920x886.png"
      >
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-lg-12 align-self-center">
              <div className="error-404-content">
                <div className="error-404-img">
                  <img src="assets/images/error-404/404.png" alt="Error Image" />
                </div>
                <h2 className="title">
                  <span>Oops,</span> page not found!
                </h2>
                <div className="button-wrap">
                  <a className="btn btn-error" href="index.html">
                    Back to home
                    <i className="pe-7s-home"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
