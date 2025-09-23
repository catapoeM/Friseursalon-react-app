import { useState } from "react";

export default function button() {
  // A simple function that runs when the button is clicked
  const handleClick = () => {
    alert("Button clicked!");
  }
    return (
    <div style={{textAllign: "center", margin: "50px"}}>
      <button
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor:"pointer",
        }}
      >
        Click Me
      </button>
    </div>
  );
}



