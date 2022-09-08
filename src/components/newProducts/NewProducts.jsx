import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CarouselProducts } from "../carouselProducts/CarouselProducts";
import "./style.css";

export const NewProducts = () => {
  return (
    <>
      <div className="product-area section-space-top-100">
        <div className="container">
          <div className="row">
            <div className="section-title-wrap without-tab">
              <h2 className="section-title">New Products</h2>
              <p className="section-desc">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
              </p>
            </div>

            <div className="col-lg-12">
              <div className="swiper-container product-slider">
                <CarouselProducts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
