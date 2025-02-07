import React, { useState } from "react";

const Contect = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page refresh on form submission
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
    } else {
      alert("Message submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1c1c2a", // Darker background
        color: "#f8f8f2", // Lighter text color
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          border: "1px solid #2e2e3b", // Slightly lighter border
          backgroundColor: "#2a2a39", // Darker card background
          borderRadius: "15px",
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.5)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: "#66d9ef", // Brighter accent color
            fontWeight: "bold",
          }}
        >
          Contact
        </h1>
        <p style={{ fontSize: "1rem", lineHeight: "1.5", color: "#f8f8f2" }}>
          Get in touch! We would love to hear from you.
        </p>
        <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #3e3e4b", // Darker border
                borderRadius: "8px",
                backgroundColor: "#3c3c4d", // Lighter background for input
                color: "#f8f8f2",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #3e3e4b",
                borderRadius: "8px",
                backgroundColor: "#3c3c4d",
                color: "#f8f8f2",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #3e3e4b",
                borderRadius: "8px",
                backgroundColor: "#3c3c4d",
                color: "#f8f8f2",
                fontSize: "1rem",
                outline: "none",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              display: "inline-block",
              padding: "0.8rem 1.5rem",
              backgroundColor: "#50fa7b", // Bright button color
              color: "#282a36", // Darker text color for contrast
              border: "none",
              borderRadius: "10px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#69ff8f"; // Lighten on hover
              e.target.style.transform = "scale(1.05)"; // Slightly enlarge on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#50fa7b"; // Revert back on leave
              e.target.style.transform = "scale(1)"; // Revert back
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contect;
