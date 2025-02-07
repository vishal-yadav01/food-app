// import { useSelector } from "react-redux";
// import Food from "./Food";
// import { removeItem, clearCart } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";
// import "./Cart.css";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   console.log("cart data id dekho", cartItems);

//   const dispatch = useDispatch();
//   const deleteCarts = () => {
//     dispatch(clearCart());
//   };

//   const handleRemoveItem = (id) => {
//     dispatch(removeItem({ id }));
//   };

//   return (
//     <div>
//       <button onClick={deleteCarts}>clear-carts</button>
//       {cartItems.length > 0 ? (
//         cartItems.map((item, index) => {
//           return <Food key={index} {...item} removeItem={handleRemoveItem} />;
//         })
//       ) : (
//         <h1>your cart empty</h1>
//       )}
//     </div>
//   );
// };
// export default Cart;

import { useSelector } from "react-redux";
import Food from "./Food";
import { removeItem, clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const deleteCarts = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div>
      {cartItems.length > 0 ? (
        <button className="clear-cart-btn" onClick={deleteCarts}>
          Clear Cart
        </button>
      ) : (
        ""
      )}
      <div className="cart-container">
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <Food key={index} {...item} removeItem={handleRemoveItem} />
          ))
        ) : (
          <h1 className="empty-cart-message">Your cart is empty</h1>
        )}
      </div>
    </div>
  );
};

export default Cart;
