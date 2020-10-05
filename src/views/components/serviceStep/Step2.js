import React, { useState } from 'react';
import CarType1 from './../../../assets/carousel/slide1.png';
import CarType2 from './../../../assets/carousel/slide2.png';
import CarType3 from './../../../assets/carousel/slide3.png';
import CarType4 from './../../../assets/carousel/slide4.png';

function Step2(props) {
  const [select, changeSelect] = useState(0);

  const prevStep = (e) => {
    e.preventDefault();
    props.prevStep();
  }

  const nextStep = (e) => {
    e.preventDefault();
    props.saveData({'carType': select});
    props.nextStep();
  }

  return (
    <div className="step2">
      <h1 className="mb-3">What Size Vehicle do you have?</h1>
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className={select === 0 ? 'car-select select' : 'car-select'} onClick={() => changeSelect(0)}>
            <h1>Cars/Sedans</h1>
            <img src={CarType1} alt="Cars/Sedans" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className={select === 1 ? 'car-select select' : 'car-select'} onClick={() => changeSelect(1)}>
            <h1>SUVs</h1>
            <img src={CarType2} alt="SUVs" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className={select === 2 ? 'car-select select' : 'car-select'} onClick={() => changeSelect(2)}>
            <h1>Full Size * Non-Lifted / Non-Dually Trucks *</h1>
            <img src={CarType3} alt="Full Size * Non-Lifted / Non-Dually Trucks *" />
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
          <div className={select === 3 ? 'car-select select' : 'car-select'} onClick={() => changeSelect(3)}>
            <h1>Dually &amp; Lifted Trucks * Extra Large Trucks</h1>
            <img src={CarType4} alt="Dually &amp; Lifted Trucks * Extra Large Trucks" />
          </div>
        </div>
      </div>
      <div className="step-actions mt-3">
        <button className="btn btn-primary mx-5 py-4" onClick={prevStep}>Back</button>
        <button className="btn btn-primary mx-5 py-4" onClick={nextStep}>Continue</button>
      </div>
    </div>
  );
}

export default Step2;