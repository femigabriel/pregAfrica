import React from "react";
import Image from "next/image";

export const AboutValues = () => {
  return (
    <div className="px-32 w-full py-10">
      <div className="flex gap-10">
        <div className=" flex flex-col gap-5">
          <h3 className="font-bold text-xl w-[174px]">
            We are driven by our values.
          </h3>
          <button className="btn shadow-sm w-[184px] shadow-[#FD00FE36] rounded-[50px] px-5 py-3 text-white text-sm font-semibold">
            View Opportunities
          </button>
          <AboutValuesCard
            img={
              <Image
                src="/images/Group 25.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[276px] h-[274px] mt-[50px]"
                draggable="false"
              />
            }
            title="Our Vision"
            description=" PregAfrica envisions an Africa where all mothers and babies have
            access to quality healthcare and preventable maternal mortality is
            eradicated."
          />
        </div>
        <div className="flex flex-col gap-3">
          <AboutValuesCard
            img={
              <Image
                src="/images/Group 28.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[276px] h-[274px] mt-[2px]"
                draggable="false"
              />
            }
            title="Our Approach"
            description="Our approach is to recognize shortcomings 
            in health and delivery services in a community 
            and address it by providing viable solutions. 
            The key programmes of PregAfrica make use of
            modern technology to develop sustainable 
            interventions."
          />
          <AboutValuesCard
            img={
              <Image
                src="/images/Group 30 (3).svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[276px] h-[274px] mt-[66px] top-[66px]"
                draggable="false"
              />
            }
            title="Our Values"
            description=" PregAfrica envisions an Africa where all mothers and babies have
            access to quality healthcare and preventable maternal mortality is
            eradicated."
          />
        </div>

        <div className="div">
          <div>
            <h3 className="font-bold w-[174px] text-sm py-10 ">
              We are driven by our values.
            </h3> 
          </div>
          <AboutValuesCard
            img={
              <Image
                src="/images/Group 29.svg"
                alt="logo"
                width={50}
                height={50}
                className="w-[276px] h-[274px] mt-[66px]"
                draggable="false"
              />
            }
            title="Our Mission"
            description="PregAfrica sets to use technology to create 
            sustainable system of supporting and enabling 
            healthy children."
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

export const AboutValuesCard = ({ img, title, description }: Props) => {
  return (
    <div className="w-[276px] h-[307px] bg-white shadow-md rounded-sm px- py-7 cursor-pointer">
      <div className="px-3">
        <h3 className="font-bold text-sm mb-2">{title}</h3>
        <p className="text-xs font-medium">{description}</p>
      </div>
      <div>{img}</div>
    </div>
  );
};
