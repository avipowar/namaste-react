import { useEffect, useState } from "react";
import Shimmer from "./shimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategories";

const RestaurantMenu = () => {
  // const [resInfo, setRseInfo] = useState(null);

  const { resId } = useParams();

  const [showItems, setShowItems] = useState(false);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(
  //   resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards,
  //   "🚀🚀🚀"
  // );

  const Categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log("component called", "❤️❤️");
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",  ")} - {costForTwoMessage}
      </p>
      {/* console.log(setShowItems, "👌👌👌") */}
      {Categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showItems ? true : false}
          setShowItems={() => {
            setShowItems(index);
            // console.log(index, "👌👌👌👌");
            // console.log(showItems, "❤️❤️");
            // console.log("setShowItems called ⬇️");
            // console.log(showItems, "❤️❤️❤️⬇️");
          }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
