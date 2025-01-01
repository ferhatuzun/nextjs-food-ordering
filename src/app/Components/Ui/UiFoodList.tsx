import React from "react";
import UiFoodCard from "./UiFoodCard";

type propsType={
    categoryName:string
}

const UiFoodList = ({categoryName}:propsType) => {
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
    {
      id: "6",
      foodName: "Çorba",
      desc:"Lorem ipsum dolor sit amet.",
      ingredients: ["Yağ", "Pul Biber"],
      price: 30.0,
      images: "ui-food-card.png",
    },
    {
      id: "7",
      foodName: "Çorba",
      desc:"Lorem ipsum dolor sit amet.",
      ingredients: ["Yağ", "Pul Biber"],
      price: 30.0,
      images: "ui-food-card.png",
    },
    {
      id: "8",
      foodName: "Çorba",
      desc:"Lorem ipsum dolor sit amet.",
      ingredients: ["Yağ", "Pul Biber"],
      price: 30.0,
      images: "ui-food-card.png",
    }
  ];
  return (
    <div className="m-20">
      <div>
        <p className="text-4xl font-bold">{categoryName}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-5 mt-10">
       {food.map((item)=>{
        return(
          <UiFoodCard key={item.id} desc={item.desc} foodName={item.foodName} id={item.id} images={item.images} price={item.price}/>
        )
       })}
      </div>
    </div>
  );
};

export default UiFoodList;
