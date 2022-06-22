import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Masood_2.png'
import HeaderSocials from './HeaderSocials'
import { init } from 'ityped'
import { useEffect, useRef } from "react"

const Header = () => {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor:false,
      strings:["Full Stack Developer", "Engineer", "Content Writer", "Athlete"]
    });
  },[])


  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Masood Ahmed</h1>
        {/* Need to use a loop for different options of work I do later */}
        <h5 className="text-light" ref={textRef} style={{height: "2rem"}}></h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="Image of a person" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>        
      </div>
    </header>
  )
}

export default Header