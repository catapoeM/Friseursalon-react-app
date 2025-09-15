// components/CheckboxButton.jsx
import React from "react";

export default function CheckboxButton({ text, checked, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: checked ? "#e0f7ff" : "#fff",
        cursor: "pointer",
        width: "100%",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        readOnly
        style={{ cursor: "pointer" }}
      />
      {text}
    </button>
  );
}
