// import { IMG_CDN_URL } from "../configs";
// import "./Food.css";
// const Food = ({ name, imageId, price, removeItem, id }) => {
//   // console.log(restaurant.restaurant);
//   // console.log(IMG_CDN_URL + cloudinaryImageId);
//   console.log("id=>>>>>", id);

//   return (
//     <div className="card">
//       <img src={IMG_CDN_URL + imageId} alt="network problem" />

//       <h3>{name}</h3>

//       <h4>price{price / 100}</h4>
//       <button onClick={() => removeItem(id)}>REMOVE ITEM</button>
//     </div>
//   );
// };

// export default Food;

import { IMG_CDN_URL } from "../configs";
import "./Food.css";

const Food = ({ name, imageId, removeItem, id }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + imageId} alt="network problem" />

      <h3>{name}</h3>

      <h4>{Math.round(id / 1000000 || 150)} ₹</h4>
      <button className="remove-item-btn" onClick={() => removeItem(id)}>
        REMOVE ITEM
      </button>
    </div>
  );
};

export default Food;
