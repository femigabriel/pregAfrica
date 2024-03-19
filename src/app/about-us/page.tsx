"use client";

import React from "react";
import { Layout } from "@/components/layout/Layout";
import { AboutPage } from "@/components/about/AboutPage";

export default function AboutUs() {
  return (
    <div className="home">
      <Layout>
        <div>
          <AboutPage />
        </div>
      </Layout>
    </div>
  );
}
