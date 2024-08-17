// Services.tsx
import React from "react";
import { SERVICES } from "@/constant";
import logo from "@/public/assets/images/bg-image.jpg";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import "./style.css";

function Services({ isVisible }: any) {
  const data = SERVICES;

  return (
    <div className="relative -mt-[150px] px-10 tablet:px-20 flex flex-wrap gap-x-32 items-center mobile:items-start justify-center mobile:flex-row mobile:gap-x-[100px] gap-y-10 pb-4">
      {data.map(({ heading, image }, index) => (
        <div
          className="flex flex-col gap-y-5 items-center text-center min-w-[300px] rounded-xl bg-transparent hover:"
          key={index}
          style={{
            boxShadow: "0px 4px 40px #00000014",
          }}
        >
          <div className="bg-white shadow-main rounded-full w-[150px] h-[150px] px-5 pt-[17px]">
            <Image
              src={image}
              alt="speedometer"
              className="rounded-full items-center justify-center flex w-[150px] h-[120px] mx-auto"
            />
          </div>
          <h2 className="font-bold text-primary uppercase text-lg pb-4 mb-7 w-[80%]">{heading}</h2>
        </div>
      ))}
    </div>
  );
}

export default Services;
