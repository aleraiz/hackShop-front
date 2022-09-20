import React from "react";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaTrello } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Carousel from "react-multi-carousel";

import "./styles.css";

export const AboutUs = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="about-area aboutContainer">
        <div classNameName="containerImageAboutUs"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-content">
                <div>
                  <h2 className="about-title">
                    Sobre el <span>Proyecto</span>
                  </h2>
                  <p className="about-desc aboutUsDescription">
                    HackShop es una aplicación web realizada como proyecto final del Coding Bootcamp
                    en Hack Academy, una institución educativa fundada en 2016 en Montevideo,
                    Uruguay, especializada en cursos intensivos de programación. El bootcamp es un
                    curso de tiempo completo que prepara a jóvenes profesionales como{" "}
                    <span> Full Stack Jr. Devs</span>. El objetivo del proyecto final es poner en
                    práctica los conocimientos adquiridos durante el curso utilizando diversas
                    tecnologías; el proyecto fue desarrollado en <span>dos semanas</span> por el
                    equipo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div classNameName="divContainerHackshop">
                <div>
                  <h2 className="about-title hackshopTitle">
                    ¿Cómo nació <span>Hackshop?</span>
                  </h2>
                </div>

                <div classNameName="divPlanningHackshopPoint">
                  <div>
                    <img
                      src="./HackShopRoutesFrontEdit.png"
                      alt="MERHS"
                      classNameName="imgDiagrama"
                    />
                  </div>
                  <div classNameName="titlesAndDescriptionStep">
                    <div>
                      <h3>1 - Concepción del proyecto y MER</h3>
                      <p className="about-desc aboutUsDescription paragraphText">
                        Nuestro primer paso fue definir que necesitamos en el <span>Backend </span>
                        antes de seguir avanzando, por esto hicimos un listado de las cinco
                        principales tareas. Luego, procedimos a hacer un diagrama de relaciones de
                        entidad cuidadosamente pensado. Aquí definimos las principales relaciones
                        entre las siguientes entidades:{" "}
                        <span> Client, Administrator, Category, Product y Order.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div classNameName="divPlanningHackshopRoutes">
                <div classNameName="titlesAndDescriptionStepTwo">
                  <div>
                    <h3>2 - Diseño e Inspiración</h3>
                    <p className="about-desc aboutUsDescription paragraphText">
                      Nos inspiramos en diversas páginas de plantas, con personalidades bastante{" "}
                      <span>funny</span>. Llenamos nuestra base de datos con imágenes,
                      descripciones, nombres y precios de TusPlantasOnline, otro sitio web con
                      excelente diseño
                    </p>
                    <h3>3- Pasos a seguir</h3>
                    <p className="about-desc aboutUsDescription paragraphText">
                      Posterior a tener creada nuestra Base de Datos, definimos las rutas básicas y
                      necesarias para poder utilizar nuestra aplicación tanto a nivel de{" "}
                      <span> Backend </span>
                      como <span> Frontend</span>; teniendo especial consideración en colocar que
                      tipo de método tenía cada ruta.
                    </p>
                  </div>
                </div>

                <div classNameName="divContainerImg">
                  <img src="./HackshopMER.png" alt="MERHS" classNameName="imgDiagrama" />
                </div>
              </div>
              <div>
                <div classNameName="divPlanningHackshopRoutesBottom">
                  <div classNameName="divContainerImg">
                    <img src="./HackShopRoutes.png" alt="MERHS" classNameName="imgDiagrama" />
                  </div>
                  <div>
                    <h3>4- Metodología de trabajo</h3>
                    <p className="about-desc aboutUsDescription paragraphText">
                      Organizamos nuestro trabajo utilizando una <span> Metodología Ágil</span> con
                      tres sprints. Cada sprint tenía tareas que se organizaban y desarrollaban
                      individualmente o en grupos, usando <span> Trello</span> para determinar el
                      curso y la finalización de cada una, teniendo siempre tareas pendientes para
                      que cada intregrante pudiese tomar nuevas en caso de terminar con las
                      asignadas.Todo el proyecto se realizó en línea usando Discord.
                    </p>
                    <h3> 5 - Marcos y Tecnologías</h3>
                    <p className="about-desc aboutUsDescription paragraphText">
                      Nuestro proyecto utilizó una base de datos relacional, por ello trabajamos con
                      <span> MySql y Sequelize</span> como persistencia de datos, además de
                      <span> Cloudinary</span> para importar imágenes.
                      <span> NodeJs/Express, React, Redux</span>
                      como nuestros marcos de aplicación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-title-wrap without-tab">
        <h2 className="section-title " id="technologyTitle">
          ¡TECNOLOGíAS <span>UTILIZADAS!</span>
        </h2>
      </div>
      <div className="about-area imageBackgroundSuculenta">
        <div classNameName="containerImageSuculenta">
          <div classNameName="containerTechnology">
            <Carousel
              responsive={responsive}
              infinite={true}
              classNameName="containerSvg"
              draggable={false}
            >
              <div classNameName="containerSvgName">
                <FaReact classNameName="reactSvg" />
                <p>React</p>
              </div>
              <div classNameName="containerSvgName">
                <SiRedux classNameName="reduxSvg" />
                <p>Redux</p>
              </div>
              <div classNameName="containerSvgName">
                <TbBrandJavascript classNameName="javascriptSvg" />
                <p>Javacript</p>
              </div>
              <div classNameName="containerSvgName">
                <FaTrello classNameName="trelloSvg" />
                <p>Trello</p>
              </div>
              <div>
                <FaNode classNameName="nodeJsSvg" />
                <p>Node Js</p>
              </div>
              <div classNameName="containerSvgName">
                <SiBootstrap classNameName="bootstrapSvg" />
                <p>Bootstrap</p>
              </div>
              <div classNameName="containerSvgName">
                <SiMysql classNameName="mysqlSvg" />
                <p>MySql</p>
              </div>
              <div>
                <SiCss3 classNameName="cssSvg" />
                <p>Css</p>
              </div>
              <div>
                <FaGithub classNameName="githubSvg" />
                <p>GitHub</p>
              </div>
              <div>
                <SiSequelize classNameName="sequelizeSvg" />
                <p>Sequelize</p>
              </div>
              <div>
                <FaFigma classNameName="figmaSvg" />
                <p>Figma</p>
              </div>
              <div>
                <FaHtml5 classNameName="htmlSvg" />
                <p>Html</p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="team-area  teamContainer">
        <div className="container">
          <div className="section-title-wrap without-tab">
            <h2 className="section-title">¡Nuestro Team!</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6 pt-sm-5">
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="./AleCircle.png"
                    alt="Team Member"
                    classNameName="teamImageProfile primary-img"
                  />
                  <img
                    src="./fotoAle-modified.png"
                    alt="Team Member"
                    classNameName="teamImageProfile secondary-img"
                  />
                  <div className="inner-content">
                    <h2 className="team-member-name">Alejandro Raíz</h2>
                    <div className="social-link with-border">
                      <ul>
                        <li>
                          <Link
                            to="https://github.com/aleraiz"
                            data-tippy="github"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaGithub />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/alejandro-raiz/"
                            data-tippy="linkedin"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaLinkedinIn />
                          </Link>
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
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h2 className="team-member-name mb-0">Alejandro Raíz</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 pt-5 pt-sm-0">
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="./Marco.png"
                    alt="Team Member"
                    classNameName="teamImageProfile primary-img"
                  />
                  <img
                    src="./MarcoPlaya-modified.png"
                    alt="Team Member"
                    classNameName="teamImageProfile secondary-img"
                  />
                  <div className="inner-content">
                    <h2 className="team-member-name">Marco De Luca</h2>
                    <div className="social-link with-border">
                      <ul>
                        <li>
                          <Link
                            to="https://github.com/antondelu"
                            data-tippy="github"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaGithub />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/marcodeluca-dw/"
                            data-tippy="Linkedin"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaLinkedinIn />
                          </Link>
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
                            <i className="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h2 className="team-member-name mb-0">Marco de Luca</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 pt-5">
              <div className="team-item">
                <div className="team-img">
                  <img
                    src="./imageCircleRomina.png"
                    alt="Team Member"
                    classNameName="teamImageProfile primary-img"
                  />
                  <img
                    src="./paracaidismo.png"
                    alt="Team Member"
                    classNameName="teamImageProfile secondary-img"
                  />
                  <div className="inner-content">
                    <h2 className="team-member-name">Romina Dos Santos</h2>
                    <div className="social-link with-border">
                      <ul>
                        <li>
                          <Link
                            to="https://github.com/RominaDosSantos"
                            data-tippy="github"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaGithub />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="https://www.linkedin.com/in/romina-dos-santos/"
                            data-tippy="Linkedin"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <FaLinkedinIn />
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            data-tippy="Pinterest"
                            data-tippy-inertia="true"
                            data-tippy-animation="shift-away"
                            data-tippy-delay="50"
                            data-tippy-arrow="true"
                            data-tippy-theme="sharpborder"
                          >
                            <i className="fa fa-pinterest"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="team-content">
                  <h2 className="team-member-name mb-0">Romina Dos Santos</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-with-counter" id="counterBootcamp">
        <div className="counter-area">
          <div className="container">
            <h2 className="counter-title">
              En este bootcamp de dedicacion full-time <span>hemos echo</span>:
            </h2>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="counter-item">
                  <div className="count-wrap">
                    <h3 className="count mb-0" data-counterup-time="500">
                      3
                    </h3>
                  </div>
                  <h4 className="count-title mb-0">Meses</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="counter-item">
                  <div className="count-wrap">
                    <h3 className="count mb-0" data-counterup-time="1000">
                      600
                    </h3>
                    <span className="prefix">+</span>
                  </div>
                  <h4 className="count-title mb-0">Horas</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 pt-4 pt-md-0">
                <div className="counter-item">
                  <div className="count-wrap">
                    <h3 className="count mb-0" data-counterup-time="1500">
                      12
                    </h3>
                    <span className="prefix">+</span>
                  </div>
                  <h4 className="count-title mb-0">Lenguajes</h4>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6 pt-4 pt-lg-0">
                <div className="counter-item">
                  <div className="count-wrap">
                    <h3 className="count mb-0" data-counterup-time="2000">
                      15
                    </h3>
                    <span className="prefix">+</span>
                  </div>
                  <h4 className="count-title mb-0">Proyectos</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
