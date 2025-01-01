import React from "react";

type propTypes = {
  update: boolean;
  adressId?:string
};

const UpdateOrCreateAdress = ({ update }: propTypes) => {
  return (
    <div>
      {update ? (
        <div>
          <h4 className="text-2xl text-center font-bold mb-10">Adresi Güncelle</h4>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Adres Tipi</span>
                <input
                  type="text"
                  required
                  className="py-2 px-4 rounded-lg bg-sectionBg"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Mahalle</span>
                <input
                  type="text"
                  required
                  className="py-2 px-4 rounded-lg bg-sectionBg"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Cadde-Sokak</span>
                <input
                  type="text"
                  required
                  className="py-2 px-4 rounded-lg bg-sectionBg"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">No</span>
                <input
                  type="text"
                  required
                  className="py-2 px-4 rounded-lg bg-sectionBg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
              <span className="font-semibold">Adres Tarifi</span>
              <textarea
                required
                className="py-2 px-4 rounded-lg bg-sectionBg"
                rows={3}
              />
            </div>
            <div className="mt-4 flex justify-end">
                <button className="bg-green text-white py-2 px-4 rounded-lg">Kaydet</button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h4 className="text-2xl text-center font-bold mb-10">Adres Ekle</h4>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Adres Tipi</span>
                <input
                  type="text"
                  required
                  className="py-2 px-4 rounded-lg bg-sectionBg"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Mahalle</span>
                <input
                  type="text"
                  required
                  className="py-2 px-4 rounded-lg bg-sectionBg"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">Cadde-Sokak</span>
                <input
                  type="text"
                  required
                  className="py-2 px-4 rounded-lg bg-sectionBg"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="font-semibold">No</span>
                <input
                  type="text"
                  required
                  className="py-2 px-4 rounded-lg bg-sectionBg"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
              <span className="font-semibold">Adres Tarifi</span>
              <textarea
                required
                className="py-2 px-4 rounded-lg bg-sectionBg"
                rows={3}
              />
            </div>
            <div className="mt-4 flex justify-end">
                <button className="bg-green text-white py-2 px-4 rounded-lg">Kaydet</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateOrCreateAdress;
