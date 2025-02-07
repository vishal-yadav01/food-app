import React from "react";
import "./Shimmer.css"; // Ensure this CSS file is created

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* Create multiple shimmer cards */}
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="shimmer-card" key={index}>
          <div className="shimmer-image"></div>
          <div className="shimmer-text shimmer-title"></div>
          <div className="shimmer-text shimmer-description"></div>
          <div className="shimmer-text shimmer-rating"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
