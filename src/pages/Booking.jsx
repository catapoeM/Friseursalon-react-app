import { useState } from "react";
import Button from "../components/Button";
import FriseurTabelle from "../components/LeistungTabelle";

export default function CreateGenderList() {
  const gender = ["Damen", "Herren", "Kinder"];
  const [showTable, setShowTable] = useState(false);

  const handleButton = (buttonName) => {
    console.log(buttonName + " clicked!");
    
    if (buttonName === "Damen") {
      setShowTable(true);  // → React rendert die Tabelle
    } else {
      setShowTable(false); // Tabelle ausblenden
    }
  }

  return (
    <div>
      <h1>Termin Buchen!</h1>
      <div className="flex gap-2 mb-4">
        {gender.map((type, index) => (
          <Button key={index} onClick={() => handleButton(type)}>
            {type}
          </Button>
        ))}
      </div>

      {/* Hier wird die Tabelle „aufgerufen“, sobald showTable true ist */}
      {showTable && <FriseurTabelle />}
    </div>
  );
}
