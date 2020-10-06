import React from 'react';

function ContactUS() {
  return (
    <section className="contact-area2 pb-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title font-weight-bold text-black mt-5">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control w-100 text-black" name="message" id="message" cols="30" rows="9" onFocus={ (e) => e.target.placeholder = '' } onBlur={ (e) => e.target.placeholder = 'Enter Message' } placeholder=" Enter Message"></textarea>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control valid text-black" name="name" id="name" type="text" onFocus={ (e) => e.target.placeholder = '' } onBlur={ (e) => e.target.placeholder = 'Enter your name'} placeholder="Enter your name" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input className="form-control valid text-black" name="email" id="email" type="email" onFocus={ (e) => e.target.placeholder = '' } onBlur={ (e) => e.target.placeholder = 'Enter email address'} placeholder="Email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input className="form-control text-black" name="subject" id="subject" type="text" onFocus={ (e) => e.target.placeholder = '' } onBlur={ (e) => e.target.placeholder = 'Enter Subject'} placeholder="Enter Subject" />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="btn btn-primary px-5">Send</button>
              </div>
            </form>
          </div>
          <div className="col-lg-3 offset-lg-1">
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-home"></i></span>
              <div className="media-body">
                <h3>Homestead Rd Houston Texas</h3>
                <p>Homestead Rd Huston, CX 77016</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-tablet"></i></span>
              <div className="media-body">
                <h3>+1 253 565 2365</h3>
                <p>Mon to Fri 9am to 6pm</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon"><i className="ti-email"></i></span>
              <div className="media-body">
                <h3>support@colorlib.com</h3>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUS;