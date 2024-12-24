import React from "react";

function HeroSection() {
  return (
    <div>
      <main className="items-center md:h-[70vh] bg-white mt-28 md:mt-28">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-full md:px-52 px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-green-700 mb-4">
              Welcome to The Pentecostal Fellowship of Nigeria Bi-Annual
              Conference 2025
            </h1>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Join us for a transformative experience of faith, fellowship, and
              inspiration. Together, let's make 2025 a year of divine
              breakthroughs!
            </p>

            <div className="flex justify-center">
              <button className="bg-green-600 text-white px-6 md:px-8 py-2 rounded-full shadow-xl font-bold hover:bg-green-700 transition-all duration-300 md:mb-0 mb-8">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
