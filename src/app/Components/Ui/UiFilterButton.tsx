import React from "react";

type propsType = {
  filter: string;
};

const UiFilterButton = ({ filter }: propsType) => {
  return (
    <div>
      <button className="border rounded-lg bg-filterButton py-1 px-3 font-semibold hover:bg-lightGreen transition">{filter}</button>
    </div>
  );
};

export default UiFilterButton;
