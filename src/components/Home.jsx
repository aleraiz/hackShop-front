import { Carousel } from "./carousel/Carousel";
import { ShippingArea } from "./shippingArea/ShippingArea";
import { OurProducts } from "./ourProducts/OurProducts";
import { Collection } from "./collection/Collection";
import { NewProducts } from "./newProducts/NewProducts";
import { Testimonial } from "./testimonial/Testimonial";
import { BrandArea } from "./brandArea/BrandArea";
import { LatestBlog } from "./latestBlog/LatestBlog";

export const Home = () => {
  return (
    <div className="main-wrapper">
      <Carousel />
      <ShippingArea />
      <OurProducts />
      <Collection />
      <NewProducts />
      <Testimonial />
      <BrandArea />
      <LatestBlog />
      <a className="scroll-to-top" href="">
        <i className="fa fa-angle-double-up"></i>
      </a>
    </div>
  );
};
