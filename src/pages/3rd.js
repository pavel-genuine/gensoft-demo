
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import HomePage from '@/Components/HomePage/HomePage'
import { motion } from "framer-motion"
import Head from 'next/head'


import hover1 from '../assets/imgs/hover1.jpg'
import hover2 from '../assets/imgs/hover2.jpg'
import hover3 from '../assets/imgs/hover3.jpg'

import extra1 from '../assets/imgs/page-7-extra - Copy.jpg'
import extra2 from '../assets/imgs/page-8-extra - Copy.jpg'

import Slider2 from '@/Components/HomePage/Slider2';
import Delight from '@/Components/HomePage/Delight';
import Nav3 from '@/Components/Navbar/Nav3';
import StripeDesign from '@/Components/HomePage/StripeDesign';

const Categories = dynamic(() => import('@/Components/Categories/Categories'), {
    loading: () => <p>Loading...</p>,
});
const Global = dynamic(() => import('@/Components/Global/Global'), {
    loading: () => <p>Loading...</p>,
});
const Passion = dynamic(() => import('@/Components/Passion/Passion'), {
    loading: () => <p>Loading...</p>,
});
const Qualities = dynamic(() => import('@/Components/Qualities/Qualities'), {
    loading: () => <p>Loading...</p>,
});
const Tiles = dynamic(() => import('@/Components/Tiles/Tiles'), {
    loading: () => <p>Loading...</p>,
});




const Home = (props) => {

    console.log(props, 'props');

    useEffect(() => {

        window.scrollTo(0, 0)
    }, [])


    return (
        <main>

            <Head>
                <title>Home | Olympic</title>
                <meta property="og:title" content="Olympicbd" />
                <meta
                    name="og:description"
                    content="OLYMPIC INDUSTRIES LIMITED."
                />

                {/* <meta property="og:url" content="https://www.rainbowtexbd.com/" />
        <meta property="og:image" content="https://i.ibb.co/x1mC4qm/Screenshot-2023-06-01-124833.png" /> */}

            </Head>
            <Nav3></Nav3>

            <div>
                <Slider2></Slider2>
            </div>


        <StripeDesign></StripeDesign>





            <div className='relative'>
                <img className='w-[100vw] mb-10' src={extra1.src} alt="" />
                <img className='w-[100vw]' src={extra2.src} alt="" />

            </div>

        </main>
    )
}

export default Home


export async function getStaticProps() {
    return {
        props: {
            brand: 'Olympic',
            tag1: 'High-quality',
            tag2: 'Products',
            tag3: 'exports from Bangladesh',
            tag4: 'Best in quality',
            smallTag: 'Elevate your style with our high-quality product. Choose from a wide range of premium quality.',
            passion: 'Our commitment to craftsmanship and quality',
            passionTag: 'Our c exports are made with the finest materials and crafted with exceptional attention to detail. Our team of experts works closely with our brand partners to ensure that each garment meets our high standards of quality.'
        }
    };
}