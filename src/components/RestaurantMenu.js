import ShimmerMenu from "./Shimmer2";
import "./MP.css";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../configs"; // CDN base URL for images
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resid } = useParams(); // Get restaurant id from the URL params
  const { restaurantDetails, menuItems } = useRestaurant(resid);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // dispatch action to add item to cart
  };

  // Safely flatten the nested itemCards into a single array if menuItems exists
  const flattenedMenuItems =
    menuItems?.flatMap((itemCard) => itemCard?.card?.card?.itemCards || []) ||
    [];

  return !restaurantDetails ? (
    <ShimmerMenu />
  ) : (
    <div className="restaurant-menu-container">
      <h2 className="restaurant-title">{restaurantDetails.name}</h2>
      <img
        className="restaurant-image"
        src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId}
        alt={restaurantDetails.name}
      />
      <div className="restaurant-details">
        <p className="restaurant-detail-item">
          Location: {restaurantDetails.locality}, {restaurantDetails.areaName}
        </p>
        <p className="restaurant-detail-item">
          Cost for Two: {restaurantDetails.costForTwoMessage}
        </p>
        <p className="restaurant-detail-item">
          ⭐{restaurantDetails.avgRatingString} (
          {restaurantDetails.totalRatingsString})
        </p>
        <button className="buy-button">Buy</button>

        <h3 className="menu-title">Menu</h3>

        {!flattenedMenuItems.length ? (
          <p>No menu available for this restaurant</p>
        ) : (
          <ul className="menu-items">
            {flattenedMenuItems.slice(0, 6).map((item) => (
              <li key={item.card.info.id} className="menu-item">
                <div className="menu-item-info">
                  <h4>{item.card.info.name}</h4>
                  <p>{Math.round(item.card.info.id / 1000000 || 150)} ₹</p>
                  {item.card.info.imageId && (
                    <img
                      className="menu-item-image"
                      src={`${IMG_CDN_URL}${item.card.info.imageId}`}
                      alt={item.card.info.name}
                    />
                  )}
                </div>
                <button
                  className="add-item-button"
                  onClick={() => handleAddItem(item.card.info)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
