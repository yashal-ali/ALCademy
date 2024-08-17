"use client";
import React from "react";

function SaleBanner() {
  
  return (
    <div
          className="relative px-10 tablet:px-20 mt-[100px] min-h-[400px] py-[100px] overflow-hidden   w-full flex flex-col justify-center items-center gap-y-8 text-center bg-no-repeat bg-cover bg-fixed bg-[#007B8B] bg-center opacity-[0.93] bg-blend-multiply"
          style={{
            backgroundImage: "url('https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/learning_online_digital_analyt.jpeg?VersionId=HZF3HNOIxGPjQFb6t1ummfSpWlcvcHrk')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white">
          
            <p className="text-3xl text-white mt-3 mb-4 pb-4 max-w-[75%] font-extrabold">
            Optimize the effectiveness of your AI interactions with our response optimization service. We analyze your prompt usage and provide recommendations to enhance the accuracy and relevance of AI-generated answers.
            </p>
          </div>
        </div>
      );
}

export default SaleBanner;
