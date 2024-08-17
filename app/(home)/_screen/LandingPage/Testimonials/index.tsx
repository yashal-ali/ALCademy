
"use client";
import React, { useState, useRef, useEffect } from "react";
import { TTESTIMONIAL } from "@/type";
import { TESTIMONIALS } from "@/constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";


const Testimonial =() => {
  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef<Slider>(null);
    const [initialSlide, setInitialSlide] = useState(0);
  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition]);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    initialSlide,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-20">
      <h1 className="flex justify-center items-center text-[52px] text-primary font-extrabold my-10 font-sans overflow-x-none my-4">
        WHAT CLIENTS SAY
      </h1>
      <p className="text-primary my-4 text-xl flex justify-center items-center ">
        About Us !!!
      </p>
      <Slider
        ref={slider}
        {...settings}
        className="w-[94%] ml-10 mobile:w-[85%] tablet:w-[85%] "
      >
        {" "}
        {TESTIMONIALS.map((testimonials: TTESTIMONIAL, index) => (
          <>
            <div className="gap-x-4 flex mx-4 mt-4">
              <Card
                key={index}
                review={testimonials.review}
                name={testimonials.name}
                rating={testimonials.rating}
              />
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial

