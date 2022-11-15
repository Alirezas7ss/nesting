import React from 'react' ;
import './about2.css' ;
import { FaAward } from "react-icons/fa";
import ME from '../../public/me-about2.png';
import { FiUsers } from "react-icons/fi";
import back from '../../public/Untitled-e2 1.jpg'
import { VscFolderLibrary } from "react-icons/vsc";
import Image from 'next/image'

// import localFont from "@next/font/local";
// const customFont = localFont({
//   src: "../../public/fonts/KALAMEH-BOLD.TTF",
//   display: "swap",
// })
const About = () => {
  return (
    <section id = 'about'>
      <h5>Get to know</h5>
      <h2 className='h2-titre'>درباره ی من</h2>

      <div className="container about__container">
        <div data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="800"  className="about__me">
          <div className="about__me-image">
            <Image width="100%" height="100%" layout="responsive" objectFit="contain" src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

              <artifact data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="about__card">
                <FaAward className='about__icon'/>
                <h5>سابقه</h5>
                <small>یک سال </small>
              </artifact>
            
            
              <artifact data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1200" className="about__card">
                <FiUsers className='about__icon'/>
                <h5>Not yet</h5>
                {/* <small>2+ Worldwide</small> */}
              </artifact>
            

            
              <artifact data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1500" className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>پروژه</h5>
                <small>5+ </small>
              </artifact>
            
          </div>
            <p>
            من علی رضا سلطانیان توسعه دهنده فرانت اند و وب3 با یک سال سابقه ، به دنیای وب ، تکنولوژی و دیجیتال مارکتینگ علاقه دارم. هر روز و هر لحظه در حال یادگیری هستم و این مسیر ادامه دارد...
تمام مهارت های مورد نیاز به این رشنه در بخش مهارت ها آورده ام و از طریق لینک های آورده شده می توانید به سابقه ام دسترسی داشته باشید و با من ارتباط بگیرید
            </p>
            <a href="#contact" className='btn btn-primary'>راه ارتباطی</a>
        </div>
      </div>
    </section>
  )
}

export default About