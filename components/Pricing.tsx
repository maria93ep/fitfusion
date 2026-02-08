"use client";
import React from "react";

export default function Pricing() {
  const packages = [
    {
      title: "Individual Adult",
      desc: "Customized program for your personal goals, with a dedicated trainer.",
      monthly: "50€",
      personalTrainer: "80€"
    },
    {
      title: "Group Adult",
      desc: "Dynamic group classes for 4-8 people, trainer included.",
      monthly: "35€/person",
      personalTrainer: "70€/person"
    },
    {
      title: "Kids Class",
      desc: "Fun and educational classes for children 5-12 years old, focusing on motor skills and flexibility.",
      monthly: "25€/child"
    },
    {
      title: "Family Package",
      desc: "Combined subscription for 2 adults + 1 child, including savings.",
      monthly: "100€ total"
    },
    {
      title: "Annual Pass",
      desc: "Unlimited access for 12 months with discounts included for all class types.",
      annual: "500€"
    }
  ];

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-black text-white">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-5xl font-extrabold text-yellow-400 mb-4 tracking-wide">
          Pricing & Packages
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Choose the perfect package for you or your family. Flexible options for individuals, groups, and kids classes, with or without a personal trainer.
        </p>
      </div>

      {/* GRID CARDS */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className="bg-neutral-900 rounded-xl p-6 shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">{pkg.title}</h3>
              <p className="text-gray-300 mb-4">{pkg.desc}</p>
            </div>

            <div className="mb-4">
              {pkg.monthly && <p className="text-lg text-gray-200 mb-1">Monthly: <span className="font-semibold">{pkg.monthly}</span></p>}
              {pkg.personalTrainer && <p className="text-lg text-gray-200 mb-1">With Trainer: <span className="font-semibold">{pkg.personalTrainer}</span></p>}
              {pkg.annual && <p className="text-lg text-gray-200 mb-1">Annual: <span className="font-semibold">{pkg.annual}</span></p>}
            </div>

            <button
              onClick={scrollToContact}
              className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-xl w-full transition"
            >
              Sign Up
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
