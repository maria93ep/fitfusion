"use client";
import React from "react";

export default function Hero() {
  const videos = ["/video1.mp4", "/video4.mp4", "/video3.mp4"];
  const texts = [
    "Strength, Flexibility, Performance",
    "Push Your Limits Every Day",
    "Join FitFusion and Transform Yourself"
  ];

  return (
    <section id="home" className="pt-24 bg-black">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <div
            key={i}
            className="relative rounded-xl overflow-hidden bg-black"
          >
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-72 object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <p className="text-white text-lg font-semibold text-center px-4">
                {texts[i]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
