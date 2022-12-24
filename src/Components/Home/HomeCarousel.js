import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function HomeCarousel(props) {
    return (
        <div>
              <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/home_about_1_image.webp"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark display-1 animate__animated animate__bounceInLeft'>Sieu khuyen mai</h3>
         <p className='text-dark h3 animate__animated animate__bounceInRight animate__delay-1s'>Dynamic Island</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block w-100" 
          src="/images/home_about_2_image.webp"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark display-1 animate__animated animate__bounceInLeft'>Samsung Galaxy Watch</h3>
          <p className='text-dark h3 animate__animated animate__bounceInRight animate__delay-1s'>The watch that knows you best</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/new_jacket-05_380bd52865724a16976b7de49c1e040e.jpeg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark display-1 animate__animated animate__bounceInLeft'>Galaxy Z</h3>
         <p className='text-dark h3 animate__animated animate__bounceInRight animate__delay-1s'>Linh hoạt biến hóa</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default HomeCarousel;