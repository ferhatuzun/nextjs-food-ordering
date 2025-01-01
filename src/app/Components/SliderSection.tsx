"use client";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UiFoodCard from "./Ui/UiFoodCard";
const SliderSection = () => {
  const food = [
    {
      id: "1",
      foodName: "Pizza",
      desc:"Lorem ipsum dolor sit amet.",
      ingredients: ["Zeytin", "Mantar", "Biber"],
      price: 85.0,
      images: "ui-food-card.png",
    },
    {
      id: "2",
      foodName: "Hamburger",
      desc:"Lorem ipsum dolor sit amet.",
      ingredients: ["Soğan", "Turşu"],
      price: 60.0,
      images: "ui-food-card.png",
    },
    {
      id: "3",
      foodName: "Tavuk Döner",
      desc:"Lorem ipsum dolor sit amet.",
      ingredients: ["Mayonez", "Ketçap"],
      price: 45.0,
      images: "ui-food-card.png",
    },
    {
      id: "4",
      foodName: "Mantı",
      desc:"Lorem ipsum dolor sit amet.",
      ingredients: ["Sarımsaklı Yoğurt"],
      price: 50.0,
      images: "ui-food-card.png",
    },
    {
      id: "5",
      foodName: "Çorba",
      desc:"Lorem ipsum dolor sit amet.",
      ingredients: ["Yağ", "Pul Biber"],
      price: 30.0,
      images: "ui-food-card.png",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  const sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <div className="mt-20">
      <div>
        <p className="text-red text-xl font-bold mb-3">Özel Yemekler</p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-5xl font-bold ">
            Menümüzden Öne <br /> Çıkan Yemekler
          </p>
          <div className="flex gap-x-6 self- mt-10 md:mt-0">
            <button
              className="bg-gray w-16 h-16 rounded-full text-white flex  items-center justify-center"
              onClick={previous}
            >
              <IoIosArrowBack size={40} />
            </button>
            <button
              className="bg-green w-16 h-16 rounded-full text-white flex  items-center justify-center"
              onClick={next}
            >
              <IoIosArrowForward size={40} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Slider
          {...settings}
          ref={(slider) => {
            sliderRef.current = slider;
          }}
        >
          {food.map((item) => {
            return (
              <div className="p-5" key={item.id}>
                <UiFoodCard id={item.id} desc={item.desc} foodName={item.foodName} images={item.images} price={item.price}/>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
