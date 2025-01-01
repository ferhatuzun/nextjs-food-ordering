"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  removeItem,
  addQuantity,
  removeQuantity,
} from "@/store/slice/cardSlice";
type propsType = {
  image: string;
  title: string;
  desc: string;
  price: number;
  quantity: number;
  id: string;
  removedIngredients:string[]
};

const UiBasketFoodCard = ({
  image,
  title,
  desc,
  price,
  quantity,
  id,
  removedIngredients
}: propsType) => {
  const [quantityValue, setQuantityValue] = useState<number>(quantity);
  const dispatch = useDispatch();
  const handleAddQuantity = () => {
    setQuantityValue((prev) => prev + 1);
    dispatch(addQuantity(id))
  };
  const handleRemoveQuantity = () => {
    setQuantityValue((prev) => (prev > 1 ? prev - 1 : 1));
    dispatch(removeQuantity(id))
  };
  return (
    <div className="flex flex-col lg:flex-row gap-x-3 bg-white rounded-xl p-3 relative my-3">
      <div className="self-center lg:self-start mb-5 lg:mb-0">
        <Image src={image} alt="" objectFit="cover" width={210} height={80} />
      </div>
      <div>
        <div>
          <p className="font-semibold text-xl">{title}</p>
          <p className="text-gray my-3">{desc}</p>
          <p className="mt-4">İstenmeyen Malzemeler</p>
          <div className="flex items-center gap-x-1 mt-1 mb-4">

          {removedIngredients.map((item,index)=>{
            return (
              <p key={index} className="text-sm font-light">{item}</p>
            )
          })}
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-3xl">{price}₺</p>
          <div className="absolute bottom-5 right-0 flex items-center gap-x-4 pr-8">
            <button
              className="bg-green rounded-full text-white  w-6 h-6 text-2xl flex items-center justify-center"
              onClick={ handleRemoveQuantity}
            >
              <CiCircleMinus size={25} />
            </button>
            <p className="w-4">{quantityValue}</p>
            <button
              className="bg-green rounded-full text-white  w-6 h-6 text-2xl flex items-center justify-center"
              onClick={handleAddQuantity}
            >
              <CiCirclePlus />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2">
        <button onClick={() => dispatch(removeItem(id))}>
          <FaRegTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default UiBasketFoodCard;
