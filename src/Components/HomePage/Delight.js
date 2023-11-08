import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img6 from "../../assets/imgs/page-6.jpg"
import battery from "../../assets/imgs/Battery.png"
import energy from "../../assets/imgs/energy.png"
import foodie from "../../assets/imgs/Foodie.png"

// import required modules


export default function Delight() {
    return (
        <div >
            <div className='relative'>
                <img className='w-[100vw]  ' src={img6.src} alt="" />
                <div className=''>
                <div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}

                        className=" absolut top-0'"
                    >
                        <SwiperSlide>
                            <div>
                                <img className='w-[200px]' src={battery.src} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <img className='w-[200px]' src={energy.src} alt="" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                                <img className='w-[200px]' src={energy.src} alt="" />
                            </div>
                        </SwiperSlide>
                       
                    </Swiper>
                </div>
            </div>
            </div>
           
        </div>
    );
}
