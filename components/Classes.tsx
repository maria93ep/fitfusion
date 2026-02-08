"use client";
import React from "react";
import Image from "next/image";

interface ClassItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  intensity: string;
  image: string;
}

interface ClassesProps {
  activeClass?: string | null;
  clearSelection?: () => void;
}

const classesData: ClassItem[] = [
  {
    id: "gymnastics-basics",
    title: "Gymnastics Basics",
    description: "Introduces fundamental gymnastics skills for beginners of all ages.",
    duration: "60 min",
    intensity: "Low",
   image: "/img1.jpg",

  },
  {
    id: "advanced-training",
    title: "Advanced Training",
    description: "For experienced participants aiming to improve strength and technique.",
    duration: "75 min",
    intensity: "High",
    image: "/img7.jpg",
  },
  {
    id: "kids-flex-fun",
    title: "Kids Flex & Fun",
    description: "Fun, flexible exercises for kids to develop coordination and confidence.",
    duration: "45 min",
    intensity: "Medium",
    image: "/img8.jpg",
  },
  {
    id: "strength-conditioning",
    title: "Strength & Conditioning",
    description: "Workouts to build strength, stamina, and overall fitness.",
    duration: "60 min",
    intensity: "High",
    image: "/img4.jpg",
  },
  {
    id: "core-blast",
    title: "Core Blast",
    description: "Targeted core training for balance, posture, and endurance.",
    duration: "50 min",
    intensity: "Medium",
    image: "/img2.jpg",
  },
  {
    id: "performance-skills",
    title: "Performance Skills",
    description: "Enhances performance abilities and gymnastic techniques.",
    duration: "70 min",
    intensity: "High",
    image: "/img6.jpg",
  },
];

export default function Classes({ activeClass, clearSelection }: ClassesProps) {
  return (
    <section id="classes" className="max-w-7xl mx-auto px-6 py-16">

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-extrabold text-yellow-400">
          Our Classes
        </h2>

        {clearSelection && (
          <button
            onClick={clearSelection}
            className="text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
          >
            Clear Selection
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {classesData.map((cls) => (
          <div
            key={cls.id}
            id={cls.id}
            className={`bg-neutral-900 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition hover:scale-105 ${
              activeClass === cls.title ? "border-4 border-yellow-400" : ""
            }`}
          >
            {/* Imagine */}
            <div className="relative w-full h-48">
              <Image
                src={cls.image}
                alt={cls.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div className="p-4">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                {cls.title}
              </h3>

              <p className="text-gray-300 mb-2">
                {cls.description}
              </p>

              <p className="text-gray-400 text-sm">
                <strong>Duration:</strong> {cls.duration} |{" "}
                <strong>Intensity:</strong> {cls.intensity}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
