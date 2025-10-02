import { useState } from "react";
import Button from "../components/Button";
import FriseurTabelle from "../components/LeistungsTabelle";
import './booking.css';

export default function CreateGenderList() {
  const services = {
    Damen: [
      { name: "Haarschnitt", price: "30€" },
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

  const [selectedServices, setSelectedServices] = useState(null);
  const [showTitle, setShowTitle] = useState(true);

  const handleButton = (buttonName) => {
    setSelectedServices(buttonName);
    setShowTitle(false);
  };
  
  return (
    <div className="tableContainer">
      {/* Titel nur solange showTitle true ist */}
      {showTitle && <h1>Termin Buchen!</h1>}

      <div className="flex gap-2 mb-4">
        {gender.map((type, index) => (
          <Button key={index} onClick={() => handleButton(type)}>
            {type}
          </Button>
        ))}
      </div>

      {/* Hier wird die Tabelle „aufgerufen“, sobald selectedServices true ist */}
      {selectedServices && (
        <FriseurTabelle 
          key={selectedServices}
          tabelle={services[selectedServices]}
          category={selectedServices}
        />
      )}
    </div>
  );
}
