"use client"
import React from 'react'
import 'aos/dist/aos.css'; // Import AOS styles

import AOS from 'aos'; // Import AOS library
import { useEffect } from 'react';


const page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);
  return (
    <div className='flex flex-col items-center px-5 md:px-10 lg:px-20 mt-20 bg-cover  overflow-hidden bg-center p-5 md:p-10 rounded-md'
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    style={{background: 'url(/images/stra.jpg)'}} >
          
        
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold italic animate-bounce text-center'>About Us</h1>
        <section className='w-full md:w-3/4 lg:w-2/3 text-justify  font-semibold mt-5' >
            <p className='mt-5 text-sm md-text-base'>At LusciousLicks, we believe that every scoop tells a story. Founded with a passion for creating exquisite ice cream, our journey began in a quaint kitchen where we experimented with flavors and ingredients. Today, we proudly serve a delightful range of handcrafted ice creams that capture the essence of joy and indulgence.</p>

            <p className='mt-5 text-sm md:text-base'>Our ice creams are made using only the finest ingredients, sourced locally whenever possible. Each flavor is a testament to our commitment to quality and creativity, from classic favorites like Rich Vanilla and Decadent Chocolate to unique blends inspired by seasonal fruits and artisanal treats.</p>

            <p className='mt-5 text-sm md:text-base'>At LusciousLicks, we strive to create a welcoming space where families and friends can gather, celebrate, and make sweet memories. Whether you're enjoying a cone on a sunny day or trying one of our exclusive seasonal flavors, our goal is to provide you with an unforgettable experience.</p>

            <p className='mt-5 font-semibold text-sm md:text-base'>Join us on this delightful journey and discover your new favorite flavor at LusciousLicks!</p>

        </section>
        
      
        
      
    </div>
  )
}

export default page
