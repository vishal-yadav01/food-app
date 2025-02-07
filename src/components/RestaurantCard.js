import { IMG_CDN_URL } from "../configs";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // console.log(restaurant.restaurant);
  // console.log(IMG_CDN_URL + cloudinaryImageId);
  const { user } = useContext(UserContext);
  // console.log(cuisines);

  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="network problem" />

      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textRendering: "optimizeLegibility",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {name}
      </h3>

      <h4 style={{ fontStyle: "italic" }}>{cuisines.slice(0, 2).join(", ")}</h4>

      <h4 style={{ fontFamily: "cursive" }}>{avgRating}⭐</h4>
    </div>
  );
};

export default RestaurantCard;
