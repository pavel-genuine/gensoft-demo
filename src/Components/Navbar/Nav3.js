import React, { useEffect, useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import { motion, useScroll } from "framer-motion"
import MobileMenu from './MobileMenu';
import nav from "../../assets/imgs/nav3.jpg"

const Nav3 = () => {

    const [background, setBackground] = useState(false)

    const router = useRouter();

    const { scrollYProgress } = useScroll();

    useEffect(() => {

        const changeBackground = () => {

            if (window.scrollY >= 400) {
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
                {`nav w-[100vw] h-[60px] md:h-[80px]  fixed  ${!background ? 'opacity-0  drop-shadow-lg' : 'drop-shadow-lg '} `}
            >
               <img className='w-[100vw]' src={nav.src} alt="" />

            </div>



        </div>

    );
};

export default Nav3;