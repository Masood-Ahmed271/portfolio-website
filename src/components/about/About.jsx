import React from 'react'
import './about.css'
import ME from '../../assets/Masood_5.png'
import {GiStarsStack} from 'react-icons/gi'
import {ImFire} from 'react-icons/im'
import {BsFolderFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Want to Know More About Me</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="An image showing a person" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">

          <article className="about_card">
              <GiStarsStack className='about_icon'/>
              <h5>Experience</h5>
              <small>Worked with Myriad of Companies</small>
            </article>

            <article className="about_card">
              <ImFire className='about_icon'/>
              <h5>Moto</h5>
              <small>Pasos Cortos, Vista Largas!</small>
            </article>

            <article className="about_card">
              <BsFolderFill className='about_icon'/>
              <h5>Projects</h5>
              <small>Worked with Diverse Teams on Diverse Projects</small>
            </article>
          </div>

          <p>
          I am currently a junior at The University of Hong Kong pursuing Bachelor's of Engineering in the field of Computer Science with a minor in Finance and a minor in Inofrmation Systems with a focus on Financial Computing.
          <br/>
          Exploring new ideas and solving problems is what I look forward to. Besides coding, I am into sports and cooking.
          </p>
          <a href='#contact' className='btn btn-primary'> Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About