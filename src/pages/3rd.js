
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic';
import HomePage from '@/Components/HomePage/HomePage'
import { motion } from "framer-motion"
import Head from 'next/head'
import Slider from '@/Components/HomePage/Slider';
import img1 from "../assets/imgs/delight.jpg"
import img2 from "../assets/imgs/health.png"
import img3 from "../assets/imgs/values.png"
import img4 from "../assets/imgs/focus.png"


import bottom from '../assets/imgs/bottom.png'
import product from '../assets/imgs/Product-01.png'
import tab from '../assets/imgs/logo.png'
import news1 from '../assets/imgs/01.png'
import news2 from '../assets/imgs/02.png'
import news3 from '../assets/imgs/03.png'
import news4 from '../assets/imgs/04.png'

import AwesomeSlider from 'react-awesome-slider';
import ASlider from '@/Components/HomePage/Carousel';
import Carousel from '@/Components/HomePage/Carousel';
import Slider2 from '@/Components/HomePage/Slider2';

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
           
            <div>
                <Slider2></Slider2>
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