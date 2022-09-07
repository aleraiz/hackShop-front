export const Testimonial = () => {
  return (
    <div className="testimonial-area section-space-top-90 section-space-bottom-95">
      <div className="container-fluid">
        <div
          className="testimonial-bg"
          data-bg-image="assets/images/testimonial/bg/1-1-1820x443.jpg"
        >
          <div className="section-title-wrap">
            <h2 className="section-title">What Say Client</h2>
            <p className="section-desc mb-0">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classNameical Latin literature
            </p>
          </div>
        </div>
        <div className="container custom-space">
          <div className="swiper-container testimonial-slider with-bg">
            <div className="swiper-wrapper">
              <div className="swiper-slide testimonial-item">
                <div className="user-info mb-3">
                  <div className="user-shape-wrap">
                    <div className="user-img">
                      <img
                        src="assets/images/testimonial/user/1.png"
                        alt="User Image"
                      />
                    </div>
                  </div>
                  <div className="user-content text-charcoal">
                    <h4 className="user-name mb-1">Phoenix Baker</h4>
                    <span className="user-occupation">Client</span>
                  </div>
                </div>
                <p className="user-comment mb-6">
                  Lorem ipsum dolor sit amet, conse adipisic elit, sed do
                  eiusmod tempo incididunt ut labore et dolore. magna
                </p>
              </div>
              <div className="swiper-slide testimonial-item">
                <div className="user-info mb-3">
                  <div className="user-shape-wrap">
                    <div className="user-img">
                      <img
                        src="assets/images/testimonial/user/2.png"
                        alt="User Image"
                      />
                    </div>
                  </div>
                  <div className="user-content text-charcoal">
                    <h4 className="user-name mb-1">Phoenix Baker</h4>
                    <span className="user-occupation">Client</span>
                  </div>
                </div>
                <p className="user-comment mb-6">
                  Lorem ipsum dolor sit amet, conse adipisic elit, sed do
                  eiusmod tempo incididunt ut labore et dolore. magna
                </p>
              </div>
              <div className="swiper-slide testimonial-item">
                <div className="user-info mb-3">
                  <div className="user-shape-wrap">
                    <div className="user-img">
                      <img
                        src="assets/images/testimonial/user/3.png"
                        alt="User Image"
                      />
                    </div>
                  </div>
                  <div className="user-content text-charcoal">
                    <h4 className="user-name mb-1">Phoenix Baker</h4>
                    <span className="user-occupation">Client</span>
                  </div>
                </div>
                <p className="user-comment mb-6">
                  Lorem ipsum dolor sit amet, conse adipisic elit, sed do
                  eiusmod tempo incididunt ut labore et dolore. magna
                </p>
              </div>
            </div>

            <div className="swiper-pagination without-absolute"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
