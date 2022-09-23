import { useState, useEffect } from "react";
import { CarouselHome } from "./carousel/Carousel";
import { ShippingArea } from "./shippingArea/ShippingArea";
import { OurProducts } from "./ourProducts/OurProducts";
import { Collection } from "./collection/Collection";
import { NewProducts } from "./newProducts/NewProducts";
import { Testimonial } from "./testimonial/Testimonial";
import { BrandArea } from "./brandArea/BrandArea";
import { LatestBlog } from "./latestBlog/LatestBlog";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Home = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="main-wrapper">
      <>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
          <Modal.Header closeButton style={{ backgroundColor: "#fff" }}></Modal.Header>
          <Modal.Body style={{ backgroundColor: "#fff" }}></Modal.Body>
        </Modal>
        <CarouselHome />
        <ShippingArea />
        <OurProducts />
        <Collection />
        <NewProducts />
        <Testimonial />
        <BrandArea />
        <LatestBlog />
      </>
    </div>
  );
};
