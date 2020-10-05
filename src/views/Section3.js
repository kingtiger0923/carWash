import React from 'react';
import ExpressCarWash from './../assets/express-car-wash.png';

function Section3() {
  return (
    <section className="joinus pb-bottom pt-5 text-white" id="join">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="joinus-caption mb-50">
              <div className="section-tittle mb-25">
                <h2 className="text-white">Join Our Rewards Program</h2>
              </div>
              <p className="mb-20">
                Did you know? It pays to visit our detail shop each time you need a car wash and detailing. We offer exculsive promotions and member only savings along with incentives all year long thus making Feavaa Detail &amp; Go the best choice in the car wash &amp; care industry.
              </p>
              <span className="btn btn-primary">Become A Rewards Member</span>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="joinus-img ">
              <img src={ExpressCarWash} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section3;