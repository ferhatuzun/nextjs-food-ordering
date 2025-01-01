import React from "react";
import UiCategory from "../Components/Ui/UiCategory";

const Page = () => {
  return (
    <div className="container mx-auto font-inter mt-20">
      <div className="text-center">
        <p className="text-red text-xl font-bold mb-4">Müşteri Favorileri</p>
        <p className="text-5xl font-bold">Tüm Kategoriler</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 mt-10">
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
        <UiCategory />
      </div>
    </div>
  );
};

export default Page;
