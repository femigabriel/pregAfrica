import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutPageHeroService = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[887px] h-[563p] bg-[#6F0195] shadow-md ">
        <Image
          src="/images/health 1.svg"
          alt="logo"
          width={50}
          height={50}
          className="w-[60px] h-[54px]"
          draggable="false"
        />
        <div className="flex justify-center items-center ">
          <div className="text-center w-[516px] mt-10">
            <h3 className="text-sm uppercase font-medium text-slate-200">
              our services
            </h3>
            <p className="text text-xl font-bold text-white">
              We provide vital health information to help improve the wellbeing
              of pregnant women, new mothers, infants and children
            </p>
          </div>
        </div>

        <div className="flex px-20 w-full mb-5">
          <div className="flex w-full  justify-between mt-10">
            <AboutPageHeroServiceCard
              img={
                <Image
                  src="/images/Group 31.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-[47px] h-[47px] "
                  draggable="false"
                />
              }
              title="Health Information"
              description=" We provide vital health information to help improve the wellbeing of
              pregnant women, new mothers, infants and children."
            />
            <AboutPageHeroServiceCard
              img={
                <Image
                  src="/images/Group 31.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-[47px] h-[47px] "
                  draggable="false"
                />
              }
              title="PregAfrica Delivery Kit"
              description="Our delivery kit is a simple sterile kit 
              designed to help create a clean birthing 
              environment."
            />
            <AboutPageHeroServiceCard
              img={
                <Image
                  src="/images/Group 31.svg"
                  alt="logo"
                  width={50}
                  height={50}
                  className="w-[47px] h-[47px] "
                  draggable="false"
                />
              }
              title="Training"
              description="We train birth attendants on how to care for 
              women during pregnancy and guide them 
              through childbirth using present day 
              standards and guidelines. We also provide 
              communities with adequate information on 
              pregnancy, childbirth and neonatal 
              healthcare which enables them to identify a 
              problem and seek help medically."
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/health 1.svg"
            alt="logo"
            width={50}
            height={50}
            className="w-[116px] h-[104px] relative left-2"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

interface Props {
  img: React.ReactNode;
  title: string;
  description: string;
}

export const AboutPageHeroServiceCard = ({
  img,
  title,
  description,
}: Props) => {
  return (
    <div className="p-5 bg-purple-400 w-[215px] cursor-pointer shadow-md pb-7">
      <div>{img}</div>
      <h3 className="font-semibold text-xl w-[121px] text-white">{title}</h3>
      <p className="font-medium text-[10px] text-white mt-3">{description}</p>
    </div>
  );
};
