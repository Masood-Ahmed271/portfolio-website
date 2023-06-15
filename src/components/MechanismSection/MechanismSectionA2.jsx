import React, { useEffect } from 'react';
import "./MechanismSection.css";
import logoDocProBlack from "../../assets/Breed.png";
import ImageLaywerReviewTemplate from "../../assets/Breed.png";
import ImageOnlineDocLibrary from "../../assets/Breed.png";

function MechanismSectionA2() {
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
                <div className="mechanism-section-content-images">
                    <img className="mechanism-section-content-images-img" src={logoDocProBlack} alt="DocPro"/>
                    <div className="mechanism-section-content-images-img-wrapper">
                        <img className="mechanism-section-content-images-img-large" src={ImageLaywerReviewTemplate} alt="laywer review template"/>
                        <span className="mechanism-section-content-images-img-caption">Lawyers reviewed legal templates</span>
                    </div>
                    <div className="mechanism-section-content-images-img-wrapper">
                        <img className="mechanism-section-content-images-img-large" src={ImageOnlineDocLibrary} alt="online doc library"/>
                        <span className="mechanism-section-content-images-img-caption">Largest online documents library</span>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default MechanismSectionA2;