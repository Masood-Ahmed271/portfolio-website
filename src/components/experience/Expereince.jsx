import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'


const Expereince = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2> My Experience</h2>

      <div className="container experience_container">

        <div className="experience_1">
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>HTML</h4>
              <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className="text_light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>Node.js</h4>
              <small className="text_light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>React</h4>
              <small className="text_light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>MongoDB</h4>
              <small className="text_light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>XMLHTTP</h4>
              <small className="text_light">Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience_2">
          <div className="experience_content">

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>Python</h4>
              <small className="text_light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>C++</h4>
              <small className="text_light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experience_details-icons'/>
              <div>
              <h4>C</h4>
              <small className="text_light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill  className='experience_details-icons'/>
              <div>
              <h4>JAVA</h4>
              <small className="text_light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expereince