import RestaurantCard from "./Restaurant";
// import resList from "../utils/mockData";
import Shimmer from "./shimmerUi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable
  console.log("body render");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("useEffect is render");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    const showData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(showData);
    setFilterRestaurant(showData);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false){
    return <h1> Looks like you're Offline!! Please Check Your Internet Connection</h1>
  }


  // Conditional Rendering
  // if (listOfRestaurants.length === 0){  
  //   return <Shimmer/>
  // }

  return filteredRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="p-4 m-4">
        <div className="search">
          <input
            type="text"
            className=" h-8 border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-4 px-4 h-9 bg-green-100 "
            onClick={() => {
              const filterRestaurant = listOfRestaurants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase())
              );
              setFilterRestaurant(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

