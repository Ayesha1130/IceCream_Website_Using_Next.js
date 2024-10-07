"use client";
import React from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS library
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <div className="flex flex-col items-center px-5 md:px-10 lg:px-20 mt-20 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold italic text-center mb-20 animate-bounce ">
        Users Experience
      </h1>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 " >
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src="/images/u2.avif"
            alt="img-1"
            className="w-20 h-20 rounded-full"
          />
          <p>
            Aloysius, a 25-year-old Belgian chef, loves experimenting with
            different flavors and ingredients in his ice creams. He has a
            passion for sharing his knowledge with others and is always eager to
            learn more about the world of ice cream.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src="/images/u3.avif"
            alt="img-2"
            className="w-20 h-20 rounded-full "
          />
          <p>
            Amanda, a 30-year-old French baker, enjoys creating unique and
            delicious ice creams that cater to her taste buds. She is always
            eager to learn about the art of making ice cream and is always
            looking forward to sharing her knowledge with others.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src="/images/u4.avif"
            alt="img-3"
            className="w-20 h-20 rounded-full"
          />
          <p>
            Lucas, a 20-year-old Italian pastry chef, loves experimenting with
            different flavors and ingredients in his ice creams. He is always
            eager to learn more about the world of ice cream and is always
            looking forward to sharing his knowledge with others.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src="/images/u5.webp"
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <p>
            Margot, a 35-year-old French pastry chef, loves experimenting with
            different flavors and ingredients in her ice creams. She is always
            eager to learn more about the world of ice cream and is always
            looking forward to sharing her knowledge with others.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img src="/images/u6.jpg" alt="" className="w-20 h-20 rounded-full" />
          <p>
            Ava, a 25-year-old American pastry chef, loves experimenting with
            different flavors and ingredients in her ice creams. She is always
            eager to learn more about the world of ice cream and is always
            looking forward to sharing her knowledge with others.
          </p>
        </div>

        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <img
            src="/images/u7.webp"
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <p>
            Emma, a 30-year-old Belgian pastry chef, loves experimenting with
            different flavors and ingredients in her ice creams. She is always
            eager to learn more about the world of ice cream and is always
            looking forward to sharing her knowledge with others.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
