"use client";
import Image from "next/image";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);

    try {
      const handleFunc = async () => {
        const res = await fetch("/api/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        toast.success("Meassage sent successfully");
        console.log("data post", data);
      };
      handleFunc();
    } catch (error) {
      console.log(error);
    }

    setFormData({ name: "", email: "", message: "" });
  };
  return (
      <div className="max-w-6xl mx-auto px-6 py-16 text-sm ">
          <div className="text-center ">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
             HAVE SOME QUESTIONS !
            </h2>
            <p className="text-gray-600">
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
      <div className=" text-sm flex justify-center items-center">
        <div className="">
          <Image src="/message.png" alt="" width={500} height={500} />
        </div>
        <div className=" p-8 md:p-12 flex-1">
         

          <div className="space-y-3 ">
            {/* Name Input */}
            <div>
              <label className=" text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className=" text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label className=" text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-sky-700 hover:opacity-80 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
