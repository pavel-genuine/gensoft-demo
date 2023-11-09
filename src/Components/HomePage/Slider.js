import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import img1 from "../../assets/imgs/page-1.jpg"
import img2 from "../../assets/imgs/page-2.jpg"
import img3 from "../../assets/imgs/page-3.jpg"
import img4 from "../../assets/imgs/page-4.jpg"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='mt-20'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                 injectStyles={ [
                    `
                      .swiper-button-next,
                      .swiper-button-prev {
                        background-color: white;
                        padding: 8px 16px;
                        border-radius: 100%;
                        border: 2px solid black;
                        color: red;
                      }
                      .swiper-pagination-bullet{
                        width: 40px;
                        height: 40px;
                        background-color: red;
                      }
                  `
                  ]}

                
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=''>
                        <img className='object-fit h-[100vh]' src={img1.src} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='object-fit h-[100vh]' src={img2.src} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=''>
                        <img className='object-fit h-[100vh]' src={img3.src} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[100vh]'>
                        <img className='object-fit' src={img4.src} alt="" />
                    </div>
                </SwiperSlide>
             

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}
