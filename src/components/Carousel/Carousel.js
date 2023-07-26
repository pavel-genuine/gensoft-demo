import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, EffectFade ,Pagination} from "swiper";
import marble from '../../../public/assets/imgs/marble.jpg'
import marblePortugal3 from '../../../public/assets/imgs/marblePortugal3.jpeg'
import marblePortugal2 from '../../../public/assets/imgs/marblePortugal2.jpeg'
import marbleIran from '../../../public/assets/imgs/marbleIran.jpg'
import marbleIran1 from '../../../public/assets/imgs/marbleIran1.jpeg'
import marbleIran2 from '../../../public/assets/imgs/marbleIran3.jpeg'
// import marbleItaly from '../../assets/imgs/marbleItaly.jpg'
import marbleItaly from '../../../public/assets/imgs/graniteItaly.jpg'
import marbleItaly2 from '../../../public/assets/imgs/marbleItaly2.jpeg'
import nut from '../../../public/assets/Hero/betelnut.jpg'
import nut2 from '../../../public/assets/imgs/nut.jpeg'
import ginger from '../../../public/assets/imgs/ginger2.jpg'

import mung from '../../../public/assets/Hero/mung.webp'
import tamarind from '../../../public/assets/imgs/Tamarind-seeds.jpg'

export const slides = [


    {
        description: 'Fresh Ginger From Thailand.',
        des: 'Fresh Ginger ',
        url: ginger.src

    },

    {
        description: 'Betel Nut (whole) From Thailand.',
        des: 'Betel Nut (whole)',
        url: nut2.src
    },
    {
        description: 'Betel Nut (split) From Thailand.',
        des: 'Betel Nut (split)',

        url: nut.src
    },
    {
        description: 'Mung Bean From Thailand.',
        des: 'Mung Bean',

        url: mung.src
    },
    {
        description: 'Tamarind Seed From Thailand.',
        des: 'Tamarind Seed',

        url: tamarind.src
    },

    {
        description: 'Best Marble Block From Portugal.',
        des: 'Marble Portugal',

        url: marble.src
    },
    {
        description: 'Best Marble Block From Portugal.',
        des: 'Marble Portugal',

        url: marblePortugal2.src
    },
    {
        description: 'Best Marble Block From Portugal.',
        des: 'Marble Portugal',

        url: marblePortugal3.src
    },

    {
        description: 'Best Marble Block From Iran.',
        des: 'Marble Iran',

        url: marbleIran.src
    },

    {
        description: 'Best Marble Block From Iran.',
        des: 'Marble Iran',

        url: marbleIran2.src
    },
    {
        description: 'Best Marble Block From Italy.',
        url: marbleItaly2.src
    },
    {
        description: 'Best Marble Block From Italy.',
        des: 'Marble Italy',
        url: marbleItaly.src
    },

    {
        description: 'Introduction',
        des: 'Introduction',

        url: 'https://images.unsplash.com/photo-1523215713844-973398580b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
    {
        description: 'Contact',
        des: 'Contact',

        url: 'https://images.unsplash.com/photo-1523215713844-973398580b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    },
];

  
const SliderOneData = [
    {
      image:"https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  
      subTitle: "WELCOME TO Purbasha",
      title: "RMG Leader 1.",
      button: {
        label: "DISCOVER MORE",
        url: "/about"
      }
    },
    {
      image:  "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ,
      subTitle: "WELCOME TO Purbasha2",
      title: "RMG Leader 2.",
      button: {
        label: "DISCOVER MORE",
        url: "/about"
      }
    },
    {
      image: "https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ,
      subTitle: "WELCOME TO Purbasha3",
      title: "RMG Leader 3.",
      button: {
        label: "DISCOVER MORE",
        url: "/about"
      }
    }
  ];
  
SwiperCore.use([Autoplay, Navigation, EffectFade]);

const SliderNew = () => {

  const mainSlideOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    navigation: {
      nextEl: "#main-slider-next",
      prevEl: "#main-slider-prev"
    },
    autoplay: {
      delay: 5000
    },
    
  };


  
  return (
    <section className="main-slider">
      <Swiper 

      // direction={'vertical'}
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl: "#main-slider-next",
          prevEl: "#main-slider-prev"
        }}
        modules={[Autoplay, Navigation,Pagination]}
        effect={'fade'}
      
      
      >
        {slides.map(({ url,description }, index) => (
          <SwiperSlide key={index}>
            <div
              className="image-layer2"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
            <div style={{backgroundColor:'#00000025',zIndex:10,height:'100vh',width:'100vw',display:'flex',justifyContent:'center',alignItems:'center'}} className="">
              <div>
                <div   className="text-center">
                  <h3 style={{paddingTop:'80px'}} className="main-slider__title2">{description}</h3>
             
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" id="main-slider-prev">
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="swiper-button-next" id="main-slider-next">
          <i className="fa fa-angle-right"></i>
        </div>
      </Swiper>
    </section>
  );
};

export default SliderNew
