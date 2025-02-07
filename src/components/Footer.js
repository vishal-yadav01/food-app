// import React from "react";

// const Footer = () => {
//   const footerStyle = {
//     backgroundColor: "#0b2536",
//     color: "#ffffff",
//     padding: "40px",
//     textAlign: "left",
//     display: "flex",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     borderTop: "1px solid rgba(255, 255, 255, 0.2)",
//   };

//   const sectionStyle = {
//     flex: "1",
//     minWidth: "250px",
//     marginBottom: "20px",
//   };

//   const headingStyle = {
//     color: "#ffffff",
//     fontSize: "16px",
//     textTransform: "uppercase",
//     letterSpacing: "1px",
//     marginBottom: "10px",
//   };

//   const textStyle = {
//     color: "#d1d1d1",
//     fontSize: "14px",
//     marginBottom: "10px",
//   };

//   const buttonStyle = {
//     backgroundColor: "transparent",
//     color: "#ffffff",
//     border: "1px solid #ffffff",
//     padding: "10px 20px",
//     textTransform: "uppercase",
//     letterSpacing: "1px",
//     cursor: "pointer",
//     marginTop: "10px",
//   };

//   const copyrightStyle = {
//     marginTop: "40px",
//     color: "#999",
//     textAlign: "center",
//     width: "100%",
//   };

//   return (
//     <footer style={footerStyle}>
//       <div style={sectionStyle}>
//         <h4 style={headingStyle}>Food App</h4>
//         <p style={textStyle}>
//           123 Food Street
//           <br />
//           Mumbai, India
//         </p>
//         <p style={textStyle}>P: +91 1234567890</p>
//         <p style={textStyle}>E: info@foodapp.com</p>
//         <button style={buttonStyle}>Order Now</button>
//       </div>

//       <div style={sectionStyle}>
//         <h4 style={headingStyle}>Quick Links</h4>
//         <p style={textStyle}>About Us</p>
//         <p style={textStyle}>Menu</p>
//         <p style={textStyle}>Contact</p>
//         <button style={buttonStyle}>Get in Touch</button>
//       </div>

//       <div style={sectionStyle}>
//         <h4 style={headingStyle}>Follow Us</h4>
//         <p style={textStyle}>Instagram</p>
//         <p style={textStyle}>Facebook</p>
//         <p style={textStyle}>Twitter</p>
//       </div>

//       <div style={copyrightStyle}>
//         © 2024 Vishal Yadav. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#0a1f44", // Dark blue background
    color: "#e0e0e0", // Light text color for readability
    padding: "40px",
    textAlign: "left",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)", // Light border for subtle separation
  };

  const sectionStyle = {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
  };

  const headingStyle = {
    color: "#ffffff", // White for contrast with dark background
    fontSize: "18px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "10px",
  };

  const textStyle = {
    color: "#cccccc", // Light gray for softer text contrast
    fontSize: "14px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    backgroundColor: "#1f78d1", // Lighter blue button color
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0a5ca2", // Darker blue hover effect
  };

  const copyrightStyle = {
    marginTop: "40px",
    color: "#999", // Subtle gray for copyright text
    textAlign: "center",
    width: "100%",
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h4 style={headingStyle}>Food App</h4>
        <p style={textStyle}>
          123 Food Street
          <br />
          Mumbai, India
        </p>
        <p style={textStyle}>P: +91 1234567890</p>
        <p style={textStyle}>E: info@foodapp.com</p>
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          Order Now
        </button>
      </div>

      <div style={sectionStyle}>
        <h4 style={headingStyle}>Quick Links</h4>
        <p style={textStyle}>About Us</p>
        <p style={textStyle}>Menu</p>
        <p style={textStyle}>Contact</p>
        <button
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          Get in Touch
        </button>
      </div>

      <div style={sectionStyle}>
        <h4 style={headingStyle}>Follow Us</h4>
        <p style={textStyle}>Instagram</p>
        <p style={textStyle}>Facebook</p>
        <p style={textStyle}>Twitter</p>
      </div>

      <div style={copyrightStyle}>
        © 2024 Vishal Yadav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
