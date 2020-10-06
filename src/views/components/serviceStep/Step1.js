import React, { useState } from 'react';

function Step1(props) {

  const [data, setData] = useState({
    email: props.init.email,
    password: '',
    confpass: ''
  });
  const [error, setError] = useState(0);

  const nextStep = (e) => {
    e.preventDefault();
    if( data.email === '' || data.password === '' || data.confpass === '' ) {
      setError(1);
    } else {
      props.saveData(data);
      props.nextStep();
    }
  }

  const handleChange = (e) => {
    let newData = {...data};
    newData[e.target.name] = e.target.value;
    setData(newData);
    if( newData.email !== '' && newData.password !== '' && newData.confpass !== '' ) {
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
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" placeholder="Email Address" value={data.email} onChange={handleChange}/>
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
          </div>
          <div className="form-input">
            <label htmlFor="confpass">Confirm Password</label>
            <input type="password" name="confpass" placeholder="Confirm Password" onChange={handleChange}/>
          </div>
        </div>
        <p className="text-black small-text">By creating an online customer profile, you agree to the terms and conditions along with privacy polices of Faevaa Detail &amp; Go. We do not sell your information to third party companies. By booking a detail appointment online we accept all major credit 
          and debit cards securely online through stripe. Payment must be made in full to confirm your detail appointment.</p>
        <div className="step-actions mt-3">
          <button className="btn btn-primary mx-5 py-4" onClick={nextStep}>Continue</button>
        </div>
      </div>
    </form>
  );
}

export default Step1;