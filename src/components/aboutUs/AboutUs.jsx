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

import "./styles.css";

export const AboutUs = () => {
  return (
    <>
      <div class="about-area">
        <div className="containerImageAboutUs"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="about-content">
                <div>
                  <h2 class="about-title">
                    Sobre el <span>Proyecto</span>
                  </h2>
                  <p class="about-desc aboutUsDescription">
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
      <div class="about-area section-space-top-95">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div className="divContainerHackshop">
                <div>
                  <h2 class="about-title hackshopTitle">
                    ¿Cómo nació <span>Hackshop?</span>
                  </h2>
                </div>
                <div className="divPlanningHackshopPoint2">
                  <div>
                    <img src="./HackShopRoutesFrontEdit.png" alt="MERHS" className="imgDiagrama" />
                  </div>
                  <div>
                    <div>
                      <h3>1 - Concepción del proyecto y ERD</h3>
                      <p class="about-desc aboutUsDescription">
                        Comenzamos en principio definiendo crear todo el Backend antes de entrar al
                        Frontend, con un listado de las cinco principales tareas. Luego, procedimos
                        a hacer un diagrama de relaciones de entidad cuidadosamente pensado. Aquí
                        definimos las principales relaciones entre las siguientes entidades: Client,
                        Administrator, Category, Product y Order.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="divPlanningHackshopRoutes">
                  <div>
                    <h3>2 - Diseño e Inspiración</h3>
                    <p class="about-desc aboutUsDescription">
                      Utilizamos el template de Pronia, un sitio web de plantas con una personalidad
                      bastante funny. Llenamos nuestra base de datos con imágenes, descripciones,
                      nombres y precios de TusPlantasOnline, otro sitio web con excelente diseño
                    </p>
                    <h3>3- Pasos a seguir</h3>
                    <p class="about-desc aboutUsDescription">
                      Posterior a tener creada nuestra Base de Datos, definimos las rutas básicas y
                      necesarias para poder utilizar nuestra aplicación tanto a nivel de Backend
                      como Frontend; teniendo especial consideración en colocar que tipo de método
                      tenía cada ruta.
                    </p>
                  </div>
                  <div className="divContainerImg">
                    <img src="./MERHackshop.png" alt="MERHS" className="imgDiagrama" />
                  </div>
                </div>
              </div>
              <div>
                <div className="divPlanningHackshopRoutesBottom">
                  <div className="divContainerImg">
                    <img src="./HackShopRoutes.png" alt="MERHS" className="imgDiagrama" />
                  </div>
                  <div>
                    <h3>4- Metodología de trabajo</h3>
                    <p class="about-desc aboutUsDescription">
                      Organizamos nuestro trabajo utilizando una Metodología Ágil con tres sprints.
                      Cada sprint tenía tareas que se organizaban y desarrollaban individualmente o
                      en grupos, usando Trello para determinar la finalización de las tareas,
                      teniendo siempre tareas pendientes para que cada intregrante pudiese tomar
                      nuevas en caso de terminar con las asignadas.Todo el proyecto, se realizó en
                      línea usando Discord.
                    </p>
                    <h3> 5 - Marcos y Tecnologías</h3>
                    <p class="about-desc aboutUsDescription">
                      Nuestro proyecto utilizó una base de datos relacional, por ello trabahamos con
                      MySql y Sequelize, además de cloudinary para importar imágenes. Express,
                      React, Redux y Node como nuestros marcos de aplicación. En el desarrollo
                      utilizamos tecnologías conocidas que rodean este stack, como React Bootstrap,
                      Hooks, etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-title-wrap without-tab">
        <h2 class="section-title">¡TECNOLOGíAS UTILIZADAS!</h2>
      </div>
      <div class="about-area imageBackgroundSuculenta">
        <div className="containerImageSuculenta">
          {/* <div>
            <h2>
              Tecnologias <span>usadas:</span>
            </h2>
          </div> */}
          <div className="containerTechnology">
            <ul className="containerSvg">
              <li className="containerSvgName">
                <FaReact className="reactSvg" />
                <p>React</p>
              </li>
              <li className="containerSvgName">
                <SiRedux className="reduxSvg" />
                <p>Redux</p>
              </li>
              <li className="containerSvgName">
                <TbBrandJavascript className="javascriptSvg" />
                <p>Javacript</p>
              </li>
            </ul>
            <ul className="containerSvg">
              <li className="containerSvgName">
                <FaTrello className="trelloSvg" />
                <p>Trello</p>
              </li>
              <li>
                <FaNode className="nodeJsSvg" />
                <p>Node Js</p>
              </li>
              <li>
                <FaGithub className="githubSvg" />
                <p>GitHub</p>
              </li>
            </ul>
            <ul className="containerSvg">
              <li className="containerSvgName">
                <SiMysql className="mysqlSvg" />
                <p>MySql</p>
              </li>
              <li>
                <SiCss3 className="cssSvg" />
                <p>Css</p>
              </li>
              <li>
                <FaHtml5 className="htmlSvg" />
                <p>Html</p>
              </li>
            </ul>
            <ul className="containerSvg">
              <li className="containerSvgName">
                <SiBootstrap className="bootstrapSvg" />
                <p>Bootstrap</p>
              </li>
              <li>
                <SiSequelize className="sequelizeSvg" />
                <p>Sequelize</p>
              </li>
              <li>
                <FaFigma className="figmaSvg" />
                <p>Figma</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="team-area section-space-top-100 teamContainer">
        <div class="container">
          <div class="section-title-wrap without-tab">
            <h2 class="section-title">¡Nuestro Team!</h2>
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-6 pt-sm-5">
              <div class="team-item">
                <div class="team-img">
                  <img
                    src="assets/images/about/team/1-1-270x270.png"
                    alt="Team Member"
                    className="teamImageProfile"
                  />
                  <div class="inner-content">
                    <h2 class="team-member-name">Alejandro Raíz</h2>
                    <div class="social-link with-border">
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
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Alejandro Raíz</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 pt-5 pt-sm-0">
              <div class="team-item">
                <div class="team-img">
                  <img src="./Marco.png" alt="Team Member" className="teamImageProfile" />
                  <div class="inner-content">
                    <h2 class="team-member-name">Marco De Luca</h2>
                    <div class="social-link with-border">
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
                            <i class="fa fa-pinterest"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Marco de Luca</h2>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 pt-5">
              <div class="team-item">
                <div class="team-img">
                  <img
                    src="./imageCircleRomina.png"
                    alt="Team Member"
                    className="teamImageProfile primary-img"
                  />
                  <img
                    src="./paracaidismo.png"
                    alt="Team Member"
                    className="teamImageProfile secondary-img"
                  />
                  <div class="inner-content">
                    <h2 class="team-member-name">Romina Dos Santos</h2>
                    <div class="social-link with-border">
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
                            <i class="fa fa-pinterest"></i>
                            {/* <FaLinkedin /> */}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="team-content">
                  <h2 class="team-member-name mb-0">Romina Dos Santos</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner-with-counter" id="counterBootcamp">
        <div class="counter-area">
          <div class="container">
            <h2 class="counter-title">
              En este bootcamp de dedicacion full-time <span>hemos echo</span>:
            </h2>
            <div class="row">
              <div class="col-lg-3 col-md-4 col-6">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="500">
                      3
                    </h3>
                    {/* <span class="prefix">+</span> */}
                  </div>
                  <h4 class="count-title mb-0">Meses</h4>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="1000">
                      600
                    </h3>
                    <span class="prefix">+</span>
                  </div>
                  <h4 class="count-title mb-0">Horas</h4>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 pt-4 pt-md-0">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="1500">
                      12
                    </h3>
                    <span class="prefix">+</span>
                  </div>
                  <h4 class="count-title mb-0">Lenguajes</h4>
                </div>
              </div>
              <div class="col-lg-3 col-md-4 col-6 pt-4 pt-lg-0">
                <div class="counter-item">
                  <div class="count-wrap">
                    <h3 class="count mb-0" data-counterup-time="2000">
                      15
                    </h3>
                    <span class="prefix">+</span>
                  </div>
                  <h4 class="count-title mb-0">Proyectos</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
