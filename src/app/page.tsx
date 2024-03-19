"use client";

import React from "react";
import { HomePage } from "@/components/home/HomePage";
import { Layout } from "@/components/layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <Layout>
        <div>
          <HomePage />
        </div>
      </Layout>
    </div>
  );
}
