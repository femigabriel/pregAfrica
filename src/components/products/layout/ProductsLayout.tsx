"use client";

import React from "react";
import { ProductHeader } from "./ProductHeader";
import { Footer } from "@/components/layout/Footer";

interface Props {
  children: React.ReactNode;
}

export const ProductsLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-full">
      <div className="product">
        <ProductHeader />
      </div>
      <div className="">
        <div className="">{children}</div>
        <Footer />
      </div>
    </div>
  );
};
