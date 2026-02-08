"use client";
import Image from "next/image";
import { FaDumbbell, FaLeaf, FaShieldAlt, FaRunning } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Progression",
      desc: "Structured programs to help you grow consistently and safely.",
      icon: <FaRunning className="text-yellow-400 text-xl mb-1" />,
    },
    {
      title: "Workout",
      desc: "Engaging exercises for strength, endurance, and flexibility.",
      icon: <FaDumbbell className="text-yellow-400 text-xl mb-1" />,
    },
    {
      title: "Nutrition",
      desc: "Guidance on balanced diets to fuel your body for results.",
      icon: <FaLeaf className="text-yellow-400 text-xl mb-1" />,
    },
    {
      title: "Self Defence",
      desc: "Practical techniques to build confidence and personal safety.",
      icon: <FaShieldAlt className="text-yellow-400 text-xl mb-1" />,
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Imaginea mai mică și proporțională */}
        <div className="md:w-5/12 flex justify-center md:justify-start">
          <div className="overflow-hidden rounded-2xl shadow-xl w-full max-w-xs">
            <Image
              src="/img11.jpg"
              alt="Why Choose Us"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Iconițe și Text */}
        <div className="md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left gap-8">
          
          {/* Titlu */}
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-10 uppercase">
            WHY CHOOSE US?
          </h2>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 w-full">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <div className="bg-neutral-800 p-2 rounded-lg flex justify-center items-center mb-2">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
