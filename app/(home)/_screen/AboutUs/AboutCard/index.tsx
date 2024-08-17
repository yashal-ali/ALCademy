
import { TBESTSELLING } from "@/type";
import { TSUBCARDDATA } from "@/type";
import bg from "./../../../../../public/asset/images/about-us.jpeg";
import React from "react";
import Image from "next/image";
import { redirectToURL } from "@/constant";


function AboutCard() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="flex flex-row gap-x-4 gap-y-10 tablet:flex-wrap tablet:flex-row tablet:gap-x-[56px] items-center justify-center mt-[60px] max-w-[1100px]">
        <div className="flex flex-col gap-y-4 px-4 shadow-main rounded-3xl cursor-pointer mx-4 min-w-[505px] min-h-[55px]">
          <Image
            src={bg}
            alt=""
            className="min-w-[500px] min-h-[450px] rounded-md"
          />
        </div>
        <div className="flex-col mx-3 -mt-[50px]">
          <h1 className="flex justify-center items-center text-[42px] text-primary font-extrabold font-sans overflow-x-none ">
          Improved Productivity,
          </h1>
          <p className="text-primay px-4 py-4 my-4 text-xl flex justify-center items-center ">
          Embark on a journey of enhanced learning, improved productivity, and overall well-being with PromptGenie. Our platform offers a wide range of features to support your needs, whether you’re a student looking to streamline your studies, a teacher seeking effective tools, or anyone interested in optimizing their AI interactions. Explore our resources today and experience the benefits of a comprehensive and user-friendly solution
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default AboutCard
