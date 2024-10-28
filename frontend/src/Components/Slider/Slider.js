import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import img1 from '../../SliderImages/image1.jpg';
import img2 from '../../SliderImages/image2.jpg';
import './Slider.css';
function Slider() {
  return (
    <div className='slider'>
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          src={img1}
          alt="First slide"
          className="d-block w-100 carousel-image"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          src={img2}
          alt="Second slide"
          className="d-block w-100 carousel-image"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default Slider;