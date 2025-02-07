import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const errorStyle = {
    background: "linear-gradient(to right, #87CEEB, #B0E0E6)", // Skyblue light gradient
    color: "#4a4a4a", // Light black text color
    height: "100vh", // Full page height
    display: "flex", // Center content
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#4a4a4a",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <div style={errorStyle}>
      <h1>Oops! Something went wrong.</h1>
      <p>Please try again later.</p>
      <h3>{err.status + " : " + err.statusText}</h3>
      <a href="/" style={buttonStyle}>
        Go to About Page
      </a>
    </div>
  );
};

export default Error;
