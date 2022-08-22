import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a onClick={() =>{ alert("Please Note: The CV that you would be viewing right now is not the updated/latest CV. Thank You!")}} href={CV} className='btn' target='_blank'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Feel Free To Reach Out</a>
    </div>
  )
}

export default CTA