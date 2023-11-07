
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
          content="OLYMPIC INDUSTRIES LIMITED"
        />

        {/* <meta property="og:url" content="https://www.rainbowtexbd.com/" />
        <meta property="og:image" content="https://i.ibb.co/x1mC4qm/Screenshot-2023-06-01-124833.png" /> */}

      </Head>
      <div className=' overflow-hidden bg-[red]' style={{ zIndex: -1 }}>
        <Slider></Slider>

        <motion.div
          className='relative'
          viewport={{ once: true }}
          initial={{ opacity: .5, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5, delay: 0 }}
        >
          <div>
            <img className='w-[100vw]' src={img1.src} alt="" />
          </div>
        </motion.div>


        <motion.div
          className='relative'
          viewport={{ once: true }}
          initial={{ opacity: .5, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5, delay: 0 }}
        >
          <div>
            <img className='w-[100vw]' src={img2.src} alt="" />
          </div>
        </motion.div>

        <motion.div
          className='relative'
          viewport={{ once: true }}
          initial={{ opacity: .5, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5, delay: 0 }}
        >
          <div>
            <img className='w-[100vw]' src={img3.src} alt="" />
          </div>
        </motion.div>

        <motion.div
          className='relative'
          viewport={{ once: true }}
          initial={{ opacity: .5, scale: .8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .5, delay: 0 }}
        >
          <div>
            <img className='w-[100vw]' src={img4.src} alt="" />
          </div>
        </motion.div>
       

      </div>
    </main>
  )
}

export default Home


export async function getStaticProps() {
  return {
    props: {
      brand: 'Rainbow Tex',
      tag1: 'High-quality',
      tag2: 'clothing',
      tag3: 'exports from Bangladesh',
      tag4: 'Best in Fashion',
      smallTag: 'Elevate your style with our high-quality garments. Choose from a wide range of premium clothing.',
      passion: 'Our commitment to craftsmanship and quality',
      passionTag: 'Our clothing exports are made with the finest materials and crafted with exceptional attention to detail. Our team of experts works closely with our brand partners to ensure that each garment meets our high standards of quality.'
    }
  };
}