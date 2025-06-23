import React from'react'
import'../styles/CafeNewsletter.css'

const CafeNewsletter=()=>{
  return(
    <section className='cafe-newsletter' id='newsletter'>
      <div className='newsletter-card'>
        <h2 className='newsletter-title'>Get Indie Maker Stories in Your Inbox</h2>
        <p className='newsletter-desc'>Join 1,000+ makers and founders. Receive the best indie project updates, lessons, and resources every week.</p>
        <form className='newsletter-form' onSubmit={e=>e.preventDefault()}>
          <input type='email' className='newsletter-input' placeholder='Your email address' required/>
          <button type='submit' className='newsletter-btn'>Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default CafeNewsletter 