"use client";
import Image from "next/image";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";

import { useState } from "react";
import Link from "next/link";
const Header = () => {
  const [control, setControl] = useState<boolean>(false);
  return (
    <div className="container mx-auto font-poppins">
      <div className="hidden md:flex items-center justify-between mt-5">
        <div>
          <Link href="/">
            <Image src="/images/logo.png" alt="" width={150} height={60} />
          </Link>
        </div>
        <div>
          <ul className="flex gap-10 items-center">
            <li>
              <Link href="/" className="hover:text-green transition">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-green transition">
                Ürünler
              </Link>
            </li>
            <li>
              <Link href="categories" className="hover:text-green transition">
                Kategoriler
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          <div className="relative">
            <Link href="/auth/login">
              <FaRegUser size={30} />
            </Link>
          </div>
          <div className="relative">
            <Link href="/card">
              <MdOutlineShoppingBag size={35} />
              <span className="absolute top-0 -right-1 bg-green rounded-full w-5 h-5 flex items-center justify-center text-white">
                0
              </span>
            </Link>
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
        <div
          className={`${
            control ? "block" : "hidden"
          } flex flex-col fixed top-0 right-0 bg-green h-screen w-1/2 z-50`}
        >
          <div className="self-end">
            <button
              className="text-2xl p-2 text-white font-bold"
              onClick={() => setControl(!control)}
            >
              X
            </button>
          </div>
          <div className="flex gap-3 items-center self-end mt-12 mr-5">
            <div className="relative">
              <Link href="/auth/login">
                <FaRegUser size={30} />
              </Link>
            </div>
            <div className="relative">
              <Link href="/card">
                <MdOutlineShoppingBag size={35} />
                <span className="absolute top-0 -right-1 bg-red rounded-full w-5 h-5 flex items-center justify-center text-white">
                  0
                </span>
              </Link>
            </div>
          </div>
          <ul className="flex flex-col gap-1 mt-20 items-center text-center">
            <li>
              <Link
                href="/"
                className="block hover:text-red transition bg-white py-3 px-5 rounded-lg w-48"
              >
                Anasayfa
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block hover:text-red transition bg-white py-3 px-5 rounded-lg w-48"
              >
                Ürünler
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="block hover:text-red transition bg-white py-3 px-5 rounded-lg w-48"
              >
                Kategoriler
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
