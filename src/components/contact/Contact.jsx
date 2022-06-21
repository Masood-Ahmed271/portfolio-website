import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_glpuran', 'template_pmzn3l9', form.current, 'GauB8XHFBt53OlHrd')
      .then((result) => {
        alert("Message Sent");
        e.target.reset();
        console.log(result.text);
      }, (error) => {
        alert("Check that all fields are filled otherwise there is some unusual error... for the time being contact me from other mentioned methods");
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>masood20@connect.hku.hk</h5>
            <a href="mailto:masood20@connect.hku.hk" target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Masood Ahmed</h5>
            <a href="https://m.me/Masood12Ahmed" target="_blank">Send a Message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+852-9706-4379</h5>
            <a href="https://api.whatsapp.com/send?phone+85297064379" target="_blank">Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required id='Name'/>
          <input type="email" name='email' placeholder='Your Email' required id='Email'/>
          <textarea name="message" rows="10" placeholder='Your Message' required id='Message'></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact