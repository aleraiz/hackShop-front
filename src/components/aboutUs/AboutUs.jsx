import React from "react";

export const AboutUs = () => {
  return (
    <>
      <div class="about-area section-space-top-95">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="about-content">
                <h2 class="about-title">
                  Our <span>Story</span>
                </h2>
                <p class="about-desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                </p>
                <div class="about-signature">
                  <img src="assets/images/about/icon/2.png" alt="Signature" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shipping-area section-space-y-axis-100">
        <div class="container">
          <div class="shipping-bg">
            <div class="row shipping-wrap">
              <div class="col-lg-4 col-md-6">
                <div class="shipping-item">
                  <div class="shipping-img">
                    <img src="assets/images/shipping/icon/car.png" alt="Shipping Icon" />
                  </div>
                  <div class="shipping-content">
                    <h2 class="title">Free Shipping</h2>
                    <p class="short-desc mb-0">Capped at $319 per order</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div class="shipping-item">
                  <div class="shipping-img">
                    <img src="assets/images/shipping/icon/card.png" alt="Shipping Icon" />
                  </div>
                  <div class="shipping-content">
                    <h2 class="title">Safe Payment</h2>
                    <p class="short-desc mb-0">With our payment gateway</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div class="shipping-item">
                  <div class="shipping-img">
                    <img src="assets/images/shipping/icon/service.png" alt="Shipping Icon" />
                  </div>
                  <div class="shipping-content">
                    <h2 class="title">Best Services</h2>
                    <p class="short-desc mb-0">Friendly & Supper Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner-with-counter">
        <div class="banner-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="banner-boxshadow">
                  <div class="banner-item" data-bg-image="assets/images/banner/3-1-1208x542.jpg">
                    <div class="popup-btn">
                      <a
                        class="popup-vimeo wave-btn"
                        href="https://player.vimeo.com/video/172601404?autoplay=1"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                        <div class="icon">
                          <i class="pe-7s-play"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="counter-area">
          <div class="container">
            {/* <h2 class="counter-title">
              Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit, sed do
              <span>eiusmod tempor</span> incididunt.
            </h2> */}
            <h2 class="counter-title">
              En este bootcamp de dedicacion full-time <span>hemos echo</span>:
            </h2>
            <div class="row">
              <div class="col-lg-3 col-md-4 col-6">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="500">
                      3
                    </h3>
                    {/* <span class="prefix">+</span> */}
                  </div>
                  <h4 class="count-title mb-0">Months</h4>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="1000">
                      600
                    </h3>
                    <span class="prefix">+</span>
                  </div>
                  <h4 class="count-title mb-0">Hours</h4>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 pt-4 pt-md-0">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="1500">
                      12
                    </h3>
                    <span class="prefix">+</span>
                  </div>
                  <h4 class="count-title mb-0">Language</h4>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 pt-4 pt-lg-0">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="2000">
                      15
                    </h3>
                    <span class="prefix">+</span>
                  </div>
                  <h4 class="count-title mb-0">Projects</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="team-area section-space-top-100">
        <div class="container">
          <div class="section-title-wrap without-tab">
            <h2 class="section-title">Our Team</h2>
            <p class="section-desc">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
              piece of classical Latin literature
            </p>
          </div>
          <div class="row">
            <div class="col-lg-3 col-sm-6 pt-sm-5">
              <div class="team-item">
                <div class="team-img">
                  <img src="assets/images/about/team/1-1-270x270.png" alt="Team Member" />
                  <div class="inner-content">
                    <h2 class="team-member-name">Micheal Murphy</h2>
                    <span class="occupation">Sales man</span>
                    <div class="social-link with-border">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-tippy="Facebook"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Twitter"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Pinterest"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Micheal Murphy</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 pt-5 pt-sm-0">
              <div class="team-item">
                <div class="team-img">
                  <img src="assets/images/about/team/1-2-270x270.png" alt="Team Member" />
                  <div class="inner-content">
                    <h2 class="team-member-name">Kari Rasmus</h2>
                    <span class="occupation">Sales man</span>
                    <div class="social-link with-border">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-tippy="Facebook"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Twitter"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Pinterest"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Kari Rasmus</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 pt-5">
              <div class="team-item">
                <div class="team-img">
                  <img src="assets/images/about/team/1-3-270x270.png" alt="Team Member" />
                  <div class="inner-content">
                    <h2 class="team-member-name">Britney Cooper</h2>
                    <span class="occupation">Sales man</span>
                    <div class="social-link with-border">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-tippy="Facebook"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Twitter"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Pinterest"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Britney Cooper</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 pt-5 pt-sm-0">
              <div class="team-item">
                <div class="team-img">
                  <img src="../assets/images/about/team/1-1-270x270.png" alt="Team Member" />
                  <div class="inner-content">
                    <h2 class="team-member-name">Marissa Swan</h2>
                    <span class="occupation">Sales man</span>
                    <div class="social-link with-border">
                      <ul>
                        <li>
                          <a
                            href="#"
                            data-tippy="Facebook"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Twitter"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            data-tippy="Pinterest"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Marissa Swan</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
