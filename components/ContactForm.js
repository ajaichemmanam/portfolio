"use client";
import React, { useState } from "react";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const content = {};
    formData.forEach((value, key) => {
      content[key] = value;
    });
    console.log("content", content);
    const res = await fetch("/api/contact", {
      body: JSON.stringify(content),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    e.target.reset();
    setName("");
    setEmail("");
    setMessage("");
    alert(result.message);
  }
  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0"
    >
      <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
        Contact Me
      </h2>
      <p className="leading-relaxed mb-5">
        Interested in collaboration on a new project? Feel free to get in touch.
      </p>
      <div className="relative mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="message" className="leading-7 text-sm text-gray-400">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Submit
      </button>
    </form>
  );
}
