"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TCARDDATA } from "@/types";

type TProps = {
  data: TCARDDATA;
};

function Card({ data }: TProps) {
  const { thumbnail, title, description} = data;
  return (
    <div
      className="flex flex-col gap-y-4 px-4 pt-3 pb-7 shadow-main rounded-md w-[340px]  cursor-pointer mx-4"
      style={{
        boxShadow: "0px 4px 40px #00000014",
      }}
    >
      <div className="w-full h-[273px] bg-[#F5F5F5] rounded-3xl ">
        <Image src={thumbnail} alt="" className="w-full h-full " />
      </div>
      <h2 className="text-primary uppercase mt-4 ml-1 text-xl font-bold">
        {title}
      </h2>
      <div className="flex flex-col line-clamp-4 text-primary font-light text-ellipsis overflow-hidden max-h-[6.5em] whitespace-normal ml-4">
        <p className="m-0">{description}</p>
      </div>
    </div>
  );
}

export default Card;
