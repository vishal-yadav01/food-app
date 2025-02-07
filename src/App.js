import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contect from "./components/Contect";
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Happy from "./components/Hpaay";
// import Chili from "./components/Chili";
// import Instamart from "./components/Instamart";

//* lazy loaidng
const Instamart = lazy(() => import("./components/Instamart"));

//* AppLayout
const AppLayout = () => {
  const [user, setUser] = useState({
    namee: "Asus",
    email: "asus@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", // paraentPath/{path}=> localhost:1234/about
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />, // paraentPath/{path}=> localhost:1234/about/path
          },
        ],
      },
      {
        path: "/contect",
        element: <Contect />,
      },
      {
        path: "/res/:resid",
        element: <RestaurantMenu />,
      },
      // {
      //   path: "/instamrt",
      //   element: (
      //     <Suspense fallback={<Shimmer />}>
      //       <Instamart />
      //     </Suspense>
      //   ),
      //},
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
var root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);

root.render(<RouterProvider router={appRouter} />);

//*Restaurant(restaurant[0])
