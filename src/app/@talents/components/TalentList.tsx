// components/CenterModeSlider.jsx
'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import '../styles/CenterModeSlider.css'; // Custom styles for the slider
import Image from 'next/image';
import Bubble from '../../../../public/bubble2.png';

const CenterModeSlider = ({ cards }: { cards: any }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3, // Show three slides
    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
    centerPadding: '0px', // No padding around the center slide
    arrows: true, // Show navigation arrows
    dots: false, // Show navigation dots
    nextArrow: <span>hey</span>,
    prevArrow: <span>hey</span>,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       centerPadding: '0px',
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 3,
    //       centerPadding: '0px',
    //     },
    //   },
    // ],
  };

  return (
    <div className="fade-in-five-seconds">
      <div className="flex items-center justify-center">
        <Image src={Bubble} alt="bubble" />
      </div>

      <div className="grid sm:grid-cols-1 grid-cols-12">
        <div className="slider-container sm:col-start-1 sm:col-end-13 col-start-2 col-end-12">
          <Slider {...settings} className="center">
            {cards.map((card: any, index: any) => (
              <div key={index} className="slide-wrapper">
                <Card {...card} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CenterModeSlider;
