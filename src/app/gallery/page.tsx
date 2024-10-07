"use client";
import React from "react";
import 'aos/dist/aos.css'; // Import AOS styles

import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';


const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl md:text-3xl lg:text-4xl items-center font-bold italic mt-10 mb-20 animate-bounce">
        Images
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 ml-4 md:ml-20">
        <img
          src="/images/img1.avif"
          alt="Ice Cream 1"
          className="w-full h-60 md:w-3/4 md:h-80 rounded-md mt-10"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <img
          src="/images/blue.jpg"
          alt="Ice Cream 2"
          className="w-full md:w-3/4 h-60 md:h-80 mt-10 rounded-md"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <img
          src="/images/gl.jpg"
          alt="Ice Cream 3"
          className="w-full md:w-3/4 h-60 md:h-80 mt-10 rounded-md"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <img
          src="/images/ice6.webp"
          alt="Ice Cream 4"
          className="w-full md:w-3/4 h-60 md:h-80 mt-10 rounded-md"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <img
          src="/images/frozen.jpg"
          alt="Ice Cream 5"
          className="w-full md:w-3/4 h-60 md:h-80 mt-10 rounded-md"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
        <img
          src="/images/ice5.jpg"
          alt="Ice Cream 6"
          className="w-full md:w-3/4 h-60 md:h-80 mt-10 rounded-md"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        />
      </div>
    </div>
  );
};

export default Gallery;
