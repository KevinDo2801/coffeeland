import React from'react'
import'../styles/HeroSection.css'

const HeroSection=()=>{
  return(
    <section className='hero-section'>
      <h1 className='hero-title'>Build. Launch. Grow.</h1>
      <p className='hero-subtitle'>A public console for indie hackers, makers, and founders to share, learn, and celebrate their journey.</p>
      <a href='#newsletter' className='hero-cta'>Join the Newsletter</a>
    </section>
  )
}

export default HeroSection 