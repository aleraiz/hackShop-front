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
                          Protect them from high temperatures
                        </Link>
                      </h2>
                      <p className="short-desc mb-7">
                        Heat waves and high temperatures can make our plants suffer. That's why
                        watering at the right time is important...
                      </p>
                    </div>
                    <div className="blog-img img-hover-effect">
                      <a
                        target="_blank"
                        href="https://www.revistamijardin.es/protege-tus-plantas-frente-a-las-altas-temperaturas/"
                      >
                        <img
                          className="img-full"
                          src="../latestBlog/latestBlog1.jpg"
                          alt="Blog Image"
                        />
                      </a>
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
                          Ideas and pots at home
                        </Link>
                      </h2>
                      <p className="short-desc mb-7">
                        What pots are the best to plant? What characteristics do you have? Ideas to
                        make your own without having to leave your house...
                      </p>
                    </div>
                    <div className="blog-img img-hover-effect">
                      <a
                        className="text-decoration-none"
                        target="_blank"
                        href="https://saposyprincesas.elmundo.es/ocio-en-casa/manualidades-para-ninos/manualidades-para-crear-un-jardin-dentro-de-casa/"
                      >
                        <img
                          className="img-full"
                          src="../latestBlog/latestBlog2.jpg"
                          alt="Blog Image"
                        />
                      </a>
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
                          A garden in our home
                        </Link>
                      </h2>
                      <p className="short-desc mb-7">
                        Large, small, hanging and even in vases. Having plants at home will help you
                        decorate your home and bring freshness...
                      </p>
                    </div>
                    <div className="blog-img img-hover-effect">
                      <a
                        target="_blank"
                        href="https://www.admagazine.com/editors-pick/consejos-para-tener-plantas-en-casa-20180122-3754-articulos"
                      >
                        <img
                          className="img-full"
                          src="../latestBlog/latestBlog3.jpg"
                          alt="Blog Image"
                        />
                      </a>
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
