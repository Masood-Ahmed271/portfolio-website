import React from 'react'
import './education.css'
import {SiGooglescholar} from 'react-icons/si'
import EGS from '../../assets/Engro_Grammar_School_Logo.png'
import HKU from '../../assets/university-of-hong-kong-logo.png'

const Education = () => {
  return (
    <section id="education">
      <h5>Where have I studied</h5>
      <h2>Education</h2>

      <div className="container education_container">
        <article className="education">
          <div className="education_head">
            <a href='https://engroschools.edu.pk/#/' target='_blank'>Engro Grammar School, Daharki</a>
          </div>

          <img src={EGS} alt=" Picture of a logo" className="education_image" />

          <ul className="education_list">
            <li><SiGooglescholar className='education_list-icon'/>
            <p> Alevels : 4A*s</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> Olevels : 8A*s and 1A</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> SAT I Score :  1420/1600</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> SAT II Score :  2370/2400</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> Former Head Boy of Engro Grammar School</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> Former President of EGS Indoor Battles</p>
            </li>

          </ul>
        </article>


        <article className="education">
          <div className="education_head">
            <a href='https://www.hku.hk/' target='_blank'>Hong Kong University, Hong Kong</a>
          </div>

          <img src={HKU} alt=" Picture of a logo" className="education_image" />

          <ul className="education_list">
            <li><SiGooglescholar className='education_list-icon'/>
            <p> Current CGPA: 3.51</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> HKU Squash Player</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> Common Core Consultant</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> HKU Foundation Scholarship</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> Student Teaching Assistant for ENGG 1330</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> Student Teaching Assistant for ENGG 1340/ COMP 2113</p>
            </li>

            <li><SiGooglescholar className='education_list-icon'/>
            <p> Co-Founder of BlockChain@HKU </p>
            </li>

          </ul>
        </article>


      </div>
    </section>
  )
}

export default Education