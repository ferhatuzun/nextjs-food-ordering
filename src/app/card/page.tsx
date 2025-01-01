"use client";
import React, {useState } from "react";
import UiBasketFoodCard from "../Components/Ui/UiBasketFoodCard";
import { IoBasket } from "react-icons/io5";
import { useSelector } from "react-redux";
import { dataType } from "@/store/slice/cardSlice";

const Page = () => {
  const card = useSelector((store: { card: dataType }) => store.card);
  
  const [address, setAddress] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  return (
    <div className="container mx-auto mt-20 bg-sectionBg p-5 rounded-lg font-lexend">
      {address}
      {paymentMethod}
      <p className="text-2xl font-bold">Sepet</p>
      <div className="flex flex-col lg:flex-row gap-x-5">
        <div className="basis-[65%]">
          {card.cardItems.map((item) => {
            return (
              <UiBasketFoodCard
                key={item.id}
                id={item.id}
                image="/images/ui-food-card.png"
                desc={item.desc}
                price={item.subTotal}
                quantity={item.quantity}
                title={item.foodName}
                removedIngredients={item.removedIngredients}
              />
            );
          })}
        </div>

        <div className="basis-[35%] mt-3">
          <div className="bg-white rounded-xl p-5">
            <div className="flex">
              <p className="text-3xl font-semibold">Adres Seçimi</p>
              <button className="self-end text-green">Ekle</button>
            </div>
            <div className="mt-5">
              <select
                className="w-full bg-input py-2 px-3 rounded-lg"
                onChange={(e) => setAddress(e.target.value)}
              >
                <option value="1">Adres 1</option>
                <option value="2">Adres 2</option>
                <option value="3">Adres 3</option>
                <option value="4">Adres 4</option>
              </select>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 mt-5">
            <div>
              <p className="text-3xl font-semibold">Ödeme Yöntemi</p>
            </div>
            <div className="mt-5">
              <div className="flex gap-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  id=""
                  value="cash"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="text-green">Nakit</span>
              </div>
              <div className="flex gap-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  id=""
                  value="creditCard"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <span className="text-green">Kapıda Kredi Kartı</span>
              </div>
            </div>
            <div className="flex justify-end mt-8 items-center gap-x-2">
              <p className="font-bold text-lg">{card.total}₺</p>
              <button className="bg-green py-2 px-3 rounded-lg flex items-center gap-x-2">
                <IoBasket size={30} />
                Sepeti Onayla
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
