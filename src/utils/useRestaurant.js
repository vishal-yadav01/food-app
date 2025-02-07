// import { useEffect, useState } from "react";

// const useRestaurant = (resid) => {
//   const [res, setRes] = useState(null);

//   useEffect(() => {
//     if (resid) {
//       getData();
//     }
//   }, [resid]);

//   const getData = async () => {
//     try {
//       const data = await fetch(
//         `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.32750&lng=78.03250&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
//       );
//       const datav1 = await data.json();
//       setRes(datav1?.data?.cards[2]?.card?.card?.info || {});
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return res;
// };

// export default useRestaurant;

import { useEffect, useState } from "react";

const useRestaurant = (resid) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    if (resid) {
      getData();
    }
  }, [resid]);

  const getData = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.32750&lng=78.03250&restaurantId=${resid}&catalog_qa=undefined&submitAction=ENTER`
      );
      const datav1 = await data.json();

      // Extracting restaurant information
      const restaurantInfo = datav1?.data?.cards[2]?.card?.card?.info || {};

      // Extracting menu items (this might be under a different card)
      const menuItemsData =
        datav1?.data?.cards.find(
          (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards
        )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

      setRestaurantDetails(restaurantInfo);
      setMenuItems(menuItemsData);
    } catch (error) {
      console.log("Error fetching restaurant data:", error);
    }
  };

  // Returning both restaurant info and menu items
  return { restaurantDetails, menuItems };
};

export default useRestaurant;
