import React from 'react';

function Step1(props) {

  const nextStep = () => {
    console.log("Next Step");
  }

  return (
    <form className="form-default" method="POST">
      <div className="login-form">
        <h1 className="text-white font-weight-bold">Start Your Detail Service Appointment</h1>
        <div className="service step-1">
          <div className="form-input">
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" placeholder="Email Address" />
          </div>
          <div className="form-input">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form-input">
            <label htmlFor="confpass">Confirm Password</label>
            <input type="password" name="confpass" placeholder="Confirm Password" />
          </div>
        </div>
        <p className="text-white small-text">By creating an online customer profile, you agree to the terms and conditions along with privacy polices of Faevaa Detail &amp; Go. We do not sell your information to third party companies. By booking a detail appointment online we accept all major credit 
          and debit cards securely online through stripe. Payment must be made in full to confirm your detail appointment.</p>
        <div className="step-actions mt-3">
          <button className="btn btn-primary mx-5 py-4" onClick={nextStep}>Next</button>
        </div>
      </div>
    </form>
  );
}

export default Step1;