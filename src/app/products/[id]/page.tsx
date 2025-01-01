"use client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { IoBasket } from "react-icons/io5";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/slice/cardSlice";
import Link from "next/link";

type dataTypes = {
  id: string;
  foodName: string;
  desc: string;
  price: number;
  images: string;
  ingredients: string[];
};

const Page = () => {
  
  const [quantityValue, setQuantityValue] = useState<number>(1);

  const food: dataTypes[] = [
    {
      id: "1",
      foodName: "Pizza",
      desc: "Lorem ipsum dolor sit amet.",
      ingredients: ["Zeytin", "Mantar", "Biber"],
      price: 85.0,
      images: "ui-food-card.png",
    },
    {
      id: "2",
      foodName: "Hamburger",
      desc: "Lorem ipsum dolor sit amet.",
      ingredients: ["Soğan", "Turşu"],
      price: 60.0,
      images: "ui-food-card.png",
    },
    {
      id: "3",
      foodName: "Tavuk Döner",
      desc: "Lorem ipsum dolor sit amet.",
      ingredients: ["Mayonez", "Ketçap"],
      price: 45.0,
      images: "ui-food-card.png",
    },
    {
      id: "4",
      foodName: "Mantı",
      desc: "Lorem ipsum dolor sit amet.",
      ingredients: ["Sarımsaklı Yoğurt"],
      price: 50.0,
      images: "ui-food-card.png",
    },
    {
      id: "5",
      foodName: "Çorba",
      desc: "Lorem ipsum dolor sit amet.",
      ingredients: ["Yağ", "Pul Biber"],
      price: 30.0,
      images: "ui-food-card.png",
    },
    {
      id: "6",
      foodName: "Çorba",
      desc: "Lorem ipsum dolor sit amet.",
      ingredients: ["Yağ", "Pul Biber"],
      price: 30.0,
      images: "ui-food-card.png",
    },
    {
      id: "7",
      foodName: "Çorba",
      desc: "Lorem ipsum dolor sit amet.",
      ingredients: ["Yağ", "Pul Biber"],
      price: 30.0,
      images: "ui-food-card.png",
    },
    {
      id: "8",
      foodName: "Çorba",
      desc: "Lorem ipsum dolor sit amet.",
      ingredients: ["Yağ", "Pul Biber"],
      price: 30.0,
      images: "ui-food-card.png",
    },
  ];
  const params = useParams();
  const { id } = params;
  const filterItem: dataTypes[] = food.filter((item) => item.id == id);
  const filterControl = food.find((item) => item.id == id);

  const { push } = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!filterControl) {
      push("/");
    }
  }, [filterControl, push]);

  const [removedItem, setRemovedItem] = useState<string[]>([]);
  const [customerNote, setCustomerNote] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setRemovedItem([...removedItem, e.target.value]);
    } else {
      setRemovedItem(removedItem.filter((item) => item != e.target.value));
    }
  };
  if (!filterControl) {
    return null;
  }
  return (
    <div className="container mx-auto mt-20 font-inter">
      <div>
        <p className="text-4xl font-bold">Detaylar</p>
      </div>
      <div className="relative bg-sectionBg p-5 rounded-xl mt-10 grid grid-cols-2">
        <div>
          <Image
            src="/images/ui-food-card.png"
            alt=""
            width={400}
            height={450}
          />
        </div>
        <div>
          <div>
            <p className="text-5xl font-bold">{filterItem[0].foodName}</p>
            <p className="text-gray mt-3">{filterItem[0].desc}</p>
          </div>
          <div className="mt-5">
            <p className="font-semibold">Çıkarmak istediğin malzemeler</p>
            <div className="flex gap-x-3 mt-2">
              {filterItem[0].ingredients.map((item, index) => {
                return (
                  <div className="flex gap-x-2 items-center" key={index}>
                    <input
                      type="checkbox"
                      value={item}
                      onChange={handleChange}
                    />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-5">
            <p className="font-semibold mb-2">Sipariş Notu</p>
            <textarea
              name=""
              id=""
              className="rounded-lg w-full px-3 py-1"
              rows={5}
              value={customerNote}
              onChange={(e) => setCustomerNote(e.target.value)}
            ></textarea>
          </div>
          <div className="flex justify-between mt-14">
            <div className="flex items-center gap-x-1">
              <p className="font-semibold text-3xl">{filterItem[0].price}</p>
              <p className="text-red font-semibold text-2xl">₺</p>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-x-4 pr-8">
                <button
                  className="bg-green rounded-full text-white  w-6 h-6 text-2xl flex items-center justify-center"
                  onClick={() => setQuantityValue((prev) => prev>1 ? prev - 1:1)}
                >
                  <CiCircleMinus size={25} />
                </button>
                <p className="w-4">{quantityValue}</p>
                <button
                  className="bg-green rounded-full text-white  w-6 h-6 text-2xl flex items-center justify-center"
                  onClick={() => setQuantityValue((prev) => prev + 1)}
                >
                  <CiCirclePlus />
                </button>
              </div>
              <Link
              href="/card"
                className="bg-green py-2 px-3 rounded-lg flex items-center gap-x-2"
                onClick={() =>
                  dispatch(
                    addItem({
                      id: Math.floor(Math.random() * 10000),
                      foodId: filterItem[0].id,
                      foodName: filterItem[0].foodName,
                      desc:customerNote,
                      removedIngredients:removedItem,
                      price:filterItem[0].price,
                      quantity:quantityValue,
                      subTotal:filterItem[0].price*quantityValue
                    })
                  )
                }
              >
                <IoBasket size={30} />
                Sepete Ekle
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
