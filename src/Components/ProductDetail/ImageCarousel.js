import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function ImageCarousel(props) {
  return (
    <div>
      <Carousel id='myCarousel1'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/221011_category_w_sweat.jpeg"
            alt="First slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/221011_category_w_cardigan.jpeg"
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/221011_category_w_tops.jpeg"
            alt="Third slide"
          />


        </Carousel.Item>
    
      </Carousel>
    </div>
  );
}

export default ImageCarousel;