import { useState } from "react";
import Button from "../components/Button";
import FriseurTabelle from "../components/LeistungTabelle";

export default function CreateGenderList() {
  const services = {
    Damen: [
      { name: "Haarschnitt", price: "30€" },,
      { name: "Waschen", price: "15€" },
      { name: "Föhnen", price: "15€" },
      { name: "Färben", price: "50€" },
      { name: "Strähnen", price: "60€" }
    ],
    Herren: [
      { name: "Haarschnitt", price: "30€" },
      { name: "Waschen", price: "15€" }
    ],
    Kinder: [
      { name: "Haarschnitt", price: "25€" }
    ]
  }
  const gender = ["Damen", "Herren", "Kinder"];
  // State für sichtbare Tabelle und ausgewählte Services
  const [showTable, setShowTable] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const handleButton = (buttonName) => {
    console.log(buttonName + " clicked!");

    if (services[buttonName]) {
      setSelectedServices(services[buttonName]); // Richtige Liste speichern
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };
  
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
      {showTable && <FriseurTabelle tabelle={selectedServices}/>}
    </div>
  );
}
