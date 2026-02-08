"use client";
import React from "react";
import { FaSearch, FaDumbbell, FaChartLine, FaMedal } from "react-icons/fa";

export default function OurProcess() {
  const processSteps = [
    {
      title: "Analyse your Goal",
      desc: "We evaluate your current fitness level and set achievable objectives.",
      icon: <FaSearch className="text-yellow-400 text-4xl mb-4" />
    },
    {
      title: "Work hard on it",
      desc: "Structured training programs designed to challenge and improve you.",
      icon: <FaDumbbell className="text-yellow-400 text-4xl mb-4" />
    },
    {
      title: "Improve yourself",
      desc: "Regular tracking, motivation, and guidance to enhance your performance.",
      icon: <FaChartLine className="text-yellow-400 text-4xl mb-4" />
    },
    {
      title: "Achieve your Destiny",
      desc: "Reach your personal goals and maintain a lifelong healthy lifestyle.",
      icon: <FaMedal className="text-yellow-400 text-4xl mb-4" />
    },
  ];

  return (
    <section id="our-process" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">Our Process</h2>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-10">
          Step by step, we guide you from starting point to achieving your fitness goals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {processSteps.map((step, i) => (
            <div
              key={i}
              className="bg-neutral-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {step.icon}
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
