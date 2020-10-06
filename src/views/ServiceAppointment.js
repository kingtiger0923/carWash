import React, { useState } from 'react';
import Step1 from './components/serviceStep/Step1';
import Step2 from './components/serviceStep/Step2';
import Step3 from './components/serviceStep/Step3';
import Step4 from './components/serviceStep/Step4';

function ServiceAppointment() {

  const [step, setStep] = useState(0);
  const [dataInfo, setDataInfo] = useState({
    email: '',
    password: '',
    confPass: '',
    carType: 0,
    vmake: '',
    vmodel: '',
    vyear: '',
    vcolor: '',
    detailRequest: ''
  });

  const nextStep = () => {
    setStep(step + 1);
    if( step === 4 ) {
      // 
    }
  }

  const prevStep = () => {
    if( step !== 0 ) {
      setStep(step - 1);
    }
  }

  const saveData = (data) => {
    setDataInfo(Object.assign(dataInfo, data));
  }

  return (
    <div className="servicebooking">
      {step === 0 && <Step1 nextStep={nextStep} saveData={saveData} init={dataInfo}/>}
      {step === 1 && <Step2 prevStep={prevStep} nextStep={nextStep} saveData={saveData} init={dataInfo}/>}
      {step === 2 && <Step3 prevStep={prevStep} nextStep={nextStep} saveData={saveData} init={dataInfo}/>}
      {step === 3 && <Step4 prevStep={prevStep} nextStep={nextStep} saveData={saveData} init={dataInfo}/>}
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