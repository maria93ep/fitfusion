"use client";

export default function Intro() {
  return (
    <section id="about-intro" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">
            Intro
          </h2>

          <p className="text-gray-300 text-lg mb-4">
            At FitFusion, we combine high-end gym equipment with a modern,
            performance-driven environment designed to push your limits safely
            and effectively.
          </p>

          <p className="text-gray-300 text-lg mb-4">
            Every workout is guided by expert trainers who create customized
            routines focused on strength, endurance, flexibility and overall
            body transformation.
          </p>

          <p className="text-gray-300 text-lg">
            Join a fitness community where motivation meets innovation. Every
            step you take brings you closer to the best version of yourself.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/img08.jpg"
              alt="FitFusion Intro"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
