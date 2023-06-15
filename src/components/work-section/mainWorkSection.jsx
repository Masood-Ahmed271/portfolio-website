import './work.css';
import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';
// import MechanismSectionA0 from './MechanismSectionA0';
// import MechanismSectionA1 from './MechanismSectionA1';
// import MechanismSectionA2 from './MechanismSectionA2';
// import MechanismSectionA3 from './MechanismSectionA3';
// import MechanismSectionA4 from './MechanismSectionA4';

const mainWorkSection = () => {

//   const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
//   const onStepEnter = ({ data }) => {
//     setCurrentStepIndex(data);
//   };

//   const onStepExit = ({ data }) => {
//     setCurrentStepIndex(data);
//   };

  return (
    <div className='mechanism-section'>
      {/* <div className='mechanism-section-outer'>
        {
          currentStepIndex === null &&
          <></>
        }
        {
          currentStepIndex === 0 &&
          <MechanismSectionA0/>
        }
        {
          currentStepIndex === 1 &&
          <MechanismSectionA1/>
        }
        {
          currentStepIndex === 2 &&
          <MechanismSectionA2/>
        }
        {
          currentStepIndex === 3 &&
          <MechanismSectionA3/>
        }
        {
          currentStepIndex === 4 &&
          <MechanismSectionA4/>
        }
      </div> */}
      {/* <Scrollama offset={"0.5"} onStepEnter={onStepEnter} onStepExit={onStepExit}>
        {[0, 1, 2, 3, 4].map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div className='mechanism-section-scroll-placeholder' style={{padding: `0 0 ${stepIndex===4?"1200px":"800px"} 0`,}}></div>
          </Step>
        ))}
      </Scrollama> */}
    </div>
  );
};

export default mainWorkSection;