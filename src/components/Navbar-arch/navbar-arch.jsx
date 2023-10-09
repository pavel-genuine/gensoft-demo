/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { Link } from "react-scroll";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import logo from "../../../public/assets/purbasha/logo.png";
import { useState } from "react";

const NavbarArch = ({ navbarRef, theme }) => {
  const [selectedTag, setSelectedTag] = useState(" ");

  const handleScrollProduct = () => {
    const element = document.getElementById("product");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollAbout = () => {
    const element = document.getElementById("about");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollTeam = () => {
    const element = document.getElementById("team");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollProject = () => {
    const element = document.getElementById("project");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollTestimonials = () => {
    const element = document.getElementById("testimonials");

    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{ background: "black" }}
      className="navbar navbar-expand-lg "
      ref={navbarRef}
    >
      <div className="container">
        {/* <h5 style={{backgroundColor:'green',borderRadius:'10%', color:'white',textAlign:'center',paddingRight:'10px',paddingLeft:'10px',marginLeft:'10px'}}  href="/">
         Purbasha
        </h5> */}

        <Link href={"/"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              style={{ width: "80px", marginRight: "20px" }}
              src={logo.src}
              alt=""
            />
            <div className="text-white">
              <h4>PURBASHA </h4>
              <h6>Composite Tex Ltd.</h6>
            </div>
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={handleMobileDropdown}
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href={"/"}>
                <p className="nav-link nav-item">Home</p>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                data-scroll-nav="0"
                onClick={() => {
                  // handleScrollProduct();
                }}
              >
                Products
              </span>

              <div className="dropdown-menu">
                <Link href={`/underwear`}>
                  <p className="dropdown-item">Underwear</p>
                </Link>
                <Link href={`/t-shirt`}>
                  <p className="dropdown-item">T-Shirt</p>
                </Link>
                <Link href={`/polo-shirt`}>
                  <p className="dropdown-item"> Polo Shirt</p>
                </Link>
                <Link href={`/sweat-shirt`}>
                  <p className="dropdown-item"> Sweat Shirt</p>
                </Link>
                <Link href={`/hoodie`}>
                  <p className="dropdown-item"> Hoodie</p>
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <p
                className="nav-link"
                onClick={() => {
                  handleScrollAbout();
                }}
              >
                About
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link"
                onClick={() => {
                  handleScrollProject();
                }}
              >
                Projects
              </p>
            </li>
            <li className="nav-item">
              <p
                className="nav-link"
                onClick={() => {
                  handleScrollTeam();
                }}
              >
                Team
              </p>
            </li>

            <li className="nav-item">
              <p
                className="nav-link"
                onClick={() => {
                  handleScrollTestimonials();
                }}
              >
                Testimonials
              </p>
            </li>

            <li className="nav-item">
              <Link href={"/contact"}>
                <p className="nav-link">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
