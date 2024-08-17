import React from "react";
import Accordian from "./../Faqs";
import { FAQS } from "@/constant"

export default function faq() {
  return (
    <div className="flex justify-center items-center flex-col w-full my-4">
      <h1 className="flex justify-center items-center text-[52px] text-primary text-teal font-extrabold  font-sans overflow-x-none my-4">
      Frequently Asked Questions
      </h1>
      {FAQS.map((item, index) => (
        <Accordian key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
