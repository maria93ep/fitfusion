"use client";
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-yellow-400 tracking-wide">
          Contact Us
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Reach out to us, visit our studio, or send a message directly.
        </p>
      </div>

      {/* GRID: FORM + INFO */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* FORMULAR */}
        <form
          action="https://formspree.io/f/mnnkylyo" 
          method="POST"
          className="bg-neutral-900 rounded-xl p-8 shadow-xl space-y-6"
        >
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Send us a message</h3>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition"
          >
            Send Message
          </button>
        </form>

        {/* INFORMAȚII CONTACT */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Our Contact Info</h3>

          <div className="bg-neutral-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition flex items-start space-x-4">
            <span className="text-2xl mt-1">📍</span>
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <a
                href="https://share.google/NvoaYjpZILXFUMHtv" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-300"
              >
                Str. 31 August, Telenesti, Moldova
              </a>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition flex items-start space-x-4">
            <span className="text-2xl mt-1">📞</span>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <a href="tel:+37312345678" className="hover:underline text-gray-300">
                +373 123 456 78
              </a>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition flex items-start space-x-4">
            <span className="text-2xl mt-1">✉️</span>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <a
                href="mailto:stanmaria9327@yahoo.com"
                className="hover:underline text-gray-300"
              >
                infofitfusion@yahoo.com
              </a>
            </div>
          </div>

          {/* Social media */}
          <div className="flex space-x-4 mt-4 text-gray-300 font-semibold">
            <a href="#" className="hover:text-yellow-400">FB</a>
            <a href="#" className="hover:text-yellow-400">IG</a>
            <a href="#" className="hover:text-yellow-400">TW</a>
          </div>
        </div>
      </div>
    </section>
  );
}
