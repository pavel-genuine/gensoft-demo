import '@/styles/globals.css'
import '@/styles/homePage.css'
import '@/styles/mobileNav.css'
import '@/styles/testimony.css'

import '../styles/slider.css';
import '../styles/awesomeslider.scss';

import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic';
import { motion } from "framer-motion"
import { createTheme, ThemeProvider } from '@mui/material';
import Navbar from '@/Components/Navbar/Navbar';
import WhatsApp from '@/Components/WhatsApp/WhatsApp';
import { SunnyMorning } from 'moving-letters'
import Head from 'next/head'
import localFont from 'next/font/local';
import logo1 from "../assets/imgs/logo.png"

const roboto = localFont({
  src: '../assets/fonts/Neuropol X W00 Expanded/Neuropol X W00 Expanded.ttf',
  // display: 'swap',
});

const Footer = dynamic(() => import('@/Components/Footer/Footer'), {
  loading: () => <p>Loading...</p>,
});



export default function App({ Component, pageProps }) {

  const [isHome, setIsHome] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const theme = createTheme({
    typography: {
      // fontFamily: 'Artifika',
      button: {
        textTransform: 'none'
      }
    },
    palette: {
      primary: {
        main: "#000",//lgt2
        // main: "#80a10a",//lgt2
        light: "#000",
        dark: "#000",
        mainGradient: "linear-gradient(to right , #480626, #7e2651)",
      },
    },
  });

  useEffect(() => {

    setTimeout(() => {
      setIsOpen(true)
    }, 2000)

  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <div className=''>
        {
          !isOpen ?

            <div className={roboto.className}>
              <div className=' h-[100vh] w-[100vw] flex justify-center items-center bg-[red] text-[white] text-center overflow-hidden'>
                <div className=''>
                  <motion.div className='relative'
                    viewport={{ once: true }}
                    initial={{ opacity: 1, scale: .1 }}
                    whileInView={{ opacity: 1, scale:.3 }}
                    transition={{ duration: .5, delay: 0 }}
                  >
                    <img className='' src={logo1.src} alt="" />
                  </motion.div>

                </div>
              </div>
            </div>

            :
            <div>
              <Navbar isHome={isHome}></Navbar>
              {/* <WhatsApp></WhatsApp> */}
              <Component setIsHome={setIsHome} {...pageProps} />
              <Footer></Footer>
            </div>

        }
      </div>


    </ThemeProvider>
  )
}
