import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Divider } from "antd";

export const ProductsHeroPage = () => {
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
    <div className="product-page  w-full">
      <div className="w-full flex justify-between ">
        <div className="flex item-center mt-5">
          <div className="div w-[500px]">
            <div className="flex ">
              <motion.h1
                variants={textVariantsHeader}
                initial="hidden"
                animate="visible"
                className="text-[#fff] text-base"
              >
                Our Products
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
                src="/images/Group 38.svg"
                alt="logo"
                width={50}
                height={50}
                className=" w-auto h-auto relative bottom-4"
                draggable="false"
              />
            </motion.h1>
            <motion.p
              variants={textVariantsp}
              initial="hidden"
              animate="visible"
              className="text-sm font-[300] text-white"
            >
              Explore high quality Irresistible Delights for Your Little Ones
            </motion.p>
            <div className="flex gap-10 mt-7">
              <button className="bg-[white] shadow-sm shadow-[#00000030] rounded-[50px] px-5 py-3 text-[#9701B2] text-sm font-semibold">
                Explore Now
              </button>
            </div>
            <div className="relative left-[234.12px] bottom-[110px]">
              <Image
                src="/images/arrow 2 1.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[206px] h-[202px] mb-5"
              />
            </div>
          </div>
        </div>

        <motion.img
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          src="/images/Group 37.svg"
          alt="Hero"
          className="hero-image w-[421px] h-[385px]"
        />
      </div>

      <div className="flex justify-between pb-7">
        <ProductsHeroPageFeaturesexport
          title="5+ STORES"
          description="Explore a variety of premium products across our diverse multi
        stores"
          img={
            <Image
              src="/icons/store.svg"
              alt="logo"
              width={50}
              height={50}
              className="mt- w-[44px] h-[44px] mb-5"
            />
          }
        />

        <ProductsHeroPageFeaturesexport
          title="ONLINE STORE"
          description="Your one-stop online destination for premium baby products"
          img={
            <Image
              src="/icons/store.svg"
              alt="logo"
              width={50}
              height={50}
              className="mt- w-[44px] h-[44px] mb-5"
            />
          }
        />

        <ProductsHeroPageFeaturesexport
          title="FAST DELIVERY"
          description="Elevate your experience with lightning fast baby product
          delivery"
          img={
            <Image
              src="/icons/store.svg"
              alt="logo"
              width={50}
              height={50}
              className="mt- w-[44px] h-[44px] mb-5"
            />
          }
        />

        <ProductsHeroPageFeaturesexport
          title="SUPPORT"
          description="Your satisfaction is our priority. Contact us anytime."
          img={
            <Image
              src="/icons/store.svg"
              alt="logo"
              width={50}
              height={50}
              className="mt- w-[44px] h-[44px] mb-5"
            />
          }
        />
      </div>
    </div>
  );
};

interface Props {
  img: React.ReactNode;
  title: string;
  description: string;
}

export const ProductsHeroPageFeaturesexport = ({
  img,
  title,
  description,
}: Props) => {
  return (
    <div className="flex flex-col justify-center cursor-pointer">
      <div className="flex justify-center">{img}</div>
      <div className="text-white w-[16em]">
        <div className="text-sm">
          <h3 className="font-bold text-center">{title}</h3>
          <p className="font-medium text-center">{description}</p>
        </div>
      </div>
    </div>
  );
};
