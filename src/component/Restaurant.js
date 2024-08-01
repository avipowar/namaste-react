import { SWIGGY_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300 rounded-lg">
      <div className="image-container">
        <img
          className="rounded-lg"
          src={SWIGGY_URL + cloudinaryImageId}
          alt="res-logo"
        />
      </div>
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
