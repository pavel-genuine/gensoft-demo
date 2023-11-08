
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
import footer from "../assets/imgs/footer.png"


import bottom from '../assets/imgs/bottom1.png'
import product from '../assets/imgs/brands.jpg'
import tab from '../assets/imgs/logo.png'
import tab2 from '../assets/imgs/Tab-06.png'
import news1 from '../assets/imgs/news.jpg'
import news2 from '../assets/imgs/02.png'
import news3 from '../assets/imgs/03.png'
import news4 from '../assets/imgs/04.png'

import AwesomeSlider from 'react-awesome-slider';
import ASlider from '@/Components/HomePage/Carousel';
import Carousel from '@/Components/HomePage/Carousel';

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
      <div style={{ zIndex: 100 }} className='w-[100vw] absolute  text-[white] font-semibold'>
        <div className='flex items-center fixed w-[100vw]  bg-[grey] py-2 border border-b'>
          <p className='ml-[10vw]'>Our Brands</p>
          <p className='mx-[10vw]'>Our Values</p>
          <img className='w-[250px] ml-[5vw]' src={tab.src} alt="" />
          <p className='ml-[10vw]'>Our Achievements</p>

        </div>

      </div>

      <div className=' overflow-hidden bg-[white]' style={{ zIndex: -1 }}>
        {/* <Slider></Slider> */}
        <Carousel></Carousel>


        <div style={{ zIndex: 10 }} className='absolute top-[100vh]' >
          <div className='relative'>
            <img className='' src={news1.src} alt="" />

          </div>
        </div>

        <div className='bg-[white] mt-[110vh]'>
          <img src={product.src} alt="" />
        </div>

        <div >
          <img style={{ zIndex: -1 }} className='w-[100vw] mb-10' src={bottom.src} alt="" />

       <div style={{ zIndex: 100 }} className='fixed bottom-0'>
       <div className='relative '>
            <img style={{ zIndex: 0 }} className='w-[100vw]' src={footer.src} alt="" />

            <div style={{ zIndex: 10 }} className='bg-[white] absolute left-[100px] bottom-[5px] px-5 py-3 font-semibold  flex space-x-10 bottom-0'>
              <p>About Us |</p>
              <p>Terms & Conditions |</p>
              <p>Privacy Policy |</p>
              <p>Contact US |</p>
            </div>
          </div>
       </div>
        </div>




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