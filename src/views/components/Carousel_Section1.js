import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import carouselImage1 from './../../assets/carousel/slide3.png';
import carouselImage2 from './../../assets/carousel/slide2.png';
import carouselImage3 from './../../assets/carousel/slide3.png';
import carouselImage4 from './../../assets/carousel/slide4.png';

function Carousel_Section1() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage1}
          alt="First slide"
          />
        <Carousel.Caption>
          <h3>MILLIENIAL OWNED</h3>
          <h1>Detail Shop In Northeast Houston</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage2}
          alt="First slide"
          />
        <Carousel.Caption>
          <h1>Restoring your vehicle to its original shine! Guaranteed!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage3}
          alt="First slide"
          />
        <Carousel.Caption>
          <h1>No-Haggle Pricing, No Heavy Markups! 100% Satisfaction guaranteed!</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carouselImage4}
          alt="First slide"
          />
        <Carousel.Caption>
          <h3>JOIN OUR FAEVAA REWARDS PROGRAM TODAY!</h3>
          <h1>Be rewareded each time you visit our detail shop.</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_Section1;