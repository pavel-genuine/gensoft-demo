/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import LightTheme from "../layouts/Light";
import ContactHeader from "../components/Contact-header/contact-header";
import ContactForm from "../components/Contact-form/contact-form";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  return (
    <LightTheme>
      <Navbar nr={navbarRef} lr={logoRef} theme="themeL" />
      <ContactHeader blackStar />
      <div className="main-content">
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21583.93593889504!2d90.36838743033927!3d24.30378068777938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756719593294aaf%3A0x5555d7767b00aeec!2sPurbasha%20Composite%20Tex%20Ltd.!5e0!3m2!1sen!2sbd!4v1696835233143!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </LightTheme>
  );
};

export default Contact;
