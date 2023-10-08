/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Link } from "react-scroll";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";
import logo from "../../../public/assets/purbasha/logo.png";


const NavbarArch = ({ navbarRef, theme }) => {
  
  return (
    <nav style={{background: 'black'}} className="navbar navbar-expand-lg " ref={navbarRef}>
      <div className="container">
        
        {/* <h5 style={{backgroundColor:'green',borderRadius:'10%', color:'white',textAlign:'center',paddingRight:'10px',paddingLeft:'10px',marginLeft:'10px'}}  href="/">
         Purbasha
        </h5> */}

        <img style={{ width: "80px" }} src={logo.src} alt=""  />

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
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                data-scroll-nav="0"
              >
                Products
              </span>
              
              <div className="dropdown-menu">
                <Link
                  className="dropdown-item"
                  href={`/underwear`}
                >
                  Underwear
                </Link>
                <Link
                  className="dropdown-item"
                  href={`/t-shirt`}
                >
                  T-Shirt
                </Link>
                <a
                  className="dropdown-item"
                  href={``}
                >
                  Polo Shirt
                </a>
                <a
                  className="dropdown-item"
                  href={``}
                >
                  Sweat Shirt
                </a>
                <a
                  className="dropdown-item"
                  href={``}
                >
                  Hoodie
                </a>

              </div>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="po-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Works
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="team-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="testimonials-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="blog-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="contact-arch"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarArch;
