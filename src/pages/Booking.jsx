// pages/MyPage.jsx
import React, { useState } from "react";
import CheckboxButton from "../components/CheckboxButton";

export default function MyPage() {
  const [items, setItems] = useState([
    { id: 1, text: "Damen", checked: false },
    { id: 2, text: "Herren", checked: false },
    { id: 3, text: "Kinder", checked: false },
  ]);

  const toggleItem = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "200px" }}>
      {items.map(item => (
        <CheckboxButton
          key={item.id}
          text={item.text}
          checked={item.checked}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
}
