import React from 'react'
import  Link  from 'next/link'
const CTA = () => {
  return (
    <div className='cta' >
      <Link data-aos="fade-right" data-aos-duration="900" href='/cv' className='btn'>SEE CV</Link>
      <Link data-aos="fade-left" data-aos-duration="900" className='btn btn-primary' href="#contact">Let&apos;s Talk</Link>
    </div>
  )
}

export default CTA