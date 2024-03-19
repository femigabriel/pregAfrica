"use client";

import React from "react";
import { ProductsLayout } from "@/components/products/layout/ProductsLayout";
import { ProductsPages } from "@/components/products/templates/ProductsPages";

export default function Produvts() {
  return (
    <div className="">
      <ProductsLayout>
        <div className="product">
          <ProductsPages />
        </div>
      </ProductsLayout>
    </div>
  );
}
