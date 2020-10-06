import React from 'react';
import CarHeroImage from './../assets/camry_hero.png';


function Home() {
  return (
    <div className="home container" id="home">
      <div className="row mt-5">
        <div className="col-lg-7 col-md-12" style={{zIndex:'999'}}>
          <div className="hero-content">
            <h1 className="font-weight-bold mb-5">Welcome to Faevaa Detail &amp; Go</h1>
            <p className="text-left">A millennial owned full-service detail shop &amp; mobile detailing services company in Northeast Houston Texas.</p>
            <p className="text-left">Our detail shop offers exterior &amp; interior cleaning, wheel &amp; tire cleaning, odor bombing, waxing and much more.</p>
            <p className="text-left">We are open 7 days a week, Monday-Sunday from 9:00 AM-8:00 PM no matter if you work early or late Faevaa Detail &amp; Go is at your disposal.</p>
            <p className="text-left">Our mission is to provide low cost affordable car washes and detailing at a fraction of the cost than leading car care providers in Houston Texas.</p>
            {/* <a className="btn btn-primary" href="/">Go Faevaa Detail</a> */}
          </div>
        </div>
        <div className="col-lg-5 col-md-12 p-0" style={{marginLeft:'-5px'}}>
          <img src={CarHeroImage} alt="Carmy Hero Car" width="100%" height="auto"/>
        </div>
      </div>
      <h1 className="font-weight-bold mt-2 text-black mt--50 mb-5">Why choose Faevaa Detail &amp; Go?</h1>
      <div className="row mt-4">
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <center style={{fontSize: '5em'}}><i className="fas fa-wifi"></i></center>
          <h1 className="font-weight-bold text-info">Free Customer Wi-Fi</h1>
          <p className="text-success">We provide high-speed customer Wi-Fi. While you wait for your vehicle to be finished detailing.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <center style={{fontSize: '5em'}}><i className="fas fa-tv"></i></center>
          <h1 className="font-weight-bold text-info">Free HD TV &amp; Pool Table</h1>
          <p className="text-success">We offer cable TV and complimentary pool table for our customer enjoyment while you wait for your vehicle.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <center style={{fontSize: '5em'}}><i className="fas fa-coffee"></i></center>
          <h1 className="font-weight-bold text-info">Free Popcorn &amp; Coffee Machine</h1>
          <p className="text-success">Complimentary coffee and popcorn served for our customers while you wait for your vehicle to be finished.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <center style={{fontSize: '5em'}}><i className="fas fa-industry"></i></center>
          <h1 className="font-weight-bold text-info">Vending Machine</h1>
          <p className="text-success">We have onsite vending machines for our customers to purchase drinks and snacks to consume while they await completion of their vehicle detailing.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <center style={{fontSize: '5em'}}><i className="fa fa-utensils"></i></center>
          <h1 className="font-weight-bold text-info">Free Chili Cheese Hot Dogs</h1>
          <p className="text-success">Every Friday-Sunday our detail shop offers free chili cheese dog light lunches to consume while you wait for your vehicle to be completed.</p>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <center style={{fontSize: '5em'}}><i className="fas fa-car"></i></center>
          <h1 className="font-weight-bold text-info">Free inside &amp; out wash after 10 Paid Car Washes each time</h1>
          <p className="text-success">Faevaa Rewards members enjoy a free platinum diamond wash after each 10th car wash purchase.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;