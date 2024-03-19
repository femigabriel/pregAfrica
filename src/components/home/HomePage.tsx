import React from "react";
import { HeroPage } from "./HeroPage";
import { AboutPage } from "./AboutPage";
import { ServicesPage } from "./ServicesPage";
import { Gallery } from "./Gallery";
import { Divider } from "antd";

export const HomePage = () => {
  return (
    <div className="w-full">
      <HeroPage />
      <AboutPage />
      <ServicesPage />
      <Gallery />
    </div>
  );
};
