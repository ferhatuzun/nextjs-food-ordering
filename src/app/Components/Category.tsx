import React from "react";
import UiCategory from "./Ui/UiCategory";

const Category = () => {
  return (
    <div className="container mx-auto font-inter mt-32">
      <div className="text-center">
        <p className="text-red text-xl mb-5">Müşteri Favorileri</p>
        <p className="text-5xl font-bold">Popüler Kategoriler</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-20">
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
      </div>
    </div>
  );
};

export default Category;
