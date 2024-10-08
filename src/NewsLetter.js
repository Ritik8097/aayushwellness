import React, { useState } from 'react';

export default function NewsletterSignup() {
 
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2c0d5343-1be2-4839-a5f8-7dfe15886a76");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    });

    const data = await response.json();

    if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
    } else {
        console.log("Error", data);
        setResult(data.message);
    }
};
  return (
    <div className="max-w-screen-md mx-auto py-20 px-4 text-center">
      <section className="mb-10">
       
        <h3 className="text-3xl text-center  text-[#d1a272]-600 mb-6">

        Stay Connected with Aayush Wellness
        </h3>
        <p className="text-lg text-gray-600 mb-6">
        Subscribe to our newsletter and be the first to know about our latest health and wellness products, expert tips, and exclusive offers. Join our community and embark on a journey towards a healthier, happier you.
        </p>
      </section>
      <section>
        <form onSubmit={onSubmit}  className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full md:w-80 px-4 py-2 border border-[#d1a272] rounded-md text-gray-800"
           placeholder="Enter your email"
          />
          <button
            type="submit"
            className="bg-[#d1a272] text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors duration-300"
          >
            Subscribe
          </button>
        </form>
      </section>
      {result && (
        <div className="mt-4 text-lg text-gray-600">
          Thanks for your response!
        </div>
      )}
    </div>
  );
}
