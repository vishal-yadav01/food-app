import { Outlet } from "react-router-dom";
const Happy = () => {
  return (
    <>
      <h1>Happy Header ✅</h1>;
      <Outlet />
    </>
  );
};

export default Happy;
