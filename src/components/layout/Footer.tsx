import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full px-32">
      <FooterCard />
      <FooterDetaials />
      <div className="flex justify-center items-center py-7 pt-14">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={150}
              height={150}
              className=""
              draggable="false"
            />
          </div>
          <p className="flex justify-center gap-2">
            <div className="mt-1">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346628 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9978 5.87895 15.1542 3.84542 13.6544 2.34562C12.1546 0.845814 10.121 0.00223986 8 0ZM8 14.7692C6.66117 14.7692 5.35241 14.3722 4.23922 13.6284C3.12603 12.8846 2.2584 11.8274 1.74605 10.5905C1.2337 9.35356 1.09965 7.99249 1.36084 6.67939C1.62203 5.36629 2.26674 4.16012 3.21343 3.21343C4.16013 2.26674 5.36629 1.62203 6.67939 1.36084C7.99249 1.09965 9.35356 1.2337 10.5905 1.74605C11.8274 2.25839 12.8846 3.12602 13.6284 4.23922C14.3722 5.35241 14.7692 6.66117 14.7692 8C14.7672 9.79468 14.0534 11.5153 12.7843 12.7843C11.5153 14.0534 9.79469 14.7672 8 14.7692ZM5.53846 8C5.53846 8.51663 5.70102 9.02017 6.0031 9.43928C6.30518 9.8584 6.73147 10.1718 7.2216 10.3352C7.71172 10.4986 8.24082 10.5036 8.73395 10.3496C9.22709 10.1955 9.65925 9.89023 9.96923 9.47692C10.0673 9.34635 10.2131 9.26007 10.3748 9.23706C10.5364 9.21406 10.7006 9.2562 10.8312 9.35423C10.9617 9.45226 11.048 9.59814 11.071 9.75978C11.094 9.92142 11.0519 10.0856 10.9538 10.2162C10.4888 10.8359 9.84048 11.2937 9.10082 11.5246C8.36115 11.7555 7.56759 11.7478 6.83251 11.5027C6.09744 11.2575 5.45812 10.7874 5.00508 10.1587C4.55205 9.5301 4.30827 8.77487 4.30827 8C4.30827 7.22513 4.55205 6.4699 5.00508 5.84126C5.45812 5.21263 6.09744 4.74245 6.83251 4.49732C7.56759 4.25219 8.36115 4.24453 9.10082 4.47543C9.84048 4.70632 10.4888 5.16407 10.9538 5.78384C11.0024 5.8485 11.0377 5.92207 11.0578 6.00038C11.0779 6.07868 11.0824 6.16018 11.071 6.24022C11.0596 6.32025 11.0326 6.39726 10.9914 6.46685C10.9503 6.53643 10.8958 6.59723 10.8312 6.64577C10.7665 6.69431 10.6929 6.72964 10.6146 6.74974C10.5363 6.76984 10.4548 6.77432 10.3748 6.76293C10.2947 6.75154 10.2177 6.72449 10.1482 6.68334C10.0786 6.64218 10.0178 6.58773 9.96923 6.52308C9.65925 6.10977 9.22709 5.80447 8.73395 5.65043C8.24082 5.49638 7.71172 5.5014 7.2216 5.66478C6.73147 5.82815 6.30518 6.1416 6.0031 6.56071C5.70102 6.97983 5.53846 7.48336 5.53846 8Z"
                  fill="black"
                />
              </svg>
            </div>
            <span>2023 | All Rights Reserved</span>
          </p>
          <div className="flex justify-center items-center gap-4 mt-2">
            <Image
              src="/icons/Group 16 (4).svg"
              alt="logo"
              width={150}
              height={150}
              className="w-[16px] h-[16px]"
            />
            <Image
              src="/icons/twitter (1).svg"
              alt="logo"
              width={150}
              height={150}
              className="w-[16px] h-[16px]"
            />
            <Image
              src="/icons/facebok.svg"
              alt="logo"
              width={150}
              height={150}
              className="w-[16px] h-[16px]"
            />
            <Image
              src="/icons/linked in.svg"
              alt="logo"
              width={150}
              height={150}
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const FooterDetaials = () => {
  return (
    <div className="flex justify-between footer">
      <div className="flex gap-2 flex-col ml-5">
        <h3 className="text-[#6F0195] font-bold text-lg my-2">Preg Africa</h3>
        <p className="flex gap-2 font-bold text-sm">
          <span className="text-[#6F0195]">Tel:</span>
          <span>+234 (0) 808 962 3242, +234 (0) 73 392 3192</span>
        </p>
        <p className="flex gap-2 font-bold text-sm">
          <span className="text-[#6F0195]">Email:</span>
          <span>pregafrica@gmail.com</span>
        </p>
        <p className="flex gap-2 font-bold text-sm">
          <span className="text-[#6F0195]">Address:</span>
          <span> 70D Allen Avenue, Ikeja, Lagos, Nigeria.</span>
        </p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-[#6F0195] font-bold text-sm my-2">Our Company</h3>
        <nav className="flex flex-col text-sm font-normal ">
          <li className="py-1">About Us </li>
          <li className="py-1">Our Products</li>
          <li className="py-1">Blog</li>
          <li className="py-1">Contact Us</li>
        </nav>
      </div>

      <div className="flex flex-col">
        <h3 className="text-[#6F0195] font-bold text-sm my-2">Subscribe</h3>
        <p className="w-[14em] font-normal text-xs">
          Subscribe to get the latest news from us
        </p>
        <div className="flex py-2 mt-3 px-3 border border-[#6F0195] rounded-lg">
          <input
            type="email"
            placeholder="Email address"
            className="border-0 text-xs bg-inherit focus:outline-none hover:outline-none"
          />
          <button type="button">
            <Image
              src="/icons/Group 15 (2).svg"
              alt="logo"
              width={50}
              height={50}
              className="w-[19px] h-[19px]"
              draggable="false"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export const FooterCard = () => {
  return (
    <div className="pb-20">
      <div className=" w-full h-[108px] px-28 py-[20px] rounded-[5px] footer-card">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">
            Caring For Mother And Child
          </h3>
          <div className="flex">
            <Image
              src="/images/health 1.svg"
              alt="logo"
              width={50}
              height={50}
              className="w-[66px] h-[66px] relative bottom-5 right-[585px]"
              draggable="false"
            />
            <Image
              src="/images/health 1.svg"
              alt="logo"
              width={50}
              height={50}
              className="w-[66px] h-[66px] relative top-6 left-[395px]"
              draggable="false"
            />
          </div>
          <button className="rounded-[50px] px-5 py-3 text-[#6F0195] font-bold text-sm bg-white">
            Join Our Team
          </button>
        </div>
      </div>
    </div>
  );
};
