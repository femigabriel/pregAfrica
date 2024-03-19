import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Gallery = () => {
  return (
    <div className="w-full px-32 py-10 ">
      <h3 className="uppercase text-sm ">our gallery</h3>
      <div className="w-full flex gap-5 ">
        <div className="w-[615px]">
          <Image
            src="/images/Rectangle 52.svg"
            alt="logo"
            width={50}
            height={50}
            className="w-full h-full cursor-pointer"
            draggable="false"
          />
        </div>
        <div className="flex flex-col w-[309px]">
          <Image
            src="/images/Rectangle 53.svg"
            alt="logo"
            width={50}
            height={50}
            className="w-full h-full cursor-pointer"
            draggable="false"
          />
          <Image
            src="/images/Rectangle 54.svg"
            alt="logo"
            width={50}
            height={50}
            className="w-full h-full cursor-pointer"
            draggable="false"
          />
        </div>
        <div className="w-[315px]">
          <Image
            src="/images/Rectangle 55.svg"
            alt="logo"
            width={50}
            height={50}
            className="w-full h-full cursor-pointer"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};
