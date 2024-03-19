import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Divider } from "antd";

export const HeroPage = () => {
  // Animation variants for text
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
    <div className="hero-page pt-10 w-full">
      <div className="w-full flex justify-between  px-32">
        <div className="flex item-center mt-20">
          <div className="div w-[500px]">
            <div className="flex ">
              <motion.h1
                variants={textVariantsHeader}
                initial="hidden"
                animate="visible"
                className="text-[#6F0195] text-base"
              >
                Welcome to PregAfrica
              </motion.h1>
              <div className="ml-20">
                <Image
                  src="/images/Ellipse 6.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-[23px] h-[16px]"
                  draggable="false"
                />
              </div>
            </div>
            <motion.h1
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="hero-title"
            >
              <Image
                src="/images/Group6.svg"
                alt="logo"
                width={50}
                height={50}
                className=" w-auto h-auto mb-5"
                draggable="false"
              />
            </motion.h1>
            <motion.p
              variants={textVariantsp}
              initial="hidden"
              animate="visible"
              className="text-sm font-[300]"
            >
              We are committed to eradicating preventable maternal and <br />
              child mortality and improving the health of mothers and their
              babies.
            </motion.p>

            <div className="flex gap-10 mt-7">
              <button className="btn shadow-sm shadow-[#FD00FE36] rounded-[50px] px-5 py-3 text-white text-sm font-semibold">
                Book Appointment
              </button>
              <button className="shadow-sm shadow-[#FD00FE36] px-5 py-3  rounded-[50px] border border-[#6F0195] text-sm font-semibold ">
                Request to Volunteer
              </button>
            </div>
          </div>
        </div>
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          src="/images/Group 5.svg"
          alt="Hero"
          className="hero-image"
        />
      </div>
      <Divider className="bg-[#6f0195]" />
    </div>
  );
};
