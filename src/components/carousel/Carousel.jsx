import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

export const CarouselHome = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="slider-area">
      <div className="swiper-container main-slider swiper-arrow with-bg_white">
        <div className="slide-inner style-1 bg-height">
          <div className="container">
            <div className="row prueba">
              <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                <div className=" text-black">
                  <span className="offer animate__bounce">25% OFF</span>
                  <h2 className="title">New Plant</h2>
                  <p className="short-desc">Pronia, With 100% Natural, Organic & Plant Shop.</p>
                  <div className="btn-wrap">
                    <Link
                      className="btn btn-custom-size xl-size btn-pronia-primary btn-collection rounded-pill"
                      to="/products"
                    >
                      Discover Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                <div className="inner-img">
                  <div className="scene fill">
                    <div className="expand-width" data-depth="0.2">
                      <img src="../../../image/carouselImgDos.jpg" alt="Inner Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
