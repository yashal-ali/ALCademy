// Testimonial.js

import { useState } from "react";
import { TTESTIMONIAL } from "@/type";
type TProps = {
   review:string,name:string, rating:number
}
const Card = ({review,name,rating }:TProps) => {
  return (
    <div
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px", 
      }}
      className="flex flex-col min-h-[170px] p-4 mb-4 bg-white"
    >
      <p className="text-primary my-2">{review}</p>
      <p className="font-bold text-primary">{name}</p>
      <div className="flex space-x-1">
        {[...Array(5)].map((star, starIndex) => (
          <span
            key={starIndex}
            className={`text-yellow-400 ${
              starIndex < rating ? "fill-current" : "fill-none"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
