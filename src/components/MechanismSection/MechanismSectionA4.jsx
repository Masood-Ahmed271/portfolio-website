import React, { useEffect } from 'react';
import "./MechanismSection.css";

function MechanismSectionA4() {
    
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
            <p>The Power of Legal Expertise and AI Combined</p>
            <div className="horizontal-dash-line left"></div>
        </div>
        <div className="mechanism-section-content">
            <div className="mechanism-section-content-advantages">
                
                <div className="mechanism-section-content-advantage">
                    <h1 className="mechanism-section-content-advantage-title">AI Trained by Lawyers</h1>
                    <p className="mechanism-section-content-advantage-text">Our chatbot has been developed using cutting-edge AI technology that's been trained by experienced lawyers.</p>
                </div>

                <div className="mechanism-section-content-advantage">
                    <h1 className="mechanism-section-content-advantage-title">Extensive Library of Templates</h1>
                    <p className="mechanism-section-content-advantage-text">We are backed by DocPro's extensive library of templates, ensuring that the legal documents are reliable and accurate.</p>
                </div>

                <div className="mechanism-section-content-advantage">
                    <h1 className="mechanism-section-content-advantage-title">Comprehensive Documents</h1>
                    <p className="mechanism-section-content-advantage-text">ChatGPT can only generate shorter documents. We generate longer legal documents using professional technologies.</p>
                </div>

                <div className="mechanism-section-content-advantage">
                    <h1 className="mechanism-section-content-advantage-title">Minimizes AI's Limits & Risks</h1>
                    <p className="mechanism-section-content-advantage-text">Don't leave legal matters to chance. Our chatbot reduces the risk of errors, inaccuracies, and hallucinations of AI.</p>
                </div>

            </div>
        </div>
    </div>
  );
}

export default MechanismSectionA4;