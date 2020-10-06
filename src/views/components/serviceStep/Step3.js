import React, {useState} from 'react';

function Step3(props) {

  const [data, setData] = useState({
    vmake: props.init.vmake,
    vmodel: props.init.vmodel,
    vyear: props.init.vyear,
    vcolor: props.init.vcolor
  });
  const [error, setError] = useState(0);

  const nextStep = (e) => {
    e.preventDefault();
    if( data.vmake === '' || data.vmodel === '' || data.vyear === '' || data.vcolor === '' ) {
      setError(1);
    } else {
      props.saveData(data);
      props.nextStep();
    }
  }

  const prevStep = (e) => {
    e.preventDefault();
    props.saveData(data);
    props.prevStep();
  }

  const handleChange = (e) => {
    let newData = {...data};
    newData[e.target.name] = e.target.value;
    setData(newData);
    if( newData.vmake !== '' && newData.vmodel !== '' && newData.vyear !== '' && newData.vcolor !== '' ) {
      setError(0);
    }
  }

  return (
    <form className="form-default" method="POST">
      <div className="login-form">
        <h1 className="text-black font-weight-bold">Enter Your Vehicle Information</h1>
        <div className="service step-1">
          { error === 1 && <span className="error">Fill in the below inputs!</span> }
          <div className="form-input">
            <label htmlFor="vmake">Vehicle Make</label>
            <input type="text" name="vmake" placeholder="Vehicle Make" value={data.vmake} onChange={handleChange}/>
          </div>
          <div className="form-input">
            <label htmlFor="vmodel">Vehicle Model</label>
            <input type="text" name="vmodel" placeholder="Vehicle Model" value={data.vmodel} onChange={handleChange}/>
          </div>
          <div className="form-input">
            <label htmlFor="vyear">Vehicle Year</label>
            <input type="text" name="vyear" placeholder="Vehicle Year" value={data.vyear} onChange={handleChange}/>
          </div>
          <div className="form-input">
            <label htmlFor="vcolor">Vehicle Color</label>
            <input type="text" name="vcolor" placeholder="Vehicle Color" value={data.vcolor} onChange={handleChange}/>
          </div>
        </div>
        {/* <p className="text-black small-text">By creating an online customer profile, you agree to the terms and conditions along with privacy polices of Faevaa Detail &amp; Go. We do not sell your information to third party companies. By booking a detail appointment online we accept all major credit 
          and debit cards securely online through stripe. Payment must be made in full to confirm your detail appointment.</p> */}
        <div className="step-actions mt-3">
          <button className="btn btn-primary mx-5 py-4" onClick={prevStep}>Back</button>
          <button className="btn btn-primary mx-5 py-4" onClick={nextStep}>Continue</button>
        </div>
      </div>
    </form>
  );
}

export default Step3;