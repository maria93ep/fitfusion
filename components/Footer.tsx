"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 mt-20 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-14">

        {/* LOGO + DESCRIPTION */}
        <div>
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-4 tracking-wide">
            FitFusion Gym
          </h2>
          <p className="text-lg leading-relaxed text-gray-400">
            Premium gymnastics & performance training center designed for strength, flexibility,
            mobility, discipline and long-term physical evolution.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <a href="#about-intro">About</a>
<a href="#classes">Classes</a>
<a href="#about-trainers">Trainers</a>
<a href="#contact">Contact</a>

          </ul>
        </div>

        {/* SCHEDULE */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Schedule</h3>
          <ul className="space-y-3 text-lg">
            <li>Mon – Fri: <span className="text-yellow-400">08:00 – 21:00</span></li>
            <li>Saturday: <span className="text-yellow-400">09:00 – 18:00</span></li>
            <li>Sunday: <span className="text-yellow-400">Closed</span></li>
          </ul>
        </div>

        {/* CONTACT + SOCIALS */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Contact</h3>

          <p className="flex items-center gap-3 text-lg mb-3">
            <FaPhone className="text-yellow-400" /> +373 000 000
          </p>

          <p className="flex items-center gap-3 text-lg mb-6">
            <FaEnvelope className="text-yellow-400" /> info@fitfusion.com
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="p-3 bg-neutral-900 rounded-full hover:bg-yellow-400 transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="#" className="p-3 bg-neutral-900 rounded-full hover:bg-yellow-400 transition">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-3 bg-neutral-900 rounded-full hover:bg-yellow-400 transition">
              <FaTiktok className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-16 text-center text-gray-500 text-md border-t border-neutral-800 pt-6">
        © {new Date().getFullYear()} FitFusion Gym. All rights reserved.
      </div>
    </footer>
  );
}
