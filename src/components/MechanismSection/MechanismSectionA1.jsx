import React, { useEffect } from 'react';
import "./MechanismSection.css";
import logoDocProBlack from "../../assets/Breed.png";
import iconMedal from "../../assets/Breed.png";
import imageOrangeBulletLine from "../../assets/Breed.png";

function MechanismSectionA1() {
    
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
            <p>One of the <span className="mechanism-section-orange">leading</span> legal technology company</p>
            <div className="horizontal-dash-line left"></div>
        </div>
        <div className="mechanism-section-content">
                <img className="mechanism-section-content-images-img" src={logoDocProBlack} alt="DocPro"/>
                <div className="mechanism-section-content-adwards">
                    <img src={imageOrangeBulletLine} alt="orange bullet line" id="mechanism-section-content-adwards-orange-bullet-line"/>
                    <p>Awards Winning Legal Platform</p>
                    <ul>
                        <li><img src={iconMedal} alt="medal icon"/> Go Global LegalTech Award - 2021</li>
                        <li><img src={iconMedal} alt="medal icon"/> Legal Elite Best Legal Documents Platform - 2022</li>
                    </ul>
                </div>
        </div>

    </div>
  );
}

export default MechanismSectionA1;