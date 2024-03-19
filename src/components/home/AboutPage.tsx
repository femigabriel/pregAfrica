import React from "react";
import { motion } from "framer-motion";

export const AboutPage = () => {
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
      <div className="flex item-center mt-20">
        <div className="flex flex-col w-[500px]">
          <motion.h1
            variants={textVariantsHeader}
            initial="hidden"
            animate="visible"
            className="text-base font-medium"
          >
            ABOUT PREGAFRICA
          </motion.h1>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-xl font-bold mb-5"
          >
            PregAfrica is a social enterprise which works in rural and urban
            poor settlements in Africa.
          </motion.h2>

          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-sm font-[300]"
          >
            We are committed to eradicating preventable maternal and child
            mortality and improving the health of mothers and their babies.
          </motion.p>

          <div className="flex gap-10 mt-7">
            <button className="btn uppercase shadow-sm shadow-[#FD00FE36] rounded-[50px] px-5 py-3 text-white text-sm font-semibold">
              read more
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          src="/images/Group 9.svg"
          alt="Hero"
          className="hero-image w-full"
        />
      </div>
    </div>
  );
};
