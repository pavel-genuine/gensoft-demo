/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import { Nav, Tab } from "react-bootstrap";
import Link from "next/link";

import React from "react";
import Head from "next/head";
import LightTheme from "../layouts/Light";
import Team3 from "../components/Team3/team3";
import Intro5 from "../components/Intro5/intro5";
import AboutUs6 from "../components/About-us6/about-us6";
import Services6 from "../components/Services6/services6";
import CaseStudy from "../components/Case-study/case-study";
import NavbarArch from "../components/Navbar-arch/navbar-arch";
import LatestNews from "../components/Latest-news/latest-news";
import WorksStyle5 from "../components/Works-style5/works-style5";
import FooterArch from "../components/Footer-arch/footer-arch.jsx";
import ContactArch from "../components/Contact-arch/contact-arch";
import TestimonialsArch from "../components/Testimonials-arch/testimonials-arch";
import SliderOne from "../components/SliderOne/SliderOne";
import md from "../../public/assets/purbasha/person/md2.jpg";
import factory1 from "../../public/assets/purbasha/factory/factory1.jpg";
import factory2 from "../../public/assets/purbasha/factory/factory2.jpg";
import factory3 from "../../public/assets/purbasha/factory/factory3.jpg";

// import 'swiper/css'
import Slider from "react-slick";
import { sliderProps } from "../pages/homepage/purbasha-new";

