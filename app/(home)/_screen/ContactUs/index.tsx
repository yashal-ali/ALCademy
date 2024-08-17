import Header from "./../AboutUs/Header";

import Banner from "../LandingPage/Banner";
import Form from "./Form";
export default function Contact() {
  return (
    <div>
      <Header />
      <h1 className="flex justify-center items-center text-[52px] text-primary font-extrabold my-2 font-sans overflow-x-none ">
        Contact Us
      </h1>
      <p className="flex justify-center items-center text-[22px] text-primary font-extrabold my-2 mb-4 font-sans overflow-x-none ">
      Have questions or need support? Our team is here to help. Reach out to us via email, phone, or through our online form, and we’ll provide the assistance you need.
      </p>
      <Form />
      <Banner />
    </div>
  );
}
