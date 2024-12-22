"use client";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UiFoodCard from "./Ui/UiFoodCard";
const SliderSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive:[
      {
        breakpoint: 640,
        settings:{
          slidesToShow:1,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow:2,
        }
      }
    ]
  };
  const sliderRef = useRef<Slider|null>(null);
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
          <div className="p-5">
            <UiFoodCard />
          </div>
          <div className="p-5">
            <UiFoodCard />
          </div>
          <div className="p-5">
            <UiFoodCard />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderSection;
