import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutPageHero = () => {
  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } },
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
    <div className="w-full">
      <div className="flex justify-center">
        <div className="flex flex-col">
          <h3 className="text-[#6F0195] text-sm font-semibold text-center">
            About PregAfrica
          </h3>
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="hero-title"
          >
            <Image
              src="/images/Group 16 (5).svg"
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
            className="text-sm font-[300] text-center"
          >
            We are committed to eradicating preventable maternal and child
            mortality and
            <br /> improving the health of mothers and their babies.
          </motion.p>
          <div className="flex justify-center mt-5">
            <button className="btn shadow-sm shadow-[#FD00FE36] rounded-[50px] px-5 py-3 text-white text-sm font-semibold">
              Join Our Team
            </button>
          </div>
          <div className="relative bottom-10 left-5">
            <Image
              src="/images/Group 23 (1).svg"
              alt="logo"
              width={50}
              height={50}
              className=" w-auto h-auto"
              draggable="false"
            />
          </div>
        </div>
      </div>
      <AboutPageHeroCard />
    </div>
  );
};

export const AboutPageHeroCard = () => {
  return (
    <div className="w-full">
      <div className="footer-card h-[242p] py-7 pb-5 px-32">
        <div className="w-[641px]">
          <div className="flex mb-7">
            <h3 className="font-bold text-xl text-white ">
              PregAfrica is a social enterprise which works in rural and urban
              poor settlements in Africa to help women and girls access the
              high-quality maternal health care they need to give birth safely.
            </h3>
            <Image
              src="/images/health 1.svg"
              alt="logo"
              width={50}
              height={50}
              className="w-[60px] h-[54px] relative top-6 left-[395px]"
              draggable="false"
            />
          </div>
          <div className="flex">
            <p className="text-sm text-gray-300">
              We are committed to eradicating preventable maternal and child
              mortality and improving the health of mothers and their babies. In
              Africa, we create viable interventions which helps reduce maternal
              and child mortality and generally enhance the wellbeing of mother
              and child.
            </p>
            <Image
              src="/images/health 1.svg"
              alt="logo"
              width={50}
              height={50}
              className="w-[116px] h-[104px] relative top-8 left-[375px]"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

