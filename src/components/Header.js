// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../assets/img/logo.jpg";
// import useOnline from "../utils/useOnline";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";
// import { useSelector } from "react-redux";

// const Title = () => <img src={Logo} className="logo" alt="logo" />;

// const Header = () => {
//   const cartItems = useSelector((store) => store.cart.items);
//   const isOnline = useOnline();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const { user } = useContext(UserContext);
//   return (
//     <div className="header">
//       <Title />
//       <div className="nav-items">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/contect">Contact</Link> {/* Fixed typo */}
//           </li>
//           <li>
//             <Link to="/instamrt">Instamart</Link> {/* Fixed typo */}
//           </li>
//           <Link to="/cart">
//             {" "}
//             <li>Cart {cartItems.length}</li>
//           </Link>

//           {/* <li>{user.name}</li> */}
//         </ul>
//       </div>
//       <h5>{isOnline ? "Online 🌐" : "Offline 🚫"}</h5>
//       {isLoggedIn ? (
//         <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
//       ) : (
//         <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
//       )}
//     </div>
//   );
// };

// export default Header;

import { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for active link styling
import Logo from "../assets/img/logo.jpg";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
  <img
    src={Logo}
    alt="logo"
    style={{
      width: "100px",
      height: "auto",
      marginRight: "20px",
    }}
  />
);

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const isOnline = useOnline();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <div
      className="header"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        backgroundColor: "#f8f8f8",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Title />
        <h2 style={{ margin: 0 }}>My Website</h2>
      </div>

      <div className="nav-items" style={{ flexGrow: 1, textAlign: "center" }}>
        <ul
          style={{
            listStyle: "none",
            display: "inline-flex",
            gap: "20px",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "red" : "#333",
                fontWeight: "bold",
              })}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "red" : "#333",
                fontWeight: "bold",
              })}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contect" // Fixed the typo from "/contect"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "red" : "#333",
                fontWeight: "bold",
              })}
            >
              Contact
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="/instamrt" // Fixed the typo from "/instamrt"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "red" : "#333",
                fontWeight: "bold",
              })}
            >
              Instamart */}
            {/* </NavLink> */}
          </li>
          <li>
            <NavLink
              to="/cart"
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "red" : "#333",
                fontWeight: "bold",
              })}
            >
              Cart {cartItems.length}
            </NavLink>
          </li>
        </ul>
      </div>

      <div style={{ textAlign: "right" }}>
        <h5 style={{ margin: "0 0 10px" }}>
          {isOnline ? "Online 🌐" : "Offline 🚫"}
        </h5>
        {isLoggedIn ? (
          <button
            onClick={() => setIsLoggedIn(false)}
            style={{
              padding: "8px 16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            style={{
              padding: "8px 16px",
              backgroundColor: "#66b3ff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            LogIn
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