const Homepage = () => {
  const navbarRef = React.useRef(null);
 
  return (
    <>
      <Head>
        <link rel="stylesheet" defer href="/css/arch-skin-light.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Khand:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LightTheme>
       
        {/* <Intro5 /> */}
        <SliderOne></SliderOne>
        <AboutUs6 />

        {/* <Services6 /> */}

        <section className="features-section gray-bg pt-40 pb-40">
          <div className="container-fluid">
            {/*====== Project Slider ======*/}
            <Slider
              {...sliderProps.projectsSliderFour}
              className="projects-slider-four wow fadeInUp"
              data-wow-delay=".2s"
            >
              {/*====== Project Item ======*/}
              <div className="single-project-item-four">
                <div className="project-img">
                  <img
                    src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Project Image"
                    style={{ height: "520px" }}
                  />
                  <div className="hover-content">
                    <div className="number">01</div>
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>Underwear</a>
                        </Link>
                      </h3>
                      <p>International Standard</p>
                      <Link legacyBehavior href="/">
                        <a className="icon-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>Underwear</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/*====== Project Item ======*/}
              <div className="single-project-item-four">
                <div className="project-img">
                  <img
                    src="https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Project Image"
                    style={{ height: "520px" }}
                  />
                  <div className="hover-content">
                    <div className="number">02</div>
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>T-Shirt</a>
                        </Link>
                      </h3>
                      <p>International Standard</p>
                      <Link legacyBehavior href="/">
                        <a className="icon-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>T-Shirt</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/*====== Project Item ======*/}
              <div className="single-project-item-four">
                <div className="project-img">
                  <img
                    src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Project Image"
                    style={{ height: "520px" }}
                  />
                  <div className="hover-content">
                    <div className="number">03</div>
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>Polo Shirt</a>
                        </Link>
                      </h3>
                      <p>International Standard</p>
                      <Link legacyBehavior href="/">
                        <a className="icon-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>Polo Shirt</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/*====== Project Item ======*/}
              <div className="single-project-item-four">
                <div className="project-img">
                  <img
                    src="https://images.pexels.com/photos/3735633/pexels-photo-3735633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Project Image"
                    style={{ height: "520px" }}
                  />
                  <div className="hover-content">
                    <div className="number">04</div>
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>Sweat Shirt</a>
                        </Link>
                      </h3>
                      <p>International Standard</p>
                      <Link legacyBehavior href="/">
                        <a className="icon-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>Sweat Shirt</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-project-item-four">
                <div className="project-img">
                  <img
                    src="https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Project Image"
                    style={{ height: "520px" }}
                  />
                  <div className="hover-content">
                    <div className="number">05</div>
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>Hoodie</a>
                        </Link>
                      </h3>
                      <p>International Standard</p>
                      <Link legacyBehavior href="/">
                        <a className="icon-btn">
                          <i className="fal fa-long-arrow-right" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="text text-white">
                      <h3 className="title">
                        <Link legacyBehavior href="/">
                          <a>Hoodie</a>
                        </Link>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <WorksStyle5 />

        <section
          className="choose-bg-section bg_cover p-r z-1 pt-100 pb-100"
          style={{ backgroundImage: `url(${factory1.src})` }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-9 col-lg-12">
                {/*====== Section Title  ======*/}
                <div className="section-title text-black text-center mb-50 wow fadeInDown">
                  <span className="sub-title text text-white">
                    <i className="flaticon-Fashion" />
                    Why Choose Us
                  </span>
                  <h2 className="text text-white">We’re Awards Winning RMG</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/*====== Choose Wrapper  ======*/}
                <div className="choose-wrapper wow fadeInUp">
                  <div className="row">
                    <div className="col-lg-7">
                      {/*====== Choose Tab Pane  ======*/}
                      <Tab.Container defaultActiveKey={"tab1"}>
                        <div className="choose-tab-pane">
                          {/*====== Choose Tab  ======*/}
                          <div className="choose-nav-tab">
                            <Nav as={"ul"} className="nav">
                              <li className="nav-item">
                                <Nav.Link
                                  as="button"
                                  className="nav-link"
                                  data-toggle="tab"
                                  eventKey="tab1"
                                >
                                  We’re Since 1998!
                                </Nav.Link>
                              </li>
                              <li className="nav-item">
                                <Nav.Link
                                  as="button"
                                  className="nav-link"
                                  data-toggle="tab"
                                  eventKey="tab2"
                                >
                                  Philosophy
                                </Nav.Link>
                              </li>
                            </Nav>
                          </div>
                          {/*====== Tab Content  ======*/}
                          <Tab.Content className="tab-content">
                            <Tab.Pane className="tab-pane" eventKey="tab1">
                              <div className="choose-content-box">
                                <p>
                                  Sed ut perspiciatis unde omnis natus error
                                  voluptatem accusantium doloremque laudantium,
                                  totam rem aperia eaque quae abillo inventore
                                  veritatis architecto beatae vitae dicta sunt
                                  explicabo.
                                </p>
                                <div className="thumb-content">
                                  <img
                                    src={factory3.src}
                                    alt="Image"
                                    style={{ width: "170px", height: "200px" }}
                                  />
                                  <ul className="check-style-one">
                                    <li>
                                      <i className="far fa-check" />
                                      Trusted RMG Partners
                                    </li>
                                    <li>
                                      <i className="far fa-check" />
                                      Shipping Cost Low
                                    </li>
                                    <li>
                                      <i className="far fa-check" />
                                      Professional Team Member
                                    </li>
                                    <li>
                                      <i className="far fa-check" />
                                      Awards Winning Company
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane className="tab-pane" eventKey="tab2">
                              <div className="choose-content-box">
                                <p>
                                  Sed ut perspiciatis unde omnis natus error
                                  voluptatem accusantium doloremque laudantium,
                                  totam rem aperia eaque quae abillo inventore
                                  veritatis architecto beatae vitae dicta sunt
                                  explicabo.
                                </p>
                                <div className="thumb-content">
                                  <img
                                    src={factory2.src}
                                    alt="Image"
                                    style={{ width: "170px", height: "200px" }}
                                  />
                                  <ul className="check-style-one">
                                    <li>
                                      <i className="far fa-check" />
                                      Trusted RMG Partners
                                    </li>
                                    <li>
                                      <i className="far fa-check" />
                                      Shipping Cost Low
                                    </li>
                                    <li>
                                      <i className="far fa-check" />
                                      Professional Team Member
                                    </li>
                                    <li>
                                      <i className="far fa-check" />
                                      Awards Winning Company
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </Tab.Container>
                    </div>
                    <div className="col-lg-5">
                      {/*====== Choose Image Box  ======*/}
                      <div className="choose-image-box">
                        <img
                          src={md.src}
                          alt="Choose Image"
                          style={{ width: "400px", height: "500px" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CaseStudy />
        <Team3 />
        <TestimonialsArch />
        {/* <LatestNews /> */}
        {/* <ContactArch /> */}
 
      </LightTheme>
    </>
  );
};

export default Homepage;
