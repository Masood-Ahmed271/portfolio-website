import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/masood/" target="_blank"> <BsLinkedin /> </a>
        <a href="https://github.com/Masood-Ahmed271" target="_blank"> <BsGithub /> </a>
        <a href="https://www.facebook.com/Masood12Ahmed/" target="_blank"> <BsFacebook /> </a>
        <a href="https://www.instagram.com/fifthdottyboi/" target="_blank"> <BsInstagram /> </a>
    </div>

  )
}

export default HeaderSocials