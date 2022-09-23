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
import { Link } from "react-router-dom";
import { Reset } from "../components/buttonReset/Reset";

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
          <Modal.Header closeButton style={{ backgroundColor: "#fff" }}>
            <Modal.Title> ¡Bienvenidos a Hackshop!</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: "#fff" }}>
            <p>
              Esperámos que disfruten el recorrido por nuestro sitio. A continuación les dejamos las
              credenciales para una mejor experiencia:
            </p>
            <Link to="/login">login</Link>
            <p>Usuario: user@user.com</p> <p>Contraseña: 123</p>
            <a href="https://hackshop-admin.vercel.app/">login admin</a>
            <p>admin: admin@admin.com</p> <p>contraseña: 123</p>
            <p>
              RECOMENDAMOS antes de navegar resetear la base de datos: <Reset />{" "}
            </p>
            <Link to="/aboutus">Sobre el proyecto</Link>
          </Modal.Body>
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
