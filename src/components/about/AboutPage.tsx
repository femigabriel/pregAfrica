import React from "react";
import { AboutPageHero } from "./AboutPageHero";
import { AboutValues } from "./AboutValues";
import { AboutPageHeroService } from "./AboutPageHeroService";

export const AboutPage = () => {
  return (
    <div className="w-full  py-10 ">
      <AboutPageHero />
      <AboutValues />
      <AboutPageHeroService />
    </div>
  );
};
