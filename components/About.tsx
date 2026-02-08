"use client";
import React from "react";

export default function About() {
  const trainers = [
    {
      name: "Emill Carter",
      role: "Gymnastics Coach",
      experience: "8 years professional experience",
      img: "/img01.jpg",
      desc: "Specialized in flexibility, mobility improvement and advanced gymnastics technique."
    },
    {
      name: "Michael Adams",
      role: "Strength & Conditioning Coach",
      experience: "10 years experience",
      img: "/img02.jpg",
      desc: "Focused on strength development, body transformation and functional performance training."
    },
    {
      name: "Sophia Bennett",
      role: "Kids Training Specialist",
      experience: "6 years experience",
      img: "/img03.jpg",
      desc: "Expert in safe progressive learning for kids, coordination and full-body motor skills."
    },
    {
      name: "Daniela Brooks",
      role: "Flexibility & Balance Instructor",
      experience: "7 years experience",
      img: "/img04.jpg",
      desc: "Improves mobility, posture and body balance through personalized training sessions."
    }
  ];

  return (
    <section id="about" className="py-24 bg-black text-white">
      {/* INTRO SECTION WITH IMAGE */}
      <div id="about-intro" className="max-w-6xl mx-auto px-6 mb-24 flex flex-col md:flex-row items-center gap-8">
        {/* IMG LEFT */}
        <div className="md:w-1/2">
          <img
            src="/img05.jpg"
            alt="FitFusion Gym"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
        {/* TEXT RIGHT */}
        <div className="md:w-1/2">
          <h2 className="text-5xl font-bold mb-6 text-yellow-400">About FitFusion</h2>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Welcome to <strong>FitFusion</strong>, a modern performance center where discipline, innovation, and personalized training come together to shape stronger, more confident athletes. Our philosophy focuses on creating sustainable progress through guided practice and smart training systems.
          </p>
          <p className="text-xl text-gray-300 mb-6 leading-relaxed">
            Every program is designed with precision, combining functional gymnastics, strength development, mobility work, and technique refinement. We believe that training shouldn’t just change your body — it should improve your lifestyle, energy, and mindset.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            With certified instructors, safe progressions, and a motivating environment, FitFusion helps both beginners and advanced athletes reach their full potential.
          </p>
        </div>
      </div>

      {/* TRAINERS SECTION */}
      <div id="about-trainers" className="max-w-6xl mx-auto px-6 text-center mb-10">
        <h3 className="text-4xl font-extrabold mb-4 text-yellow-400">Meet Our Trainers</h3>
        <p className="text-gray-400 mb-10 text-lg">
          A team of certified professionals dedicated to your progress.
        </p>
        <div className="grid md:grid-cols-4 gap-10">
          {trainers.map((t, i) => (
            <div
              key={i}
              className="bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/20 hover:scale-105 transition transform"
            >
              <img src={t.img} alt={t.name} className="w-full h-72 object-cover" />
              <div className="p-6 text-center">
                <h4 className="text-2xl font-bold text-white">{t.name}</h4>
                <p className="text-yellow-500 font-semibold mt-1">{t.role}</p>
                <p className="text-gray-400 text-sm mt-1">{t.experience}</p>
                <p className="text-gray-300 mt-4 text-sm">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
