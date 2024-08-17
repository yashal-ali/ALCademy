/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Card from "./SubCard";
import { TBESTSELLING } from "@/type";
import { TSUBCARDDATA } from "@/type";
import { NEWCOLLECTION2 } from "@/constant";
// import bg from "@/public/assets/images/banner.jpeg"
import React from "react";
import Image from "next/image";
import SubCard from "./SubCard";

type TProps = {
  data: TBESTSELLING[];
};

function NewCollection({ data }: TProps) {
  return (
    <div className="my-20 px-4 ">
      <h1 className="flex justify-center items-center text-[52px] text-primary font-extrabold  font-sans overflow-x-none">
        WHAT NEW
      </h1>
      <p className="text-primary text-xl flex justify-center items-center ">
        Features !!!
      </p>
      <div className="relative flex justify-center items-center">
        <div className="flex flex-row gap-y-10 tablet:flex-wrap tablet:flex-row tablet:gap-x-[56px] items-center justify-center mt-[60px] ">
          <div className="flex flex-col gap-y-4 px-4 shadow-main rounded-3xl cursor-pointer mx-4 min-w-[505px] min-h-[55px]">
          <div className="flex-col">
            { NEWCOLLECTION2.map((blog: any, index: number) => (
              <SubCard data={blog} key={index} />
            ))}
          </div>
          </div>
          <div className="flex-col">
            {data.map((blog: any, index: number) => (
              <SubCard data={blog} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
