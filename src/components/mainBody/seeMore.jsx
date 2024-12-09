import React from "react";

const SeeMore = () => {
  return (
    <div
      style={{
        alignItems: "start",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        marginTop: "50px",
        border: "1px solid #CCCCCC",
        gap: "10px",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: "20px",
      }}
    >
      <p style={{margin:0}}>See more</p>
      <a href="/" style={{ textDecoration: "none" }}>
        Benefits when you work at JM Bullion
      </a>
      <a href="/" style={{ textDecoration: "none" }}>
        Open positions at JM Bullion
      </a>
    </div>
  );
};

export default SeeMore;
