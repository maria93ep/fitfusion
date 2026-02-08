"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { GiFlame } from "react-icons/gi";

export default function Header({
  onSelectClass,
}: {
  onSelectClass?: (title: string) => void;
}) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const HEADER_OFFSET = 96;

  const classesTitles = [
    "Gymnastics Basics",
    "Advanced Training",
    "Kids Flex & Fun",
    "Strength & Conditioning",
    "Core Blast",
    "Performance Skills",
  ];

  // Funcție generică scroll cu offset
  const scrollToSection = (id: string) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // Click pe o clasă din dropdown sau mobil
  const handleClassClick = (title: string) => {
    onSelectClass?.(title);
    setOpenDropdown(null);
    setMobileMenuOpen(false);

    const id = title.toLowerCase().replace(/ /g, "-");
    scrollToSection(id);
  };

  // Click pe About sau sub-secțiuni
  const handleAboutClick = (id: string) => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-black text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* LOGO */}
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <GiFlame className="text-yellow-400 text-xl" />
          <h1 className="text-2xl font-extrabold text-yellow-400">
            FitFusion
          </h1>
        </div>

        {/* DESKTOP */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 font-semibold">
            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-yellow-400"
            >
              Home
            </li>

            {/* CLASSES */}
            <li
              className="relative cursor-pointer hover:text-yellow-400"
              onMouseEnter={() => setOpenDropdown("classes")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              Classes
              {openDropdown === "classes" && (
                <div className="absolute mt-2 bg-black border border-gray-700 rounded-xl p-4 space-y-2">
                  {classesTitles.map((title) => (
                    <div
                      key={title}
                      onClick={() => handleClassClick(title)}
                      className="hover:text-yellow-400 cursor-pointer"
                    >
                      {title}
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* ABOUT */}
            <li
              className="relative cursor-pointer hover:text-yellow-400"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              About
              {openDropdown === "about" && (
                <div className="absolute mt-2 bg-black border border-gray-700 rounded-xl p-4 space-y-2">
                  <div
                    onClick={() => handleAboutClick("about-intro")}
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    About
                  </div>
                  <div
                    onClick={() => handleAboutClick("about-trainers")}
                    className="hover:text-yellow-400 cursor-pointer"
                  >
                    Trainers
                  </div>
                </div>
              )}
            </li>

            <li
              onClick={() => scrollToSection("pricing")}
              className="cursor-pointer hover:text-yellow-400"
            >
              Pricing
            </li>
            <li
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer hover:text-yellow-400"
            >
              Contact
            </li>
          </ul>
        </nav>

        {/* MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-3xl text-yellow-400"
        >
          <FiMenu />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 p-6">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-4xl text-yellow-400 mb-8"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-2xl font-bold text-yellow-300">
            <li onClick={() => scrollToSection("home")}>Home</li>

            {classesTitles.map((title) => (
              <li key={title} onClick={() => handleClassClick(title)}>
                {title}
              </li>
            ))}

            <li onClick={() => handleAboutClick("about-intro")}>About</li>
            <li onClick={() => handleAboutClick("about-trainers")}>Trainers</li>
            <li onClick={() => scrollToSection("pricing")}>Pricing</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
}
