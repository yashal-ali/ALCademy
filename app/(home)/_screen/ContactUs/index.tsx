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
      <p className="flex justify-center items-center text-lg text-primary font-extrabold my-2 font-sans overflow-x-none px-4">
    Got feedback? We're eager to hear your thoughts! Drop us a line, and let's make something great together.
</p>
<p className="flex justify-center items-center text-lg text-primary font-extrabold my-2 font-sans overflow-x-none px-4 ">
    Questions or concerns? We're just a click away. Contact us, and we'll get back to you as soon as possible.
</p>
<div className="text-center text-sm text-gray-600 px-4">
    Have questions? Email us at <a href="mailto:support@company.com" className="text-primary">support@company.com</a> or call <a href="tel:+1234567890" className="text-primary">+1 (234) 567-890</a>.
</div>



      <Form />
      <Banner />
    </div>
  );
}
