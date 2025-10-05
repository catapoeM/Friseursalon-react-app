import { useState } from "react";
import Button from "../components/Button";
import Leistungstabelle from "../components/Leistungstabelle";

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
    <div className="flex flex-col items-center justify-start min-h-screen w-full px-4 sm:px-6 lg:px-8 py-8 bg-white">
      {/* Titel nur solange showTitle true ist */}
      {showTitle && (
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
          Termin Buchen!
          </h1>
        )}

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {gender.map((type, index) => (
          <Button key={index} onClick={() => handleButton(type)}
          className="text-sm sm:text-base px-4 py-2"
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="w-full max-w-3xl">
        {/* Hier wird die Tabelle „aufgerufen“, sobald selectedServices true ist */}
        {selectedServices && (
          <Leistungstabelle 
            key={selectedServices}
            tabelle={services[selectedServices]}
            category={selectedServices}
          />
        )}
      </div>
    </div>
  );
}
