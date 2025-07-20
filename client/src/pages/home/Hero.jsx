import React from "react";
import heroVid from "../../assets/heroVid.mp4";

export const Hero = () => {
  return (
    <div className="mb-10" id="#">
      <video
        width="100%"
        autoPlay
        muted
        loop
        playsInline
        className=" relative w-full object-cover h-[calc(100vh-20px)] object-bottom"
        style={{ pointerEvents: "none" }}>
        <source src={heroVid} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      {/* vid content text */}
      <div className="absolute text-white translate-y-1/2 md:top-1/3 top-1/4 md:translate-x-1.5 md:right-1/2 md:pr-24  md:pl-10 pl-0  sm:right-1/2 sm:translate-x-1/4   translate-x-1/4 right-1/3">
        <h2 className="sm:text-6xl text-5xl font-semibold mb-10">
          Unzip the Madness <br />
          Made by-Gaurav
        </h2>
        <a
          href="#top-sellers"
          className="bg-accentYellow text-gray-800 font-semibold  py-2 px-4 rounded-md hover:bg-primary">
          Shop now
        </a>
      </div>
    </div>
  );
};
