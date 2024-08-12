import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  // const { data } = props;
  const handleClick = () => {
    // console.log(showItems, "😘😘");
    // console.log("handleClick 😂");
    setShowItems();
  };
  return (
    // <div>
    //   {/* header */}
    <div className="bg-gray-50 w-6/12 shadow-lg p-4 mx-auto my-5">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/* Accordion body */}
      {showItems ? <ItemList items={data.itemCards} /> : false}
    </div>
    // </div>
  );
};

export default RestaurantCategory;
