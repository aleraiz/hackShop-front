export const Carousel = () => {
  return (
    <div className="slider-area">
      <div className="swiper-container main-slider swiper-arrow with-bg_white">
        <div className="swiper-wrapper">
          <div className="swiper-slide animation-style-01">
            <div
              className="slide-inner style-1 bg-height"
              data-bg-image="../../../public/image/carouselImgUno.jpg"
            >
              <div className="container">
                <div className="row prueba">
                  <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                    <div className=" text-black">
                      <span className="offer animate__bounce">25% OFF</span>
                      <h2 className="title">New Plant</h2>
                      <p className="short-desc">
                        Pronia, With 100% Natural, Organic & Plant Shop.
                      </p>
                      <div className="btn-wrap">
                        <a
                          className="btn btn-custom-size xl-size btn-pronia-primary"
                          href="shop.html"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                    <div className="inner-img">
                      <div className="scene fill">
                        <div className="expand-width" data-depth="0.2">
                          <img
                            src="../../../image/carouselImgDos.jpg"
                            alt="Inner Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="swiper-slide animation-style-01">
            <div
              className="slide-inner style-1 bg-height"
              data-bg-image="assets/images/slider/bg/1-1.jpg"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 align-self-center">
                    <div className="slide-content text-black">
                      <span className="offer">65% Off</span>
                      <h2 className="title">New Plant</h2>
                      <p className="short-desc">
                        Pronia, With 100% Natural, Organic & Plant Shop.
                      </p>
                      <div className="btn-wrap">
                        <a
                          className="btn btn-custom-size xl-size btn-pronia-primary"
                          href="shop.html"
                        >
                          Discover Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-8 offset-md-2 offset-lg-0 order-1 order-lg-2">
                    <div className="inner-img">
                      <div className="scene fill">
                        <div className="expand-width" data-depth="0.2">
                          <img
                            src="assets/images/slider/inner-img/1-2-524x617.png"
                            alt="Inner Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="swiper-pagination d-md-none"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};
