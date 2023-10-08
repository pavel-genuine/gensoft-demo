import React from "react";
import LightTheme from "../layouts/Light";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import WorksHeader from "../components/Works-header/works-header";
import PoloShirtWorkStyle from "../components/PoloShirtWorkStyle/PoloShirtWorkStyle";
import IntroPoloShirt from "../components/IntroPoloShirt/IntroPoloShirt";

const WorksLight = () => {
  const fixedHeader = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedHeader.current) {
        var slidHeight = fixedHeader.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    
  }, [fixedHeader, MainContent, navbarRef]);

  return (
    <LightTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>

      <IntroPoloShirt blackStar />
      <div ref={MainContent} className="main-content">
        <PoloShirtWorkStyle />
   
      </div>
    </LightTheme>
  );
};

export default WorksLight;