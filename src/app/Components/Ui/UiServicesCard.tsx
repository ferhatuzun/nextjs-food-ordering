import Image from "next/image";
import React from "react";

type propsType = {
  images: string;
  title: string;
  desc: string;
};

const UiServicesCard = ({ images, title, desc }: propsType) => {
  return (
    <div className="bg-white shadow-2xl rounded-xl flex flex-col items-center px-5 py-12">
      <div className="mb-5">
        <Image src={images} alt="" width={64} height={64} />
      </div>
      <p className="text-green font-bold text-xl mb-5">{title}</p>
      <p className="text-darkGreen text-center">{desc}</p>
    </div>
  );
};

export default UiServicesCard;
