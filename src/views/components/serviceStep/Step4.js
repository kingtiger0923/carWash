import React, { useState } from 'react';

function Step4(props) {
  const [detailRequest, setDetailRequest] = useState(props.init.detailRequest);
  const [error, setError] = useState(0);

  const prevStep = (e) => {
    e.preventDefault();
    props.saveData({detailRequest: detailRequest});
    props.prevStep();
  }

  const nextStep = (e) => {
    e.preventDefault();
    if( e.target.value === '' ) {
      setError(1);
    } else {
      props.saveData({detailRequest: detailRequest});
      props.nextStep();
    }
  }

  const handleChange = (e) => {
    setDetailRequest(e.target.value);
    if( e.target.value !== '' ) {
      setError(0);
    }
  }

  return (
    <form className="form-default" method="POST">
      <div className="login-form">
        <h1 className="text-black font-weight-bold">Start Your Detail Service Appointment</h1>
        <div className="service step-1">
          { error === 1 && <span className="error">Fill in the below inputs!</span> }
          <div className="form-input">
            <label htmlFor="detailRequest">Email Address</label>
            <input type="textarea" name="detailRequest" placeholder="Email Address" value={detailRequest} onChange={handleChange}/>
          </div>
        </div>
        <div className="step-actions mt-3">
          <button className="btn btn-primary mx-5 py-4" onClick={prevStep}>Back</button>
          <button className="btn btn-primary mx-5 py-4" onClick={nextStep}>Continue</button>
        </div>
      </div>
    </form>
  );
}

export default Step4;