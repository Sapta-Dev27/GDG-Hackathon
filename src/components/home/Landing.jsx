import React from "react";
import Spline from '@splinetool/react-spline';
import "../css/landing.css";

export default function Home() {
  return (
    <main>
     <div className="relative w-full h-screen">
      {/* Wrapper div for aspect ratio and responsive sizing */}
      <div className="absolute inset-0">
        {/* Mobile-first design with responsive height adjustments */}
        <div className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <Spline
            className="w-full h-full object-contain"
            scene="https://prod.spline.design/RnUyvM4a9P5gpJiG/scene.splinecode"
          />
        </div>
      </div>
    </div>
      <div className="hero-text ml-5">
      <h1 className=" text-white text-5xl font-bold">Unleash Your Creativity </h1>
      <p className=" text-[#eeeeee9f]">Where Innovation Meets Execution</p>
      <p1 className=" text-white">April , 2025 📍Techno Main Salt Lake</p1>
    
      </div>
      <button className="btn-3 bg-purple-700 text-white">Apply On Devfolio</button>
      <div className="hider bg-[#00040f] w-[150px] h-[40px]"></div>
    </main>
  );
}
