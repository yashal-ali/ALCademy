"use client";
import React, { useState } from "react";
import Input from "./Input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  lastName: string;
  emailAddress: string;
  message: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    emailAddress: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
  };

  const validateForm = () => {
    let formIsValid = true;
    const newErrors: Partial<FormData> = {};
    Object.keys(formData).forEach((field) => {
      if (formData[field as keyof FormData].trim() === "") {
        newErrors[field as keyof FormData] = "This field is required";
        formIsValid = false;
      }
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address";
      formIsValid = false;
    }
    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .send(
          "service_9ho8amn", // Replace with your EmailJS Service ID
          "template_7gt3qu6", // Replace with your EmailJS Template ID
          {
            from_name: `${formData.name} ${formData.lastName}`,
            email: formData.emailAddress,
            message: formData.message,
          },
          "aPqPLJsR3YQ6YKvrk" // Replace with your EmailJS User ID
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            // Reset form after successful submission
            setFormData({
              name: "",
              lastName: "",
              emailAddress: "",
              message: "",
            });
            alert("Message sent successfully!");
          },
          (err) => {
            console.log("FAILED...", err);
            alert("Failed to send the message. Please try again later.");
          }
        );
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <form
      className="flex flex-col justify-center items-center max-w-[1000px] w-full mx-auto p-4 sm:p-6 md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col sm:flex-row sm:space-x-4 md:min-w-[600px] min-w-full">
        <Input
          placeholder="First Name"
          value={formData.name}
          error={errors.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="min-h-[74px] w-full"
        />
        <Input
          placeholder="Last Name"
          value={formData.lastName}
          error={errors.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          className="min-h-[74px] w-full mt-4 sm:mt-0"
        />
      </div>
      <div className=" md:min-w-[600px] min-w-full">
      <Input
        placeholder="Email Address"
        value={formData.emailAddress}
        error={errors.emailAddress}
        onChange={(e) => handleChange("emailAddress", e.target.value)}
        className="min-h-[74px] w-full mt-4"
      />
      </div>
     
      <Textarea
        placeholder="Enter A Message"
        value={formData.message}
        onChange={(e: any) => handleChange("message", e.target.value)}
        className="mt-4 h-[220px] w-full bg-white text-black shadow-lg placeholder:text-gray-600 max-w-[600px]"
      />
      <div className="flex justify-center items-center mt-10 w-full">
        <button
          title="Contact Us"
          type="submit"
          className="bg-[#004643] text-white px-6 py-3 rounded-md font-bold text-center w-full sm:w-auto"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
