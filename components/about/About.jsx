import React from 'react' ;
import './about.css' ;
import { FaAward } from "react-icons/fa";
import ME from '../../public/me-about2.png';
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import Image from 'next/image'

const About = () => {
  return (
    <section id = 'about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container1">
        <div data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="800"  className="about__me1">
          <div className="about__me-image1">
            <Image width="100%" height="100%" layout="responsive" objectFit="contain" src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content1">
          <div className="about__cards1">

              <artifact data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1000" className="about__card1">
                <FaAward className='about__icon1'/>
                <h5>Experience</h5>
                <small>1+ Years Working</small>
              </artifact>
            
            
              <artifact data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1200" className="about__card1">
                <FiUsers className='about__icon1'/>
                <h5>Not yet</h5>
                {/* <small>2+ Worldwide</small> */}
              </artifact>
            

            
              <artifact data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1500" className="about__card1">
                <VscFolderLibrary className='about__icon1'/>
                <h5>Project</h5>
                <small>5+ Completed</small>
              </artifact>
            
          </div>
            <p>
              i&#39;m a developer in web2 and web3 world , in world i&#39;m frontend and solidity developer
              you can see in the portfolio my experiences and projects also can see my github and linkedin 
              to get to know me better if have question or Speech You can send me a message from the Contact ME. I will be happy to talk to you :)
            </p>
            <a href="#contact"  className='btn btn-primary'>Let&#39;s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About