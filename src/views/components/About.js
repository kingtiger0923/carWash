import React from 'react';
import CarHeroImage from './../../assets/camry_hero.png';
import LogoImage from './../../assets/mainLogo.png';

function About() {
  return (
    <section className="about-area2 pb-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-5 col-md-9">
            <div className="about-img ">
              <img src={CarHeroImage} alt="" />
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-12">
            <div className="about-caption mb-50">
              <div className="about-icon">
                <img src={LogoImage} alt="" height="80"/>
              </div>
              <div className="section-tittle mb-25">
                <h2>About Faevaa, Why?</h2>
              </div>
              <p className="mb-20">
                What if you could get all your website tasks off your plate and focus only on the fun stuff? Working with Growmodo allows you to scale your marketing and grow faster without becoming a designer or developer yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;