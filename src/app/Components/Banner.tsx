import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-20 font-inter">
      <div>
        <h1 className="text-6xl font-extrabold">
          Nefis Yemeklerin Lezzetlerine Dalın
        </h1>
        <p className="text-xl text-gray py-10">
          Her Tabağın Bir Mutfak Ustalığı ve Tutkulu İşçilik Hikayesi Ördüğü Yer
        </p>
        <a
          href=""
          className="block w-36 bg-green py-3 px-5 rounded-3xl text-center text-white shadow-2xl shadow-green"
        >
          Sipariş Ver
        </a>
      </div>
      <div>
        <div className="relative">
          <Image
            src="/images/banner-image.png"
            alt=""
            width={870}
            height={150}
          />
          <p className="absolute top-44 left-0 bg-red text-white py-2 px-3 rounded-lg shadow-2xl shadow-black">
            Enfes Lezzetler
          </p>
        </div>
        <div className=" relative grid grid-cols-1 md:grid-cols-2 gap-5 -mt-10">
          <div className="flex items-center gap-x-5 bg-white shadow-2xl p-3 rounded-lg" >
            <div>
              <Image
                src="/images/banner-food-1.png"
                alt=""
                width={75}
                height={50}
                className="rounded-md"
              />
            </div>
            <div>
              <h4>Spicy noodles</h4>
              <div className="flex items-center">
                <p className="text-red">$</p>
                <p>18.00</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-5 bg-white shadow-2xl p-3 rounded-lg">
            <div>
              <Image
                src="/images/banner-food-1.png"
                alt=""
                width={75}
                height={50}
                className="rounded-md"
              />
            </div>
            <div>
              <h4>Spicy noodles</h4>
              <div className="flex items-center">
                <p className="text-red">$</p>
                <p>18.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
