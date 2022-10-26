import React from "react";
import Carousel from "react-bootstrap/Carousel";
import brand1 from "../../assets/Brands/1.png";
import brand2 from "../../assets/Brands/2.png";
import brand3 from "../../assets/Brands/3.png";
import brand4 from "../../assets/Brands/4.png";

const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={brand1} alt='First slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={brand2} alt='Second slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={brand3} alt='Third slide' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={brand4} alt='Fourth slide' />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
