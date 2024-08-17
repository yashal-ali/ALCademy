"use client";
import React  from "react";
import Hero from "./Hero";
import Services from "./Services";
import Banner from "./Banner";

import Faq from "./Faqs/Accordian";
import {  NEWCOLLECTION,FAQS } from "@/constant";
import NewCollection from "./NewCollection";
import SaleBanner from "./SaleBanner";
import About from "../AboutUs";
import AboutCard from "../AboutUs/AboutCard";
import Header from "../../_components/Header/page";
import Works from "./HowItWork";

export default function LandingPage() {
  return (
    <div>
      <Header/>
      <Hero />
      <Services />
      <Banner />
      <h1 className="flex justify-center items-center text-[52px] mt-10 text-primary font-extrabold  font-sans overflow-x-none">
      Get Started with ALCadmey
      </h1>
      <AboutCard/>
      <SaleBanner />
      <NewCollection data={NEWCOLLECTION} />
      <Works/>
      <Faq />
    </div>
  );
}
