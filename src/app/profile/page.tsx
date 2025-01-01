"use client"
import Image from "next/image";
import { LuUser } from "react-icons/lu";
import { IoIosArrowForward,IoMdExit  } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaMotorcycle } from "react-icons/fa6";
import { useState } from "react";
import AccountSetting from "../Components/profile/AccountSetting";
import Adress from "../Components/profile/Adress";
import Order from "../Components/profile/Order";

const Page = () => {
  const [panel, setPanel] = useState<number>(0)
  return (
    <div className="container mx-auto mt-20 font-poppins flex flex-col lg:flex-row px-5 xs:px-0 items-start ">
      <div className="bg-white shadow-xl p-3 rounded-lg w-full sm:w-1/2 lg:max-w-[30%]">
        <div className="flex gap-x-3 items-center border-b pb-5">
          <Image
            src="/images/user.png"
            alt=""
            width={70}
            height={70}
            className="rounded-full"
          />
          <div>
            <p className="font-bold">Your Name</p>
            <p className="text-gray">example@mail.com</p>
          </div>
        </div>

        <div className="pt-5 flex flex-col gap-y-3">
          <button className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-sectionBg rounded-md w-full" onClick={()=>setPanel(0)}>
            <LuUser size={25}/>
            <p>Hesabım</p>
            <IoIosArrowForward size={25}/>
          </button>
          <button className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-sectionBg rounded-md w-full" onClick={()=>setPanel(1)}>
            <IoLocationSharp size={25}/>
            <p>Adreslerim</p>
            <IoIosArrowForward size={25}/>
          </button>
          <button className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-sectionBg rounded-md w-full" onClick={()=>setPanel(2)}>
            <FaMotorcycle size={25}/>
            <p>Siparişlerim</p>
            <IoIosArrowForward size={25}/>
          </button>
          <button className="flex items-center justify-between px-2 py-1 cursor-pointer hover:bg-sectionBg rounded-md w-full">
            <IoMdExit size={25}/>
            <p>Çıkış</p>
            <IoIosArrowForward size={25}/>
          </button>
        </div>
      </div>
      <div className="lg:max-w-[70%] w-full">
        {panel==0 && <AccountSetting/>}
        {panel==1 && <Adress/>}
        {panel==2 && <Order/>}
      </div>
    </div>
  );
};

export default Page;
