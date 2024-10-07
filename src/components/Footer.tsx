"use client";
import { url } from "inspector";
import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center p-4 mt-20 " style={{background: 'url(/images/stra.jpg)'}} >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-center mb-20">
        <Typewriter
          words={["Thank For Visiting Our Website"]}
          loop={true}
          cursor
          cursorStyle=" "
        />
      </h2>
      
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold italic mb-5 animate-bounce" >
        Follow Us
      </h3>
      <div className="flex flex-row gap-5 mb-10" >
        <a href="https://www.facebook.com/" target="_blank">
          <FaFacebook className="size-10 animate-spin" />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <FaInstagramSquare className="size-10 animate-spin" />
        </a>
        <a href="https://www.twitter.com/" target="_blank">
          <FaTwitter className="size-10 animate-spin" />
        </a>
      </div>
      <div className="flex flex-col text-center items-center">
        <p>Feel free to contact us for any inquiries or suggestions.</p>

        <p>�� 2021 Ice Cream Shop. All rights reserved.</p>
        <p>Designed by Ayesha Iqbal</p>
      </div>
      
    </footer>
  );
};

export default Footer;
