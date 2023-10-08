import React from "react";
import fadeWhenScroll from "../../common/fadeWhenScroll";
import Background from "../../../public/assets/purbasha/factory/factory1.jpg";
const WorksHeader = ({ sliderRef }) => {
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .capt .parlx"));
  }, []);
  return (
    <header
      ref={sliderRef}
      style={{backgroundImage: `url(${Background.src})`, backgroundRepeat:'no-repeat', backgroundSize:'cover',}}
      className="works-header fixed-slider hfixd valign sub-bg "
    >
      <div 
      style={{backgroundColor:'black',opacity:'20%' ,height:'80vh',width:'100vw',backgroundSize:'cover',paddingTop:'15%'}} 
      >
        <div className="row justify-content-center align-content-center">
          <div className="col-lg-7 col-md-9 static">
            <div className="capt">
              <div className=" text-center">
                <h1 style={{color:'white',}}>amazing works</h1>
                <p style={{color:'white'}}>
                  Creativity involves breaking out of expected &amp; repeatable
                  patterns in order to look at things in different way than ever
                  before.
                </p>
              </div>

              <div className="bactxt custom-font valign">
                {/* <span className="full-width">Works</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WorksHeader;
