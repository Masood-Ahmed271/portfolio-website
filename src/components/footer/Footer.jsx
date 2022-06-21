import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaGithubAlt} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Masood Ahmed</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#experience">Experience</a></li>
        <li> <a href="#education">Education</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#work">Work</a></li>
        <li> <a href="#contact">Contact Me</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/Masood12Ahmed/" target="_blank"><FaFacebook /></a>
        <a href="https://www.instagram.com/fifthdottyboi/" target="_blank"><FiInstagram /></a>
        <a href="https://github.com/Masood-Ahmed271" target="_blank"><FaGithubAlt /></a>
        <a href="https://www.linkedin.com/in/masood/" target="_blank"> <BsLinkedin /> </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Masood Ahmed. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer