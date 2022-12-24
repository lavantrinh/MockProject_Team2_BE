import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function HomeCarousel(props) {
    return (
        <div>
              <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block px-5 mx-5" width={800}
          src="/images/1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-dark display-1 animate__animated animate__bounceInLeft'>Sieu khuyen mai</h3>
         <p className='text-dark h3 animate__animated animate__bounceInRight animate__delay-1s'>Dynamic Island</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
           className="d-block px-5 mx-5" width={800}
          src="/images/2.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-dark display-1 animate__animated animate__bounceInLeft'>Samsung Galaxy Watch</h3>
          <p className='text-dark h3 animate__animated animate__bounceInRight animate__delay-1s'>The watch that knows you best</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block px-5 mx-5" width={800}
          src="img/1.png"
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