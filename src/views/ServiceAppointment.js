import React, { useState } from 'react';
import Step1 from './components/serviceStep/Step1';
import Step2 from './components/serviceStep/Step2';
import Step3 from './components/serviceStep/Step3';

function ServiceAppointment() {

  const [step, setStep] = useState(0);
  const [dataInfo, setDataInfo] = useState({
    email: '',
    password: '',
    confPass: ''
  })

  const nextStep = () => {
    step += 1;
    if( step === 4 ) {
      // 
    }
  }

  const saveData = (data) => {
    setDataInfo({...dataInfo, ...data});
  }

  return (
    <div className="servicebooking">
      {step === 0 && <Step1 />}
      {step === 1 && <Step2 />}
      {step === 2 && <Step3 />}
      {/* <div className="step-actions mt-3">
        {
          step !== 0 &&
          <button className="btn btn-primary mx-5 py-4">Prev</button>
        }
        <button className="btn btn-primary mx-5 py-4" onClick={nextStep}>Next</button>
      </div> */}
    </div>
  );
}

export default ServiceAppointment;