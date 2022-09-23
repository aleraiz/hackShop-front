import "./style.css";
import "react-multi-carousel/lib/styles.css";
import { CarouselProducts } from "../carouselProducts/CarouselProducts";

export const NewProducts = () => {
  return (
    <>
      <div className="product-area section-space-top-100">
        <div className="container">
          <div className="row">
            <div className="section-title-wrap without-tab">
              <h2 className="section-title">New Products</h2>
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
