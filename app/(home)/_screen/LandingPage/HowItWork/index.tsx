"use client";
import React from "react";

function Works() {

  return (
<div
      className="relative px-10 tablet:px-20 mt-[100px] min-h-[400px] py-[100px] overflow-hidden   w-full flex flex-col justify-center items-center gap-y-8 text-center bg-no-repeat bg-cover bg-fixed bg-[#007B8B] bg-center opacity-[0.93] bg-blend-multiply"
      style={{
        backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5afaef26cc8fed65092569f3/1570486394768-L1VMQFQT05L7VBXLBXDL/46723689904_c7001a7d43_o.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute -top-10 left-0  w-full h-full flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-[40px] top-5 text-white font-extrabold">
        How It Works
        </h1>
        <div className="flex mt-8 px-5">
            
        <p className="text-2xl text-white mt-10 mb-4 pb-4 max-w-[25%]">
        1. Explore our extensive library of prompt templates, mental health resources, and study music options.
        </p>
        <p className="text-2xl text-white  mt-10 mb-4 pb-4 max-w-[25%]">
        2. Select and customize templates or resources to fit your specific needs and preferences.
        </p>
        <p className="text-2xl text-white  mt-10 mb-4 pb-4 max-w-[25%]">
        3. Use the tools and templates with your AI chatbots, integrate study music into your routine, and access mental health support as needed.
        </p>
        <p className="text-2xl text-white  mt-10 mb-4 pb-4 max-w-[25%]">
        4. Refine your usage with our optimization services to ensure you’re getting the most effective results from PromptGenie."
        </p>
        </div>
       
      </div>
    </div>
  );
}

export default Works