"use client";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import UpdateOrCreateAdress from "./UpdateOrCreateAdress";
const Adress = () => {
  const [addAdressShow, setAddAdressShow] = useState<boolean>(false);
  const [updateAdressShow, setUpdateAdressShow] = useState<boolean>(false)
  const tableData = [
    {
      id: 0,
      adressType: "Ev",
      adress:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 1,
      adressType: "İş",
      adress:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      adressType: "Ev",
      adress:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      id: 3,
      adressType: "İş",
      adress:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div>
      <div className="container mx-auto px-0 mt-10 lg:mt-0 lg:px-8">
        <div className="flex items-center gap-x-2 font-semibold">
          <h4 className="text-3xl font-bold">Adreslerim</h4>
          <button
            className="text-green text-sm"
            onClick={() => {
              setAddAdressShow(true);
            }}
          >
            Ekle
          </button>
        </div>
        <div className="mt-10 overflow-auto">
          <table className=" min-w-[850px] lg:!min-w-full overflow-scroll">
            <thead className="mt-5">
              <tr className="px-5">
                <td>Adres Tipi</td>
                <td>Açık Adres</td>
                <td>Eylemler</td>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => {
                return (
                  <tr key={item.id} className="border">
                    <td className="font-bold p-5">{item.adressType}</td>
                    <td className="text-sm">{item.adress}</td>
                    <td className="text-green">
                      <a href="#" className="mr-2" onClick={()=>{setUpdateAdressShow(true)}}>
                        Güncelle
                      </a>
                      <a href="#">Sil</a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        {addAdressShow && (
          <div>
            <div className="fixed inset-0 opacity-50 z-40 bg-black"></div>
            <OutsideClickHandler
              onOutsideClick={() => {
                setAddAdressShow(false);
              }}
            >
              <div className="fixed  p-4 rounded-xl z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                <UpdateOrCreateAdress update={false} />
              </div>
            </OutsideClickHandler>
          </div>
        )}
      </div>
      <div>
        {updateAdressShow && (
          <div>
            <div className="fixed inset-0 opacity-50 z-40 bg-black"></div>
            <OutsideClickHandler
              onOutsideClick={() => {
                setUpdateAdressShow(false);
              }}
            >
              <div className="fixed  p-4 rounded-xl z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
                <UpdateOrCreateAdress update={true} />
              </div>
            </OutsideClickHandler>
          </div>
        )}
      </div>
    </div>
  );
};

export default Adress;
