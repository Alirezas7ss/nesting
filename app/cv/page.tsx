import React from 'react'
import './cv1.css'
import  Link  from 'next/link'
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import back from '../../public/Untitled-e2 1.jpg'
import CvEn from '../../public/cvEn.png'
import Image from 'next/image'
export default function Cv() {
  return (
    <div className='cvContainer'>
    <Link href='/' className='linkHome' >HOME</Link>
    <a  className='downloadCv' download={CvEn}>DOWNLOAD</a>
      <div className='textContainer'>   
        <div className='leftText'>
         <h1>Alireza</h1>
         <h2>soltanian</h2>
         <p><span>About Me :</span><br/>
            I am currently frontend and solidity                    developer,
            have done several projects that  you can see 
             inside my github and more regularly
            see it on my portfolio website ,
            everything with the details like my skills 
              and projects and communication channels in
            the portfolio .
            <br/><br></br><br></br><span>SKILLS :</span><br/>FrontEnd : ( Javascript ,React ,  Nextjs , Typescript ,
           
           Redux , GraphQL ,PWA , Framer-motion ,Sass )<br/>
            
           Blockchain : ( Solidity , Web3 js ,
            
           Ether js , Truffle , Hardhat )<br/>
           
           UI/UX : ( Figma , Photoshop )<br></br><br></br><br></br><br></br><span></span>
        </p>
        </div>
        <div className='line'>
           <h1>|</h1>
        </div>
        <div className='rightText'>
          <div>
            <Link href='' target='_blank'><MdEmail />&nbsp;&nbsp;EMAIL&nbsp;&nbsp;:&nbsp;&nbsp;alirezas76s76@gmail.com</Link>
          </div>
          <div>
            <Link href='https://t.me/ali76rez' target='_blank'><FaTelegramPlane />&nbsp;&nbsp;TELEGRAM&nbsp;&nbsp;:&nbsp;&nbsp;@ali76rez</Link>
          </div>
          <div>
            <Link href='https://www.linkedin.com/in/alireza-soltanian76-nonstop/' target='_blank'><GrLinkedin />&nbsp;&nbsp;LINKEDIN&nbsp;&nbsp;:&nbsp;&nbsp;alireza-soltanian76-nonstop</Link>
          </div>
          <p><span>PORTFOLIO :</span><br/>
          I have created a  portfolio page
           which is the main  place to share
           my portfolio .But I share them in other places as well, like 
           Github and dribbble<br></br>
           
                PortfolioPage : <Link target='_blank' href='https://soltanianportfolio.vercel.app/home'>https://soltanianportfolio.vercel.app/home</Link><br/>
                Github : <Link target='_blank' href='https://github.com/Alirezas7ss'>https://github.com/Alirezas7ss</Link> <br/>
                Dribbble : <Link target='_blank' href='https://dribbble.com/Soltanian76'>https://dribbble.com/Soltanian76</Link> <br/><br></br>
          
          
           
          <span>PRO SKILLS :</span><br/>
                Premiere<br/>
                 
                Photoshop<br/>
                 
                Kyshot<br/>
                Team work<br/>
                Research <br/>
          
          
          
                
                  </p>
                        </div>
                      </div>
                      <Image  layout="responsive" objectFit="contain" src={back} alt='im' />
          
              </div>
  )
}
