import React from "react";
import "./work.css";
import PNL from "../../assets/pnl_company.png";
import WEAVA from "../../assets/Weava_1.png";
import HKUCS from "../../assets/HKUCS.png";
import BREED from "../../assets/Breed.png";
import DOCPRO from "../../assets/DocPro.jpg";


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Making an array to dynamically generate things

const data = [
  {
    companyId: 1,
    name: "PNL Company Limited - (JUNE 2021 - SEPTEMBER 2021)",
    description:
      "Worked as a Stem Course Developer where I got an opportunity to develop projects such as Cospaces and Unity games. Apart from that got a chance to test various hardwares and develop drone and Virtual Reality programs as well.",
    image: PNL,
    link:"https://www.pnledu.org/",
  },

  {
    companyId: 2,
    name: "Weavatools Limited - (SEPTEMBER 2021 - DECEMBER 2021)",
    description:
      "Worked as a Software Quality Assurance Intern where I got an opportunity to do 'Smoke-Testing' of the stagingwp website of Weavatools. Along with this, monitored and tested the website using Apache JMeter and used Cypress to create automated test cases to test the website and chrome extension.",
    image: WEAVA,
    link:"https://www.weavatools.com/",
  },
  {
    companyId: 3,
    name: "HKU (CS-Department) - (DECEMBER 2021 - MARCH 2022)",
    description:
      "Worked as a Student Research Assitant where I was involved in the research for finding mathematical proof for a different version of CHSH game, in both classical and quantum models.",
    image: HKUCS,
    link:"https://www.cs.hku.hk/",
  },
  {
    companyId: 4,
    name: "BREED - (FEBRURAY 2021 - MAY 2022)",
    description:
      "Worked as a Technical Team Member where I had to work closely with the team to execute day-to-day tasks such as testing various components both, software and hardware. Along with that, developed and contributed to the presentations for the pitching team at Breed.",
    image: BREED,
    link:"https://innowings.engg.hku.hk/robofish/",
  },

  {
    companyId: 5,
    name: "DocPro Limited (JUNE 2022 - SEPTEMBER 2022)",
    description:
      "Working and collaborating with TechNine developers to develop software solutions for webapps and mobile apps. Along with that, served as bridge between DocPro's management and DocPro's developers.",
    image: DOCPRO,
    link:"https://docpro.com/",
  },
];

const Work = () => {
  return (
    <section id="work">
      <h5>Where I Have Worked</h5>
      <h2>Work Experience</h2>
      <Swiper className="container work_container" modules = {[Pagination]} spaceBetween = {40} slidersPerView={1} pagination={{clickable: true}}>
        {
        data.map(({ companyId, name, description, image, link }) => {
          return(<SwiperSlide key={companyId} className="work">
            <div className="company_image">
              <a href={link} target="_blank"><img src={image} alt="Company's Logo" /></a>
            </div>
            <h5 className="compnay_name">{name}</h5>
            <small className="Compnay_description">
              {description}
            </small>
          </SwiperSlide>);
        })}
      </Swiper>
    </section>
  );
};

export default Work;
