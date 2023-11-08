import { motion } from "framer-motion"
import { Box, Button, IconButton } from '@mui/material'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react';

import img1 from '../../assets/imgs/banner_1.jpg'

import img2 from '../../assets/imgs/banner_2.jpg'
import img3 from '../../assets/imgs/banner_3.jpg'
import img4 from '../../assets/imgs/banner_4.jpg'

import line1 from '../../assets/imgs/Line-01.png'
import line2 from '../../assets/imgs/Line-02.png'
import line3  from '../../assets/imgs/Line-03.png'
import line4  from '../../assets/imgs/Line-04.png'



import Image from 'next/image'
// import Sound from 'react-sound';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';



import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import IconButton from '@mui/material/IconButton';

export const slides = [


    {
        description: 'Origin Greece',
        product: 'Gala Apple',
        des: '18 kg carton box',
        url: img1.src,
        line:line1

    },
    {
        description: 'Origin Greece',
        product: 'Gala Apple',
        des: '18 kg carton box.',
        url: img2.src,
        line:line2

    },
    {
        description: 'Origin Greece',
        product: 'Gala Apple',
        des: '18 kg carton box',
        url: img3.src,
        line:line3

    },




    {
        description: 'Origin Greece',
        product: 'Valencia Orange',
        des: '18 kg carton box',
        url: img4.src,
        line:line4

    }

];




function Carousel() {


    const [currentIndex, setCurrentIndex] = useState(0);

    const [audioStatus, setAudioStatus] = useState(false);
    const [mouseHover, setMouseHover] = useState('not');

    // const slideCount = 15;
    const duration = 3

    const prevSlide = () => {

        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


    useEffect(() => {


        function cycle(index) {

            setMouseHover('not')
            setTimeout(function () {

                index++;

                goToSlide(index)

                if (index >= slides.length - 1) {
                    index = -1;
                }

                cycle(index);

            }, duration * 1000);
        }

        cycle(-1);


    }, [slides.length])


    console.log(currentIndex, 'ci');

    return (

        <div className="h-[100vh] overflow-hidden">
            <motion.div

                initial={{ opacity: 1, scale: 1.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: duration, delay: 0, repeat: Infinity, repeatDelay: 0 }}

                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className=' h-[100vh] w-[100vw] z-1 bg-center bg-cover duration-500 flex   items-center '
            >


            </motion.div>



            <div className={`absolute top-[40vh] left-[2vw]`}>
                {

                    <div>

                        {

                            <motion.div className='absolute top-[50vh] right-[50vw] overflow-hidden z-10'

                                initial={{ opacity: 1, scale: .1 }}
                                whileInView={{ opacity: 1, scale: 40 }}
                                transition={{ duration: .5, delay: 0, repeat: Infinity, repeatDelay: duration - .5 }}
                            ><div className='w-[50px] h-[50px] rounded-full bg-[black] bg-opacity-30  overflow-hidden'>
                                </div></motion.div>

                        }


                    </div>



                }
            </div>


            {/* <div className=' group-hover:block absolute bottom-16 md:bottom-28 -translate-x-0 translate-y-[-50%]  left-[30vw] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft
                //  onClick={prevSlide} 
                 size={30} />
            </div>
            <div className=' group-hover:block absolute bottom-16 md:bottom-28 -translate-x-0 translate-y-[-50%]  right-[30vw] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight 
                // onClick={nextSlide}
                 size={30} />
            </div> */}

            <div style={{ zIndex: 0 }} className='absolute right-1 md:right-[10vw] top-[10vh] md:top-[12.5vh]  py-2 z-0 '>

                <motion.div
                    initial={{ y: 200, opacity: .5 }}
                    whileInView={{ y: -300, opacity: 1 }}
                    transition={{ duration: .5, delay: 0, repeat: Infinity, repeatDelay: duration - .5 }}
                >


                        <img className="w-[100vw] h-[100vh]"  src={slides[currentIndex].line.src} alt="" />

              


                </motion.div>


                <motion.div className='absolute top-[50vh] right-[39vw] overflow-hidden z-10'

                    initial={{ opacity: 1, scale: .1 }}
                    whileInView={{ opacity: 1, scale: 35 }}
                    transition={{ duration: duration/2, delay: 0, repeat: Infinity, repeatDelay: 1 }}
                ><div className='w-[50px] h-[50px] rounded-full bg-[black] bg-opacity-30  overflow-hidden'>
                    </div></motion.div>

                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        // onClick={() => goToSlide(slideIndex)}
                        className='text-2xl  relative w-[50px]'
                    >
                        {/* {(currentIndex == slideIndex || mouseHover == slideIndex) ?
                            <div style={{ zIndex: -1 }} className=" tooltip absolute left-[-110px] text-sm top-[0px] flex justify-center items-center">

                                <p className="text-sm w-[100px] text-center bg-accent bg-opacity-70 px-2 py-1 rounded text-[white]">{currentIndex == slideIndex ? slides[currentIndex].description : mouseHover == slideIndex && slides[slideIndex].description}</p>

                            </div>
                            : ''} */}


                        {/* <div
                            //  onMouseOver={() => setMouseHover(slideIndex)} onMouseLeave={() => setMouseHover('not')} 
                            className={`w-[35px] h-[35px] rounded-full my-2  p-[5px]  ${currentIndex == slideIndex ? 'bg-accent bg-opacity-70 ' : 'bg-[#8080809e]'}`}>
                            <img src={slide.url} className='w-[25px] h-[25px] rounded-full border bg-[white] ' />
                        </div> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;