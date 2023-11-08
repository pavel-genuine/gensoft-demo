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
        url: img1.src

    },
    {
        description: 'Origin Greece',
        product: 'Gala Apple',
        des: '18 kg carton box.',
        url: img2.src

    },
    {
        description: 'Origin Greece',
        product: 'Gala Apple',
        des: '18 kg carton box',
        url: img3.src

    },




    {
        description: 'Origin Greece',
        product: 'Valencia Orange',
        des: '18 kg carton box',
        url: img4.src

    }
 
];

export const OpenMap = ({ setOpenMap }) => {

    const [address, setAddress] = React.useState('Bangkok');

    const handleChange = (event) => {
        setAddress(event.target.value);
    };

    return (
        <div className="bg-bg bg-opacity-50">
            <div className='w-[100%] relative bg-bg h-[56px]'>
                <div className='absolute left-5 '>
                    <IconButton
                        onClick={() => setOpenMap(false)}
                        color="default"
                        className="absolute right-3 top-3 bg-gray-400"
                        aria-label="delete"
                    >
                        <ArrowBackIcon color="primary" />
                    </IconButton>
                </div>
                <div className='w-[200px] absolute right-0 bg-accent  bg-opacity-50'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <Select
                                style={{ color: 'white' }}
                                defaultValue='Dhaka'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={address}
                                label="Address"
                                onChange={handleChange}
                            >
                                <MenuItem value={'Bangkok'}>Bangkok Office</MenuItem>

                                <MenuItem value={'Dhaka'}>Dhaka Office</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </div>
            {
                address == 'Bangkok'
                    ?
                    <div className='relative'>
                        <motion.div

                            viewport={{ once: true }}
                            initial={{ y: 400 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: .3, delay: 0, }}
                        >
                            <p className=' p-4 text-[grey]  lg:w-[300px] w-[100%] bg-primary  text-sm md:text-md text-[white] absolute bottom-0  right-0'>
                                <span className='font-bold underline'>
                                    Thai Agre Products Company Ltd.
                                </span>
                                <br />
                                <span className='font-bold underline'>
                                    Swapan Trade International.
                                </span>
                                <br />
                                SSP Tower,
                                21th foor,
                                Soi Sukhumvit 63, Ekamai Road, Bangkok 10110, Thailand
                                <br />

                                <a className='underline' href="tel:+8801819231662"> +8801819231662</a>,
                                <br />
                                <a className='underline' href="mailto:royalorchid2011@yahoo.com"> royalorchid2011@yahoo.com </a>

                            </p>
                        </motion.div>


                        <iframe
                            className='md:h-[70vh] h-[80vh] w-[100%]'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15502.648760121112!2d100.588773!3d13.7388905!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e4e8979781d%3A0x6358ed7372c73793!2sS.%20S.%20P.%20Tower%201%20Building!5e0!3m2!1sen!2sbd!4v1685940799609!5m2!1sen!2sbd"
                            width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    :
                    <div className='relative' >
                        <motion.div

                            viewport={{ once: true }}
                            initial={{ y: 400 }}
                            whileInView={{ y: 0 }}
                            transition={{ duration: .3, delay: 0, }}
                        >
                            <p className=' p-4 text-[grey]  lg:w-[300px] w-[100%] bg-primary  text-sm md:text-md text-[white] absolute bottom-0  right-0'>

                                <span className='font-bold underline'>
                                    Swapan Trade International.
                                </span>
                                <br />
                                House 114, Road 2 Block A, Niketon, Gulshan-1, Dhaka 1212, Bangladesh

                                <br />

                                <a className='underline' href="tel:+8801819231662"> +8801819231662 </a>,
                                <br />
                                <a className='underline' href="mailto:royalorchid2011@yahoo.com"> royalorchid2011@yahoo.com </a>

                            </p>
                        </motion.div>
                        <iframe
                            className='md:h-[70vh] h-[80vh]  w-[100%]'
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d826.538945471007!2d90.41119738051628!3d23.774951804870295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c777f5bdf6bb%3A0xbaa43dcae03ebcaf!2sNiketan%20Society!5e0!3m2!1sen!2sbd!4v1685943189671!5m2!1sen!2sbd" width="600"
                            height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </div>
            }
        </div>
    )
}




function Carousel() {


    const [currentIndex, setCurrentIndex] = useState(0);

    const [audioStatus, setAudioStatus] = useState(false);
    const [mouseHover, setMouseHover] = useState('not');

    // const slideCount = 15;
    const duration = 5

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

        <div>
            <motion.div

                initial={{ opacity: 1, scale: 1.3 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: duration, delay: 0, repeat: Infinity, repeatDelay: 0 }}

                style={{ backgroundImage: `url(${currentIndex < slides.length && slides[currentIndex].url})` }}
                className=' h-[100vh] w-[100vw] z-1 bg-center bg-cover duration-500 flex   items-center '
            >


            </motion.div>



            <div className={`absolute top-[40vh] left-[2vw]`}>
                {
                    
                        <div>

                            {

                                <motion.div
                                    initial={{ y: 200, opacity: .5 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .5, delay: 0, repeat: Infinity, repeatDelay: duration-.5 }}
                                >

                                    <div className=' px-[5vw] mx-[5vw]  py-[2vh] w-[75vw] md:w-auto flex items-center bg-bg bg-opacity-70 z-10'>

                                        <div>
                                            <div className=''>
                                                <p className="lg:text-[60px] text-[30px] font-semibold text-[white]">
                                                    <span className='text-accent font-[Allura] font-bold'> {slides[currentIndex].product}</span>
                                                    {' '}{slides[currentIndex].description}
                                                    <span className='text-accent'>.</span>
                                                </p>
                                                <p className="text-[white] lg:text-[35px] font-semibol text-[20px]">{slides[currentIndex].des}</p>
                                            </div>

                                        </div>

                                    </div>


                                </motion.div>

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

            <div className='absolute right-1 md:right-[10vw] top-[10vh] md:top-[12.5vh]  py-2 z-0'>
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


                        <div
                            //  onMouseOver={() => setMouseHover(slideIndex)} onMouseLeave={() => setMouseHover('not')} 
                            className={`w-[35px] h-[35px] rounded-full my-2  p-[5px]  ${currentIndex == slideIndex ? 'bg-accent bg-opacity-70 ' : 'bg-[#8080809e]'}`}>
                            <img src={slide.url} className='w-[25px] h-[25px] rounded-full border bg-[white] ' />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;