import React from 'react' ;
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillDribbbleCircle } from "react-icons/ai";
import Link from 'next/link';


const HeaderSocials = () => {
  return (
    <div data-aos-duration="900" data-aos="zoom-in-left" className="header__socials">
      <Link href="https://www.linkedin.com/in/alireza-soltanian76-nonstop/" target='_blank'><AiOutlineLinkedin /></Link>
      <Link href="https://github.com/Alirezas7ss" target='_blank'><AiFillGithub  /></Link>
      <Link href="https://dribbble.com/Soltanian76" target='_blank' rel="noreferrer" ><AiFillDribbbleCircle  /></Link>
    </div>
  )
}

export default HeaderSocials