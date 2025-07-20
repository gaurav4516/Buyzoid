import React from "react";
import { Hero } from "./Hero";
import { TopSellers } from "./TopSellers";
import { Recommended } from "./Recommended";
import { Blog } from "./Blog";

export const Home = () => {
  return (
    <div>
      <Hero />
      <TopSellers />
      <Recommended />
      <Blog />
    </div>
  );
};
