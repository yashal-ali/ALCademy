/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";


function Hero() {
  const [headerOffset, setHeaderOffset] = useState(70);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

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

  const startTypingAnimation = () => {
    const originalText =
      "Transform Your Learning Experience with AI-Enhanced Templates";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setText(originalText.substring(0, currentIndex));
      currentIndex++;

      if (currentIndex > originalText.length) {
        clearInterval(typingInterval);
        setIsTyping(false);

        // Wait for 1 minute and then reset the animation
        setTimeout(() => {
          setIsTyping(true);
          setText("");
        }, 60000); // 1 minute in milliseconds
      }
    }, 50); // Adjust typing speed as needed
  };

  useEffect(() => {
    startTypingAnimation();
  }, []); // Run once on component mount

  const redirectToURL = () => {
    console.log('hello')
    window.location.href = 'https://yashal-ali-linguaglimmer--app-bc4hbw.streamlit.app/';
  };
  const router=useRouter()
  return (
    <div
      className="h-[70vh] mobile:min-h-[650px] w-full relative z-[-2] flex flex-col justify-center items-center gap-y-8 text-center bg-no-repeat bg-cover bg-fixed bg-[#007B8B] bg-center opacity-[0.93] bg-blend-multiply rounded-b-[70px]"
      style={{
        backgroundImage: `url("/asset/images/bg.jpg")`, // Update the path accordingly
        top: `-${headerOffset}px`,
      }}
      onClick={redirectToURL}
    >
      <h1 className="text-white uppercase text-4xl leading-[49px] tablet:text-3xl tablet:leading-[44px] laptop:text-[42px] laptop:leading-[56px] max-w-[900px] mobile:max-w-[1000px] mobile:w-10/12 font-bold">
        <>
        Transform Your Learning Experience with AI-Enhanced Templates
            <span className="cursor-blink"> !</span>
          </>
        
      </h1>
      <p className="text-white  text-2xl leading-[49px] tablet:text-3xl tablet:leading-[44px] laptop:text-[42px] laptop:leading-[56px] max-w-[900px] mobile:max-w-[1000px] mobile:w-10/12 ">Welcome to <span className="text-3xl font-bold"> ALCademy</span>, the ultimate platform for students and teachers seeking to optimize their learning and teaching experiences. From customizable prompt templates for efficient AI interactions to mental health support, study music, and resources tailored for educators, we provide everything you need to succeed and thrive academically</p>
    
     <div className="mt-4">
    
     
     </div>
    </div>
  );
}

export default Hero;

