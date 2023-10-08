import React from "react";
import Head from "next/head";
import Script from "next/script";
import Cursor from "../components/cursor";
import ScrollToTop from "../components/scrollToTop";
import LoadingScreen from "../components/Loading-Screen";
import "../styles/main.scss";

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavbarArch from "../components/Navbar-arch/navbar-arch";
import FooterArch from "../components/Footer-arch/footer-arch";

function MyApp({ Component, pageProps }) {
  const navbarRef = React.useRef(null);
  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <>
      <Head>
        <title>GenSoft</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <NavbarArch navbarRef={navbarRef} theme="themeL" />
      <Cursor />
      <LoadingScreen />
      <Component {...pageProps} />
      <ScrollToTop />
      <Script id="wow" src="/js/wow.min.js"></Script>
      <Script
        strategy="beforeInteractive"
        id="splitting"
        src="/js/splitting.min.js"
      ></Script>
      <Script id="simpleParallax" src="/js/simpleParallax.min.js"></Script>
      <Script
        id="isotope"
        strategy="beforeInteractive"
        src="/js/isotope.pkgd.min.js"
      ></Script>
      <Script id="wowInit" strategy="lazyOnload">{`new WOW().init();`}</Script>

      <FooterArch />
    </>
  );
}

export default MyApp;
