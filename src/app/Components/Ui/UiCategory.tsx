import Image from "next/image";
import React from "react";

const UiCategory = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-2xl py-8 px-3 rounded-2xl gap-y-5">
      <div className="bg-lightGreen rounded-full w-28 h-28 flex items-center justify-center">
        <Image src="/images/ui-category.png" alt="" width={100} height={60} />
      </div>
      <div className="text-center">
        <a href="#">
          <p className="font-bold text-lg">Burger</p>
          <p>(86 items)</p>
        </a>
      </div>
    </div>
  );
};

export default UiCategory;
