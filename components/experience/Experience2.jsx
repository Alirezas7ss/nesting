import React from 'react';
import './experience2.css';
import {BsPatchCheckFill} from 'react-icons/bs' ;
const Experience = () => {
  return (
    <section id ='experience' >
      <h5 className='experience-titre'>چه مهارت هایی دارم</h5>
      <h2 className='experience-titre2'>مهارت های من</h2>
       <div className="container experience__container">
         <div data-aos-duration="1000" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className="experience__frontend">
           <h3>توسعه دهنده فرانت اند</h3>
           <div  className="experience__content">
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>REACT</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>NEXTJS</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>JAVASCRIPT</h4>
                  <small className='text-light'>Experienced</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>TYPESCRIPT</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>MaterialUI</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>GraphQL</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>FRAMER-MOTION</h4>
                  <small className='text-light'>Experienced</small> 
                 </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>PWA</h4>
                  <small className='text-light'>Experienced</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>figma</h4>
                  <small className='text-light'>intermediate</small> 
                  </div>
             </artifact>
           </div>
         </div>
         <div data-aos-duration="1000"  data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine" className="experience__backend">
         <h3>توسعه دهنده بلاکچین</h3>
           <div  className="experience__content">
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>SOLIDITY</h4>
                  <small className='text-light'>Experienced</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>Truffle</h4>
                  <small className='text-light'>Experienced</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>Hard hat</h4>
                  <small className='text-light'>Experienced</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>Etherjs</h4>
                  <small className='text-light'>intermediate</small> 
                  </div>
             </artifact>
             <artifact className="experience__details">
                 <BsPatchCheckFill className='experience__details__icon' />
                 <div>
                  <h4>Web3js</h4>
                  <small className='text-light'>intermediate</small> 
                  </div>
             </artifact>
             
           </div>
         </div>
       </div>

    </section >
  )
}

export default Experience