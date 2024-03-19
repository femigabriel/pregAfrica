"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="w-full h-full">
      <div className="mb-7">
        <Header />
      </div>
      <div className="py-10">
        <div className="">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
