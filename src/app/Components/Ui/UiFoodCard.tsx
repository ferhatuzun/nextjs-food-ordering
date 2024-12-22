import Image from "next/image";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
const UiFoodCard = () => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-4  font-inter">
      <div>
        <Image
          src="/images/ui-food-card.png"
          alt=""
          width={275}
          height={275}
          className="mx-auto"
        />
      </div>
      <div className="mt-4">
        <p className="font-bold text-2xl mb-2">Fattoush salad</p>
        <p>Description of the item</p>
        <div className="flex items-center mt-4 font-bold gap-x-1 text-xl">
          <p className="text-red">$</p>
          <p>24.00</p>
        </div>
      </div>
      <div className="absolute right-0 top-0 bg-green w-12 h-12 flex flex-col items-center justify-center rounded-bl-3xl rounded-tr-3xl text-white">
        <button>
          <IoAddCircleOutline size={35} />
        </button>
      </div>
    </div>
  );
};

export default UiFoodCard;
