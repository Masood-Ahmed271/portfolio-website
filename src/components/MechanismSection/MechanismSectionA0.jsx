import React, { useEffect } from 'react';
import "./MechanismSection.css";
import logoChatGPTGreen from "../../assets/Breed.png";
import logoDocProBlack from "../../assets/DocPro.jpg";

function MechanismSection() {

    useEffect(() => {
        const updateScale = () => {
            const container = document.querySelector('.mechanism-section-inner');
        
            const widthScale = window.innerWidth / 1200;
            const heightScale = window.innerHeight / 750;
            const scaleFactor = Math.min(widthScale, heightScale);

            container.parentNode.style.height = `${container.clientHeight * scaleFactor}px`;
            container.style.transform = `scale(${scaleFactor})`;
        };
    
        updateScale();
        window.addEventListener('resize', updateScale);
    
        return () => {
          window.removeEventListener('resize', updateScale);
        };
      }, []);

  return (
    <div className="mechanism-section-inner">
        <div className="mechanism-section-title-wrapper">
            <p>Hold on. Isn't this just ChatGPT...? </p>
            <div className="horizontal-dash-line right"></div>
        </div>
        <div className="mechanism-section-title-wrapper">
            <p>The Power of Legal Expertise and AI Combined </p>
            <div className="horizontal-dash-line left"></div>
        </div>
        <div className="mechanism-section-content">
            <div className="mechanism-section-content-images">
                <img className="mechanism-section-content-images-img" src={logoDocProBlack} alt="DocPro"/>
                <span className="mechanism-section-content-images-text">+</span>
                <img className="mechanism-section-content-images-img" src={logoChatGPTGreen} alt="ChatGPT"/>
            </div>
        </div>

    </div>
  );
}

export default MechanismSection;