/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from '../../data/app.json'

const FooterArch = () => {
  return (
    <footer style={{zIndex:10}} className="sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5 className=" text-white">Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6 className=" text-white">Officeal Address</h6>
                    <p>Dhaka, Bangladesh</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6 className=" text-white">Email Us</h6>
                    <p>support@gmail.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6 className=" text-white">Call Us</h6>
                    <p>+0881111111</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
   
          <div className="col-lg-4">
            <div className="item">
            
              <div className="social">
                <a href="#0">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#0">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2023, Purbasha. Made with passion by
                  <a href="#0" className="main-color">
                  GenSoft
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterArch;
