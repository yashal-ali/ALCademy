"use client";
import React from "react";

function Banner() {

  return (
<div
      className="relative px-10 tablet:px-20 mt-[100px] min-h-[400px] py-[100px] overflow-hidden   w-full flex flex-col justify-center items-center gap-y-8 text-center bg-no-repeat bg-cover bg-fixed bg-[#007B8B] bg-center opacity-[0.93] bg-blend-multiply"
      style={{
        backgroundImage: "url('https://youthincmag.com/wp-content/uploads/2018/09/Tech-in-Education.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-[60px] text-white font-extrabold">
        Our Mission
        </h1>
        <p className="text-2xl text-white mt-3 mb-4 pb-4 max-w-[75%]">
        Our mission is to create a comprehensive educational ecosystem that supports both academic excellence and mental well-being. We aim to integrate advanced AI tools, wellness resources, and tailored support to provide a balanced and enriching learning environment.
        </p>
      </div>
    </div>
  );
}

export default Banner;
