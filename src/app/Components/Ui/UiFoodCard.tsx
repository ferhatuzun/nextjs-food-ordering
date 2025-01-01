import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";

type propsType = {
  id:string,
  foodName:string,
  desc:string,
  price:number,
  images:string
}

const UiFoodCard = ({id,foodName,desc,price,images}:propsType) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-4  font-inter">
      <div>
        <Image
          src={`/images/${images}`}
          alt=""
          width={275}
          height={275}
          className="mx-auto"
        />
      </div>
      <div className="mt-4">
        <Link href={`/products/${id}`} className="block font-bold text-2xl mb-2">{foodName}</Link>
        <p>{desc}</p>
        <div className="flex items-center mt-4 font-bold gap-x-1 text-xl">
          <p className="text-red">$</p>
          <p>{price}</p>
        </div>
      </div>
      <div className="absolute right-0 top-0 bg-green w-12 h-12 flex flex-col items-center justify-center rounded-bl-3xl rounded-tr-3xl text-white">
        <Link href={`/products/${id}`}>
          <IoAddCircleOutline size={35} />
        </Link>
      </div>
    </div>
  );
};

export default UiFoodCard;
