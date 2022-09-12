import { Link } from "react-router-dom";
import "./latestBlogStyle.css";

export const LatestBlog = () => {
  return (
    <div className="blog-area section-space-bottom-100">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title mb-7">Latest Blog</h2>
          <p className="section-desc">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classNameical Latin literature
          </p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="swiper-container blog-slider">
              <div className="swiper-wrapper justify-content-center">
                <div className="swiper-slide latest-item">
                  <div className="blog-item">
                    <div className="blog-content">
                      <div className="blog-meta">
                        <ul>
                          <li className="author">
                            <Link className="text-decoration-none" to="#">
                              By: Admin
                            </Link>
                          </li>
                          <li className="date">24 April 2021</li>
                        </ul>
                      </div>
                      <h2 className="title">
                        <Link className="text-decoration-none" to="blog.html">
                          There Many Variations
                        </Link>
                      </h2>
                      <p className="short-desc mb-7">
                        Lorem ipsum dolor sit amet, consecteturl adipisl elit, sed do eiusmod tempor
                        incidio ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className="blog-img img-hover-effect">
                      <Link to="blog.html">
                        <img
                          className="img-full"
                          src="../latestBlog/latestBlog1.jpg"
                          alt="Blog Image"
                        />
                      </Link>
                      <div className="inner-btn-wrap">
                        <Link className="inner-btn text-decoration-none" to="blog.html">
                          <i className="pe-7s-link"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide latest-item">
                  <div className="blog-item">
                    <div className="blog-content">
                      <div className="blog-meta">
                        <ul>
                          <li className="author">
                            <Link className="text-decoration-none" to="#">
                              By: Admin
                            </Link>
                          </li>
                          <li className="date">24 April 2021</li>
                        </ul>
                      </div>
                      <h2 className="title">
                        <Link className="text-decoration-none" to="blog.html">
                          Maecenas Laoreet Massa
                        </Link>
                      </h2>
                      <p className="short-desc mb-7">
                        Lorem ipsum dolor sit amet, consecteturl adipisl elit, sed do eiusmod tempor
                        incidio ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className="blog-img img-hover-effect">
                      <Link className="text-decoration-none" to="blog.html">
                        <img
                          className="img-full"
                          src="../latestBlog/latestBlog2.jpg"
                          alt="Blog Image"
                        />
                      </Link>
                      <div className="inner-btn-wrap">
                        <Link className="inner-btn text-decoration-none" to="blog.html">
                          <i className="pe-7s-link"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide latest-item">
                  <div className="blog-item">
                    <div className="blog-content">
                      <div className="blog-meta">
                        <ul>
                          <li className="author">
                            <Link className="text-decoration-none" to="#">
                              By: Admin
                            </Link>
                          </li>
                          <li className="date">24 April 2021</li>
                        </ul>
                      </div>
                      <h2 className="title">
                        <Link className="text-decoration-none" to="blog.html">
                          Aenean Vulputate Lorem
                        </Link>
                      </h2>
                      <p className="short-desc mb-7">
                        Lorem ipsum dolor sit amet, consecteturl adipisl elit, sed do eiusmod tempor
                        incidio ut labore et dolore magna aliqua.
                      </p>
                    </div>
                    <div className="blog-img img-hover-effect">
                      <Link to="blog.html">
                        <img
                          className="img-full"
                          src="../latestBlog/latestBlog3.jpg"
                          alt="Blog Image"
                        />
                      </Link>
                      <div className="inner-btn-wrap">
                        <Link className="inner-btn text-decoration-none" to="blog.html">
                          <i className="pe-7s-link"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
