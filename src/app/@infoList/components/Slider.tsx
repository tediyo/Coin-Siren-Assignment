'use client';

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CheckCards from './CheckCards';
export default function Carousoule() {
  const sliderRef = useRef<Slider>(null);
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop sliding
    speed: 500, // Animation speed
    slidesToShow: 5, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false,
    centerMode: true,
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Move to the next slide
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const cardData = [
    {
      imgSrc: '/screenImage.png',
      content: '해외 마케팅',
    },
    {
      imgSrc: '/Frame 5031.png',
      content: '퍼블리셔',
    },
    {
      imgSrc: '/Frame 5031 (1).png',
      content: '캐드원(제도사)',
    },
    {
      imgSrc: '/Frame 5065 (1).png',
      content: '해외 세일즈',
    },
  ];
  return (
    <>
      <div className="hidden sm:block fade-in-five-seconds ">
        <Slider ref={sliderRef} {...settings}>
          {cardData.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </Slider>
      </div>
      <div className="sm:hidden block px-5 flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex gap-5">
            <CheckCards text={'한국어 능력'} />
            <CheckCards text={'업무 수행 능력'} />
          </div>
          <div className="flex gap-5">
            <CheckCards text={'한국어 능력'} />
            <CheckCards text={'업무 수행 능력'} />
          </div>
        </div>
        <div>
          <span className="text-white underline">개발자가 필요하신가요?</span>
        </div>
      </div>
    </>
  );
}
