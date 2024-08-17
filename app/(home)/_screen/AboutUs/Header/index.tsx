/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useCallback, useEffect, useState } from "react";

function Hero() {
  const [headerOffset, setHeaderOffset] = useState(70);

  const updateHeaderOffset = useCallback(() => {
    const headerElement = document.querySelector("#header");
    if (headerElement) {
      const newHeaderHeight = headerElement.clientHeight;
      setHeaderOffset(newHeaderHeight);
    }
  }, []);

  useEffect(() => {
    updateHeaderOffset();
    const handleResize = () => updateHeaderOffset();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateHeaderOffset]);

  return (
    <div
      className="h-[30vh] mobile:min-h-[650px] w-full relative z-[-1] flex flex-col justify-center items-center gap-y-8 text-center bg-no-repeat bg-cover bg-fixed bg-[#05323D] bg-center opacity-[0.93] bg-blend-multiply rounded-b-md"
      style={{
        backgroundImage: `url("https://akm-img-a-in.tosshub.com/indiatoday/images/story/201908/learning_online_digital_analyt.jpeg?VersionId=HZF3HNOIxGPjQFb6t1ummfSpWlcvcHrkg")`, // Update the path accordingly
        top: `-${headerOffset}px`,
      }}
    ></div>
  );
}

export default Hero;
