"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const ProductHeader = () => {
  // export const Header = ({ navList }: { navList?: MenuBarist[] }) => {

  const pathname = usePathname();
  const navList = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },
    {
      id: 2,
      title: "About Us",
      link: "/about-us",
    },
    {
      id: 3,
      title: "Our Products",
      link: "/products",
    },
    {
      id: 4,
      title: "Blog",
      link: "/blog",
    },
  ];
  return (
    // <div className="fixed bg-[#e1d1f6] top-0 w-full mb-5">
    <div className=" top-0 w-full pb-5">
      <header className="flex justify-between w-full h-[84p] header px-32 py-5 ">
        <div className="flex">
          <Image
            src="/images/png logo  2 (1).svg"
            alt="logo"
            width={150}
            height={150}
            className="w-[118px] h-[42px] mt-2"
          />
          <Image
            src="/icons/Ellipse 7.svg"
            alt="logo"
            width={50}
            height={50}
            className="mt- w-[16px] h-[16px] lg:relative left-[200px] top-5"
          />
        </div>

        <div className="flex  gap-10 mt-3">
          <nav className="text-[1em] mt-2">
            <div className="flex ">
              {navList?.map((list, index) => {
                return (
                  <div className="px-5" key={index}>
                    <Link
                      href={list.link}
                      className={`${
                        pathname === list.link ? "active" : ""
                      } font-semibold text-sm text-white`}
                    >
                      <li className="text-white">{list.title}</li>
                    </Link>
                  </div>
                );
              })}
            </div>
          </nav>
          <div>
            <button className="bg-[white] px-5 flex gap-3 py-2 text-[#E400EB] rounded-[50px] font-semibold">
              Contact us
              <Image
                src="/icons/arrow (1).svg"
                alt="logo"
                width={9}
                height={9}
                className="mt-1"
              />
            </button>
          </div>
          <Image
            src="/icons/buy now (1).svg"
            alt="logo"
            width={50}
            height={50}
            className="mt- w-[37px] h-[34px]"
          />
          <Image
            src="/icons/Ellipse 7.svg"
            alt="logo"
            width={50}
            height={50}
            className="mt- w-[16px] h-[16px] lg:relative left-20 top-16"
          />
        </div>
      </header>
    </div>
  );
};
