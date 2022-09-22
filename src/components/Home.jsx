import { useEffect } from "react";
import { CarouselHome } from "./carousel/Carousel";
import { ShippingArea } from "./shippingArea/ShippingArea";
import { OurProducts } from "./ourProducts/OurProducts";
import { Collection } from "./collection/Collection";
import { NewProducts } from "./newProducts/NewProducts";
import { Testimonial } from "./testimonial/Testimonial";
import { BrandArea } from "./brandArea/BrandArea";
import { LatestBlog } from "./latestBlog/LatestBlog";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-wrapper">
      <CarouselHome />
      <ShippingArea />
      <OurProducts />
      <Collection />
      <NewProducts />
      <Testimonial />
      <BrandArea />
      <LatestBlog />
    </div>
  );
};
