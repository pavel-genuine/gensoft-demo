/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import knit1 from '../../../public/assets/purbasha/factory/knit2.jpg'
import knit2 from '../../../public/assets/purbasha/factory/knit3.jpg'

const WorksStyle5 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio po-arch section-padding pb-70" id="project">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h2 className="wow fadeIn" data-wow-delay=".3s">
                Projects
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter custom-font wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Knit</span>
              <span data-filter=".web">Accessories</span>
              <span data-filter=".graphic">Printing</span>
            </div>
          </div>

          <div className="gallery full-width">


          <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="">
                  <a className="imago wow">
                  <img style={{height:'550px'}} src={knit1.src} alt="image" />

                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              
              <div className="cont">
                <h5>KNIT PROJECT 1</h5>
                <span className=" ">
                  <Link href="">Project Tag</Link>,
                  <Link href="">Purbasha</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="">
                  <a className="imago wow">
                  <img style={{height:'550px'}} src={knit2.src} alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>KNIT PROJECT 2</h5>
                <span className=" ">
                  <Link href="">Project Tag</Link>,
                  <Link href="">Purbasha</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="">
                  <a className="imago wow">
                  <img style={{height:'550px'}} src="https://images.pexels.com/photos/4614227/pexels-photo-4614227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
              <h5>KNIT PROJECT 3</h5>
                <span className=" ">
                  <Link href=" ">Project Tag</Link>,
                  <Link href=" ">Purbasha</Link>
                </span>
              </div>
            </div>


            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href={``}>
                  <a className="imago wow">
                    <img style={{height:'550px'}} src="https://i0.wp.com/textiletutorials.com/wp-content/uploads/2018/06/Printing-factory-in-Bangladesh.jpg?resize=650%2C400&ssl=1" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5> Printing 1</h5>
                <span className=" ">
                  <Link href="">Project Tag</Link>,
                  <Link href="">Purbasha</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="">
                  <a className="imago wow">
                    <img style={{height:'550px'}} src="https://bextex.net/themes/bextex/assets/images/garments-accessories.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>ACCESSORIES PROJECT 1</h5>
                <span className=" ">
                  <Link href="">Project Tag</Link>,
                  <Link href="">Purbasha</Link>
                </span>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <Link href="">
                  <a className="imago wow">
                    <img style={{height:'550px'}} src="https://i.ytimg.com/vi/k4lBCRgU6vA/maxresdefault.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h5>ACCESSORIES PROJECT 2</h5>
                <span className=" ">
                  <Link href="">Project Tag</Link>,
                  <Link href="">Purbasha</Link>
                </span>
              </div>
            </div>

          

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle5;
