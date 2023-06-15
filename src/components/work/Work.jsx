import React from "react";
import "./work.css";
import PNL from "../../assets/pnl_company.png";
import WEAVA from "../../assets/Weava_1.png";
import HKUCS from "../../assets/HKUCS.png";
import BREED from "../../assets/Breed.png";
import DOCPRO from "../../assets/DocPro.jpg";
import Technine from "../../assets/Technine.png";
import FWD from "../../assets/FWD.png";


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Making an array to dynamically generate things

const data = [
  {
    companyId: 1,
    name: "FWD Insurance (JUNE 2023 - September 2023)",
    description:
      "Still working here.... Will update soon",
    image: FWD,
    link:"https://www.fwd.com.hk/online-insurance/term-life/en/",
  },
  {
    companyId: 2,
    name: "Technine Limited (SEPTEMBER 2022 - DECEMBER 2022)",
    description:
      "In Technine, I achieved a 30% increase in efficiency by testing software using Cypress for bugs and operating speed while documenting the processes. I also built RESTful APIs for serving data to a JavaScript front-end based on dynamically selected user inputs supporting over 5000 users. And lastly customized and developed new React Native components for a customer-facing web application, which led to an increase in traffic volume.",
    image: Technine,
    link:"https://technine.io/en/",
  },
  {
    companyId: 3,
    name: "DocPro Limited (JUNE 2022 - SEPTEMBER 2022)",
    description:
      "I Increased sales productivity by 80% by implementing event and conversion tracking for the websites using Google Analytics 4 and Google Tag Manager. I also developed performance-driven and user-centric websites such as Docpro and Awesumecare using PHP, Twig template, and ReactJS as the solutions stack. And later revamped the websites with a more aesthetically pleasing UI/UX helping to improve the customer experience when navigating through websites.",
    image: DOCPRO,
    link:"https://docpro.com/",
  },
  {
    companyId: 4,
    name: "Weavatools Limited - (SEPTEMBER 2021 - DECEMBER 2021)",
    description:
      "I Smoke-tested the staging website of Weavatools and suggested improvements which resulted in an increase in customer experience ratings and engagement numbers. And also utilized agile-scrum methodologies during my internship to optimize my tasks along with weekly scrum meetings which allowed my team and me to deliver projects in 80% of the anticipated time frame. And also streamlined the testing of Weavatools website using Cypress by writing automated test-scripts, which reduced the testing time by 50% for Software Quality Assurance Engineers.",
    image: WEAVA,
    link:"https://www.weavatools.com/",
  },
  {
    companyId: 5,
    name: "HKU (CS-Department) - (DECEMBER 2021 - MARCH 2022)",
    description:
      "Worked as a Student Research Assitant where I was involved in the research for finding mathematical proof for a different version of CHSH game, in both classical and quantum models.",
    image: HKUCS,
    link:"https://www.cs.hku.hk/",
  },
  {
    companyId: 6,
    name: "BREED - (FEBRURAY 2021 - MAY 2022)",
    description:
      "Worked as a Technical Team Member where I had to work closely with the team to execute day-to-day tasks such as testing various components both, software and hardware. Along with that, developed and contributed to the presentations for the pitching team at Breed.",
    image: BREED,
    link:"https://innowings.engg.hku.hk/robofish/",
  },
  {
    companyId: 7,
    name: "PNL Company Limited - (JUNE 2021 - SEPTEMBER 2021)",
    description:
      "Worked as a Stem Course Developer where I got an opportunity to develop projects such as Cospaces and Unity games. Apart from that got a chance to test various hardwares and develop drone and Virtual Reality programs as well.",
    image: PNL,
    link:"https://www.pnledu.org/",
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
