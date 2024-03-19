import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const ServicesPage = () => {
  // Animation variants for image
  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  };
  //   Animation for header
  const textVariantsHeader = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  //   Animation for span
  const textVariantsp = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.8 } },
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2.2 } },
  };

  return (
    <div className="w-full flex justify-between px-32 ">
      <div className="flex item-center w-full mt-20">
        <div className="flex flex-col w-full">
          <motion.h1
            variants={textVariantsHeader}
            initial="hidden"
            animate="visible"
            className="text-base font-medium"
          >
            OUR SERVICES
          </motion.h1>
          <div className="flex justify-between w-full">
            <motion.h2
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl font-bold mb-5 w-[500px]"
            >
              We provide vital health information to help improve the wellbeing
              of pregnant women, new mothers, infants and children
            </motion.h2>
            <div className="flex gap-3 mt-14">
              <Link href="/" className="mt-1">
                <span className="text-[#6F0195] text-sm font-bold">
                  View all Services
                </span>
              </Link>
              <Image
                src="/icons/Group 10.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[35px] h-[35px]"
                draggable="false"
              />
            </div>
          </div>

          <div className="flex justify-center gap-20 mt-12">

            <div className="w-[201px] h-[189px] bg-white px-5 py-5 shadow-md rounded-md cursor-pointer">
              <Image
                src="/icons/Group 11 (6).svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[47px] h-[47px]"
                draggable="false"
              />
              <h3 className="text-xl font-semibold mt-3">Health Information</h3>
              <div className="flex justify-between">
                <span></span>
                <div className="flex gap-2 mt-8">
                  <Link href="" className="uppercase text-[10px]">
                    read more
                  </Link>
                  <Image
                    src="/icons/arrow (2).svg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-[8px] h-[8px] mt-1"
                    draggable="false"
                  />
                </div>
              </div>
            </div>

            <div className="w-[201px] btn h-[189px] px-5 py-5 shadow-md shadow-[#FD00FE36] rounded-md cursor-pointer">
              <Image
                src="/icons/Group 14 (2).svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[47px] h-[47px]"
                draggable="false"
              />
              <h3 className="text-xl font-semibold mt-3 text-white">
                PregAfrica Delivery Kit
              </h3>
              <div className="flex justify-between">
                <span></span>
                <div className="flex gap-2 mt-8">
                  <Link href="" className="uppercase text-[10px] text-white">
                    read more
                  </Link>
                  <Image
                    src="/icons/arrow (3).svg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-[8px] h-[8px] mt-1"
                    draggable="false"
                  />
                </div>
              </div>
            </div>

            <div className="w-[201px] h-[189px] bg-white px-5 py-5 shadow-md rounded-md cursor-pointer">
              <Image
                src="/icons/Group 13.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[47px] h-[47px]"
                draggable="false"
              />
              <h3 className="text-xl font-semibold mt-3">Training</h3>
              <div className="flex justify-between">
                <span></span>
                <div className="flex gap-2 mt-14">
                  <Link href="" className="uppercase text-[10px]">
                    read more
                  </Link>
                  <Image
                    src="/icons/arrow (2).svg"
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-[8px] h-[8px] mt-1"
                    draggable="false"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
