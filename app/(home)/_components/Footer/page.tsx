import React from "react";
import Logo from "@/components/UI/Header/Logo/page";
import { FOOTERNAV } from "@/constants";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#004643] flex flex-row justify-between tablet:flex-row tablet:justify-between gap-y-10 tablet:px-20 px-10 py-[100px] bg-green mt-[60px]">
      <div className="flex flex-col tablet:justify-between gap-y-10">
        <Logo />
        <p className="text-white font-bold"> 2024 LINGUAGLIMMER</p>
      </div>
      {Object.entries(FOOTERNAV).map(([key, value]) => (
        <div className="flex flex-col gap-y-6" key={key}>
          <h3 className="font-bold  uppercase text-white">{key}</h3>
          {value.map(({ title, to }, index) => (
            <Link
              key={index}
              href={to}
              className="text-white font-normal uppercase text-base"
            >
              {title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;
