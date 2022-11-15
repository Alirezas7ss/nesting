import React, { useEffect } from "react";
import CTA2 from "./CTA2";
import "./header2.css";
import Me from "../../public/me31.png";
import HeaderSocials2 from "./HeaderSocials2";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
const Header = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <header>
      <div className="container header__container">
        <h1 data-aos="zoom-in-down" data-aos-duration="1500">
          علیرضا سلطانیان
        </h1>
        <h5
          className="text-light"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
        >
          فرانت اند دولوپر
        </h5>
        <CTA2 />
        <HeaderSocials2 />
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
          className="me"
        >
          <Image width={"30rem"} height={"35rem"} src={Me} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
