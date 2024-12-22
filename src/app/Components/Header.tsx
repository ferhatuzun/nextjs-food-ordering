"use client";
import Image from "next/image";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Header = () => {
  const [control, setControl] = useState<boolean>(false)
  return (
    <div className="container mx-auto font-poppins">
      <div className="hidden md:flex items-center justify-between mt-5">
        <div>
          <Image src="/images/logo.png" alt="" width={150} height={60} />
        </div>
        <div>
          <ul className="flex gap-10 items-center">
            <li>
              <a href="#" className="hover:text-green transition">
                Anasayfa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green transition">
                Ürünler
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green transition">
                Kategoriler
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <a href="">
              <MdOutlineShoppingBag size={35} />
              <span className="absolute top-0 -right-1 bg-green rounded-full w-5 h-5 flex items-center justify-center text-white">
                0
              </span>
            </a>
          </div>
          <div className="w-36 bg-green py-3 px-3 rounded-3xl  text-white">
            <a href="" className="flex items-center gap-3">
              <FaPhoneVolume size={25} />
              Şimdi Ara
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden block">
        <button className="pt-5" onClick={() => setControl(!control)}>
          <GiHamburgerMenu size={30} />
        </button>
        <div className={`${control ? "block":"hidden"} flex flex-col fixed top-0 right-0 bg-green h-screen w-1/2 z-50`} >
          <div className="self-end">
            <button className="text-2xl p-2 text-white font-bold" onClick={()=>setControl(!control)}>X</button>
          </div>
          <div className="flex gap-3 items-center self-end mt-12 mr-5">
            <div className="relative">
              <a href="">
                <MdOutlineShoppingBag size={35} />
                <span className="absolute top-0 -right-1 bg-green rounded-full w-5 h-5 flex items-center justify-center text-white">
                  0
                </span>
              </a>
            </div>
            
          </div>
          <ul className="flex flex-col gap-1 mt-20 items-center text-center">
            <li>
              <a href="#" className="block hover:text-red transition bg-white py-3 px-5 rounded-lg w-48">
                Anasayfa
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-red transition bg-white py-3 px-5 rounded-lg w-48">
                Ürünler
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-red transition bg-white py-3 px-5 rounded-lg w-48">
                Kategoriler
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
