import Image from "next/image";
import React from "react";
import { FiYoutube } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="container mx-auto mt-40 mb-10 font-inter">
      <div className="flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 justify-between px-16">
        <div>
          <div>
            <Image src="/images/logo.png" alt="" width={100} height={100} />
          </div>
          <p className="text-gray mt-5">
            Her yemeğin bir mutfak şaheseri <br /> olduğu sanatın tadını çıkarın
          </p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-3">Menu</h4>
          <ul className="flex flex-col gap-y-2">
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
        <div>
          <h4 className="font-bold text-xl mb-3">İletişim</h4>
          <p>example@email.com</p>
          <p>+64 958 248 966</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-x-20 mt-24">
        <div className="flex items-center gap-x-4 mb-5 sm:mb-0">
          <a
            href="#"
            className="bg-lightGreen w-12 h-12 rounded-full flex items-center justify-center hover:bg-green hover:text-white transition"
          >
            <SlSocialFacebook size={30} />
          </a>
          <a
            href="#"
            className="bg-lightGreen w-12 h-12 rounded-full flex items-center justify-center hover:bg-green hover:text-white transition"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="#"
            className="bg-lightGreen w-12 h-12 rounded-full flex items-center justify-center hover:bg-green hover:text-white transition"
          >
            <CiTwitter size={30} />
          </a>
          <a
            href="#"
            className="bg-lightGreen w-12 h-12 rounded-full flex items-center justify-center hover:bg-green hover:text-white transition "
          >
            <FiYoutube size={30} />
          </a>
        </div>
        <p>
        Copyright © 2023 | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
