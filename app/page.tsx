"use client";

import React from "react";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Experience from "../components/experience/Experience";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import Portfolio from "../components/portfolio/Portfolio";
import Link from "next/link";
import "./home.css";
import Services from "../components/services/Services";
// import Testimonials from '../testimonials/Testimonials'
export default function Home() {
  return (
    <div className="homeflow">
      <Link className="language" href="/fa">
        persian
      </Link>
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
