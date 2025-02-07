import { restaurantList } from "../configs";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filertData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import "./Body.css"; // Adjust the path as necessary

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filertRestaurantWork, setfilertRestauranWork] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const dataFeatched = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5/?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await dataFeatched.json();
      console.log(json);

      const cards = json?.data?.cards;

      const restaurantCard = cards.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      if (restaurantCard) {
        const restaurants =
          restaurantCard.card.card.gridElements.infoWithStyle.restaurants;
        // console.log(restaurantCard);

        setfilertRestauranWork(restaurants);
        setAllRestaurants(restaurants);
      } else {
        console.log("restaurant data not found in the API response");
      }
    } catch (err) {
      console.log("fetch data problem", err);
    }
  }
  console.log("render");

  //! this called early retun  :: it is way of avoiding rendering compnent
  if (!allRestaurants) return null;

  //!  if restaurent not found
  // if (filertRestaurantWork?.length === 0) return <h1>NO Restaurant Match😥</h1>;
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1> 🔴 You are offline 🔴 </h1>;
  }
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filertData(searchText, allRestaurants);

            setfilertRestauranWork(data);
          }}
        >
          search-button
        </button>
      </div>
      <div className="restron-list">
        {filertRestaurantWork.map((item) => {
          return (
            <Link to={"/res/" + item.info.id} key={item.info.id}>
              <RestaurantCard {...item.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
