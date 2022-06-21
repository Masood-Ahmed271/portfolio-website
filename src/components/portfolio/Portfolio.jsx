import React from "react";
import "./portfolio.css";
import PLAYANDLEARN from "../../assets/Play_And_Learn.png";
import BIGTWO from "../../assets/Big_Two.png";
import NOTAKTOAI from "../../assets/Notakto-AI.png";
import UNIHK from "../../assets/Uni-HK.png";
import OLDPORTFOLIO from "../../assets/Old-Portfolio.png";
import AIVOICE from "../../assets/DORA.jpeg";
import DUMMY from "../../assets/dummy.jpg";


// Crearting an array for producing portfolio projects accordingly

const data = [
  {
    id:1,
    image: PLAYANDLEARN,
    title: "Play_And_Learn",
    description: "A text-based game in C++ Language. This game targets the concepts of Chemistry and helps students learn chemistry by answering chemistry related Questions",
    github: 'https://github.com/Masood-Ahmed271/Play_and_Learn',
    demo: 'https://youtu.be/LCt71AwFe-s'
  },
  {
    id:2,
    image: NOTAKTOAI,
    title: "Notakto AI",
    description: "A board game similar to TIC-TAC-TOE but with 3 boards in 'Python'. Two versions of Notakto are developed. In version, two players can play against each other while in the second version a player plays against an invincible AI.",
    github: 'https://github.com/Masood-Ahmed271/Notakto-AI',
    demo: 'https://youtu.be/MhWnZzzVsGQ'
  },
  {
    id:3,
    image: BIGTWO,
    title: "Big Two Card Game",
    description: "A multiplayer card game in JAVA Language. This games implements the famous Big Two game and allows 4 users to play against each other on an interactive GUI.",
    github: 'https://github.com/Masood-Ahmed271/BigTwo-Final',
    demo: 'https://youtu.be/DjyqQ_Q_xX4'
  },
  {
    id:4,
    image: UNIHK,
    title: "UniHK",
    description: "An ongoing WebApplication project to help students with their admissions at Undergraduate Level within Hong Kong.",
    github: 'https://github.com/Masood-Ahmed271/UniHK-Website',
    demo: 'https://masoodahmad.dev/UniHK-Website/'
  },
  {
    id:5,
    image: OLDPORTFOLIO,
    title: "A Sample Portfolio Website",
    description: "This is just a simple portfolio website build on pure HTML,CSS, and JavaScript.",
    github: 'https://github.com/Masood-Ahmed271/Masood-Ahmed271.github.io',
    demo: 'https://masoodahmad.dev'
  },
  {
    id:6,
    image: AIVOICE,
    title: "AI-Voice Companion",
    description: "A machine learning algorithm that uses various libraries to take voice of the people as an input for the program and respond accordingly.",
    github: 'https://github.com/Masood-Ahmed271/AI_Voice_Companion',
    demo: 'https://www.youtube.com/shorts/wnEGYfPDHfA'
  },
  {
    id:8,
    image: DUMMY,
    title: "Newsfeed",
    description: "It is a complete webapp project that uses HTML, CSS and JavaScript for the frontend and Node and Express.js for the backend along with MongoDB as the database.",
    github: 'https://github.com',
    demo: 'https://masoodahmad.dev'
  }
]



const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Projects</h2>



      <div className="portfolio_container container">
        {
          data.map(({id,image,title,description,github,demo}) => {
            return(
              <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>
                {description}
              </p>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo/Video
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
