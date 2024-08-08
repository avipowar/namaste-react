import { useEffect, useState } from "react";
import Shimmer from "./shimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategories";

const RestaurantMenu = () => {
  // const [resInfo, setRseInfo] = useState(null);

  const { resId } = useParams();

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

  // console.log(Categories, "❤️❤️");
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(",  ")} - {costForTwoMessage}
      </p>
      {Categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
