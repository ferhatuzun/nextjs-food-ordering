import React from "react";
import UiServicesCard from "./Ui/UiServicesCard";

const OurServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 font-inter mt-48">
      <div className="mr-5">
        <div>
          <p className="text-red text-xl font-bold ">Hizmetlerimiz</p>
          <p className="text-5xl font-bold my-10">Özenle Hazırlıyoruz</p>
          <p className="text-gray">
            Kökleri tutkuya dayanan, unutulmaz yemek deneyimleri yaratıyor ve
            mutfak sanatını sıcak misafirperverlikle harmanlayarak olağanüstü
            hizmetler sunuyoruz.
          </p>
        </div>
        <a href="#" className="block bg-green text-white w-44 h-12 rounded-3xl py-3 px-7 mt-10">Ürünleri İncele</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 md:mt-0">
        <UiServicesCard
          images="/images/services-1.png"
          title="CATERING"
          desc="Delight your guests with our flavors and  presentation"
        />
        <UiServicesCard
          images="/images/services-2.png"
          title="Fast delivery"
          desc="We deliver your order promptly to your door"
        />
        <UiServicesCard
          images="/images/services-3.png"
          title="Online Ordering"
          desc="Explore menu & order with ease using our Online Ordering "
        />
        <UiServicesCard
          images="/images/services-4.png"
          title="Gift Cards"
          desc="Give the gift of exceptional dining with Foodi Gift Cards"
        />
      </div>
    </div>
  );
};

export default OurServices;
