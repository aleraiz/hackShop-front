import "./collectionStyle.css";
import { Link } from "react-router-dom";

export const Collection = () => {
  return (
    <div className="banner-area section-space-top-90">
      <div className="container">
        <div className="row g-min-30 g-4">
          <div className="col-lg-8">
            <div className="banner-item img-hover-effect">
              <div className="banner-img">
                <img src="../collection/collection1.jpg" alt="Banner Image" />
              </div>
              <div className="banner-content text-position-left">
                <span className="collection">Collection Of Cactus</span>
                <h3 className="title">
                  Pottery Pots & <br /> Plant
                </h3>
                <div className="button-wrap">
                  <Link
                    className="btn btn-custom-size btn-pronia-primary rounded-pill btn-collection"
                    to="shop.html"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="banner-item img-hover-effect">
              <div className="banner-img">
                <img src="../collection/collection2.jpg" alt="Banner Image" />
              </div>
              <div className="banner-content text-position-center">
                <span className="collection">New Collection</span>
                <h3 className="title">Plant Port</h3>
                <div className="button-wrap">
                  <Link
                    className="btn btn-custom-size lg-size btn-pronia-primary rounded-pill btn-collection"
                    to="shop.html"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="banner-item img-hover-effect">
              <div className="banner-img">
                <img src="../collection/collection3.jpg" alt="Banner Image" />
              </div>
              <div className="banner-content text-position-center">
                <span className="collection">New Collection</span>
                <h3 className="title">Plant Port</h3>
                <div className="button-wrap">
                  <Link
                    className="btn btn-custom-size lg-size btn-pronia-primary rounded-pill btn-collection"
                    to="shop.html"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="banner-item img-hover-effect">
              <div className="banner-img">
                <img src="../collection/collection4.jpg" alt="Banner Image" />
              </div>
              <div className="banner-content text-position-left">
                <span className="collection">Collection Of Cactus</span>
                <h3 className="title">
                  Hanging Pots & <br /> Plant
                </h3>
                <div className="button-wrap">
                  <Link
                    className="btn btn-custom-size lg-size btn-pronia-primary rounded-pill btn-collection"
                    to="shop.html"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
