"use client";
import React from "react";
import About2 from "../../components/about/About2";
import Contact2 from "../../components/contact/Contact2";
import Experience2 from "../../components/experience/Experience2";
import Footer2 from "../../components/footer/Footer2";
import Header2 from "../../components/header/Header2";
import Nav2 from "../../components/nav/Nav2";
import Portfolio2 from "../../components/portfolio/Portfolio2";
import Link from "next/link";
import "./home2.css";
import Services from "../../components/services/Services";
// import Testimonials from '../testimonials/Testimonials'
//font
// import {Oswald} from '@next/font/google'
// const customFont = Oswald({display: "swap"})
//className={customFont.className}

// import localFont from "@next/font/local";
// const customFont = localFont({
//   src: "../../public/fonts/KALAMEH-BOLD.TTF",
//   display: "swap",
// })
export default function Home() {
  return (
    <div className="homeflow" >
      <Link className="language2" href="/">
        English
      </Link>

      <Header2 />
      <Nav2 />
      <About2 />
      <Experience2 />
      {/* <Services /> */}
      <Portfolio2 />
      {/* <Testimonials2 /> */}
      <Contact2 />
      <Footer2 />
    </div>
  );
}
