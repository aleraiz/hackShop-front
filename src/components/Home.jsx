import { Carousel } from "./carousel/Carousel";
import { ShippingArea } from "./shippingArea/ShippingArea";
import { OurProducts } from "./ourProducts/OurProducts";
import { Collection } from "./collection/Collection";
import { NewProducts } from "./newProducts/NewProducts";
import { Testimonial } from "./testimonial/Testimonial";
import { BrandArea } from "./brandArea/BrandArea";
import { LatestBlog } from "./latestBlog/LatestBlog";
import { useState, useEffect } from "react";
import axios from "axios";

export const Home = () => {
  const [plantsDetails, setPlantsDetails] = useState([]);

  async function products() {
    const response = await axios({
      method: "get",
      url: "http://localhost:8000/products",
    });
    setPlantsDetails(response.data);
  }

  useEffect(() => {
    products();
  }, []);

  console.log(plantsDetails);
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
    </div>
  );
};
