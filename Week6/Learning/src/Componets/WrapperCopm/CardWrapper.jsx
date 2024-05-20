import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div style={{ border: "2px solid white", padding: "1rem" }}>{children}</div>
  );
};

export default CardWrapper;
