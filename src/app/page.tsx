// import { Navbar } from "@/components/Navbar";

// export default function Home() {
//   return (
//     <div className="h-full bg-background text-white">
//       <Navbar />
//       <div className="flex items-center justify-center text-4xl text-white font-semibold h-[90vh]">
//         TransformoDocs
//       </div>
//     </div>
//   );
// }




"use client";
import React, { useState } from "react";
import Image from 'next/image';

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-white shadow-sm fixed w-full z-50">
        <a href="#" className="text-lg sm:text-2xl font-bold text-gray-800">
          TransformoDocs
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4 sm:space-x-8">
          <li>
            <a href="#home" className="text-gray-600 hover:text-black">
              Home
            </a>
          </li>
          <li>
            <a href="#platform" className="text-gray-600 hover:text-black">
              Platform
            </a>
          </li>
          <li>
            <a href="#uses" className="text-gray-600 hover:text-black">
              Uses
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-600 hover:text-black">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-600 hover:text-black">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-gray-800 focus:outline-none"
  >
    {menuOpen ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    )}
  </button>
</div>

{/* Mobile Menu */}
{menuOpen && (
  <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-2 py-4 px-6 md:hidden">
    <li>
      <a href="#home" className="text-gray-600 hover:text-black">
        Home
      </a>
    </li>
    <li>
      <a href="#platform" className="text-gray-600 hover:text-black">
        Platform
      </a>
    </li>
    <li>
      <a href="#uses" className="text-gray-600 hover:text-black">
        Uses
      </a>
    </li>
    <li>
      <a href="#about" className="text-gray-600 hover:text-black">
        About
      </a>
    </li>
    <li>
      <a href="#contact" className="text-gray-600 hover:text-black">
        Contact
      </a>
    </li>
    <li>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="/sign-in"
          className="px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100"
        >
          Login
        </a>
        <a
          href="/sign-up"
          className="px-4 py-2 text-sm text-white bg-black rounded-md hover:bg-gray-800"
        >
          Sign Up
        </a>
      </div>
    </li>
  </ul>
)}

        <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
          <a
            href="/sign-in"
            className="px-3 py-1 sm:px-4 sm:py-2 text-sm text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Login
          </a>
          <a
            href="/sign-up"
            className="px-3 py-1 sm:px-4 sm:py-2 text-sm text-white bg-black rounded-md hover:bg-gray-800"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-white h-screen flex items-center justify-center">
        {/* SVG Overlay */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <Image
            src="/assets/Container.svg"
            alt="Background Icon"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Hero Section Content */}
        <div
          id="home"
          className="flex flex-col items-center justify-center px-4 sm:px-6 text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-black font-bold mb-4 sm:mb-6 leading-snug">
            Automate workflows for data <br /> extraction
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}
              powered by AI
            </span>
          </h1>
          <p className="text-gray-900 text-sm sm:text-base max-w-md sm:max-w-2xl mb-6 sm:mb-8 leading-relaxed">
            Serve dynamic landing page content based on users' UTM, geolocation,
            or device and improve quality scores, engagement, and conversion
            rates.
          </p>
          <div className="flex space-x-2 sm:space-x-4">
            <a
              href="#get-started"
              className="px-4 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Get Started
            </a>
            <a
              href="#trial"
              className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-800 rounded-md hover:bg-gray-100"
            >
              Trial
            </a>
          </div>
        </div>
      </div>
  


      {/* Trusted By Section */}
      <div id="platform" className="py-6 sm:py-9 bg-white text-center">
        <h2 className="text-lg font-bold text-black mb-4">Trusted By Ministries</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 mb-6 px-4 sm:px-6">
          {Array(8)
            .fill("Zenith")
            .map((company, index) => (
              <span
                key={index}
                className="px-2 py-1 sm:px-4 sm:py-2 border rounded-md text-sm font-medium text-gray-600"
              >
                {company}
              </span>
            ))}
        </div>
        <a
          href="#all"
          className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200"
        >
          View All
        </a>
      </div>

      {/* Features Section */}
      <div id="uses" className="py-6 sm:py-9 bg-gray-50 text-center">
        <a
          href="#how-to-use"
          className="inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 mb-4 sm:mb-6"
        >
          How To Use
        </a>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-black font-bold mb-4">
          Beyond Traditional Document <br /> Management
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-md sm:max-w-2xl mx-auto leading-relaxed">
          In a world drowning in unstructured data, TransformoDocs brings
          clarity, accessibility, and intelligence to your documents.
        </p>
      </div>

      {/* Icons Section */}
      <div id="icons" className="py-8 sm:py-12 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 px-4 sm:px-6">
          {[
            { title: "AI", icon: "🤖" },
            { title: "Forms", icon: "📝" },
            { title: "Edit Doc", icon: "✍" },
            { title: "Docs", icon: "📄" },
            { title: "Extraction", icon: "📤" },
            { title: "Chat Bot", icon: "💬" },
            { title: "Projects", icon: "📊" },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-1 sm:space-y-2 text-center"
            >
              <span className="text-3xl sm:text-5xl">{feature.icon}</span>
              <h4 className="font-bold text-gray-700 text-sm sm:text-base">
                {feature.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div className="border-t border-gray-400 my-0"></div>
      <footer className="bg-white text-black py-8">
  <div className="container mx-auto px-4 sm:px-6">
    {/* Top Section */}
    <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
      {/* Logo Section */}
      <div className="text-center sm:text-left mb-6 sm:mb-0">
        <a href="#" className="text-2xl font-bold text-black">
          TransformoDocs
        </a>
        <p className="text-sm text-black mt-2">
          Automate workflows and simplify document management with AI.
        </p>
      </div>

      {/* Links Section */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
        <div className="flex flex-col space-y-2">
          <a href="#privacy" className="text-sm text-black hover:text-white">
            Privacy Policy
          </a>
          <a href="#terms" className="text-sm text-black hover:text-white">
            Terms of Service
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <a href="#contact" className="text-sm text-black hover:text-white">
            Contact Us
          </a>
          <a href="#faq" className="text-sm text-black hover:text-white">
            FAQ
          </a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-700 my-6"></div>

    {/* Bottom Section */}
    <div className="flex flex-col sm:flex-row justify-between items-center">
      {/* Social Media Links */}
      <div className="flex space-x-4 mb-4 sm:mb-0">
        <a
          href="#"
          className="text-black hover:text-white"
          aria-label="Facebook"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35c-.729 0-1.325.596-1.325 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.497v-9.284h-3.125v-3.622h3.125v-2.671c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.794.143v3.239h-1.917c-1.504 0-1.796.715-1.796 1.763v2.314h3.589l-.467 3.622h-3.122v9.284h6.127c.729 0 1.324-.596 1.324-1.324v-21.35c0-.729-.595-1.325-1.324-1.325z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-black hover:text-white"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.72 0-4.928 2.208-4.928 4.928 0 .386.043.762.128 1.124-4.094-.205-7.725-2.165-10.157-5.144-.424.725-.666 1.562-.666 2.457 0 1.694.863 3.188 2.175 4.065-.801-.025-1.555-.245-2.212-.612v.061c0 2.366 1.684 4.341 3.918 4.788-.41.111-.843.171-1.29.171-.316 0-.624-.031-.927-.087.625 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.105-6.115 2.105-.397 0-.788-.023-1.175-.069 2.179 1.396 4.768 2.211 7.557 2.211 9.053 0 14.002-7.5 14.002-14.002 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a
          href="#"
          className="text-black hover:text-white"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.23 0h-20.46c-.972 0-1.77.798-1.77 1.77v20.459c0 .972.798 1.771 1.77 1.771h20.459c.973 0 1.771-.799 1.771-1.771v-20.459c0-.972-.798-1.77-1.771-1.77zm-15.539 20.452h-3.377v-10.897h3.377v10.897zm-1.689-12.38c-1.084 0-1.964-.88-1.964-1.963 0-1.083.88-1.963 1.964-1.963s1.963.88 1.963 1.963c0 1.084-.88 1.963-1.963 1.963zm13.865 12.38h-3.377v-5.444c0-1.296-.024-2.964-1.805-2.964-1.805 0-2.082 1.41-2.082 2.865v5.543h-3.377v-10.897h3.242v1.487h.045c.451-.855 1.55-1.754 3.188-1.754 3.41 0 4.041 2.244 4.041 5.163v6.001z" />
          </svg>
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-black text-center sm:text-left">
        © {new Date().getFullYear()} TransformoDocs. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}