import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import img1 from "../../assets/imgs/page1.jpg"
import img2 from "../../assets/imgs/page2.jpg"
import img3 from "../../assets/imgs/page3.jpg"
import img4 from "../../assets/imgs/page4.jpg"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider2() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                

                
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
                    <div className=''>
                        <img className='object-fit h-[100vh]' src={img4.src} alt="" />
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
