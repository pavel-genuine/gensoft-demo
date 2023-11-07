import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { motion, useScroll } from "framer-motion"
import MobileMenu from './MobileMenu';
import logo from "../../assets/imgs/logo.png"

const Navbar = ({ isHome }) => {

    const [background, setBackground] = useState(false)

    const router = useRouter();

    const { scrollYProgress } = useScroll();

    useEffect(() => {

        const changeBackground = () => {

            if (window.scrollY >= 20) {
                setBackground(true)

            } else {
                setBackground(false)

            }
        }

        window.addEventListener('scroll', changeBackground)

    }, [])



    return (
        <div className='w-[100vw] absolute ' style={{ zIndex: 100 }}>

            <div id='' style={{ transition: "all .5s", }} className=
                {`nav w-[100vw] h-[60px] md:h-[80px]  fixed  ${!background ? 'bg-opacity-100 bg-[red] drop-shadow-lg' : 'drop-shadow-lg bg-opacity-100 bg-[red] backdrop-blur-md'} `}
            >
                <div class="lg:navbar lg:w-[87%] lg:pl-[2.5vw] mx-auto lg:flex my-4  ">
                    <div class="lg:navbar-start">


                        <Link href='/' class=" normal-case text-xl ">
                            <motion.div 


                                initial={{ opacity: 1, scale:1 }}
                                whileInView={{ opacity: 1, scale:1}}
                                transition={{ duration: 1, delay: 0 }}

                            >
                                <img
                                    className='lg:w-[32%] w-[40%] mx-[10px] lg:mx-[-4vw] bg-[white] px-3 py-2 rounded-full bg-opacity-70'
                                    src={logo.src} alt="" srcset=""
                                />
                             
                            </motion.div>

                        </Link>
                    </div>

                    <div>
                        <MobileMenu></MobileMenu>

                    </div>

                   

                </div>

            </div>



        </div>

    );
};

export default Navbar;