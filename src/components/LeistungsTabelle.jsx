import { useState } from "react";

export default function FriseurTabelle({ tabelle, category }) {
  // Lokaler State für ausgewählte Services
  const [selected, setSelected] = useState([]);

  const toggleSelection = (serviceName) => {
    setSelected((prev) =>
      prev.includes(serviceName)
        ? prev.filter((item) => item !== serviceName) // abwählen
        : [...prev, serviceName] // hinzufügen
    );
  };

  return (
    <div>
      <h2>{category}</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Service</th>
            <th>Preis</th>
            <th>Auswahl</th>
          </tr>
        </thead>
        <tbody>
          {tabelle.map((service, index) => (
            <tr key={index}>
              <td>{service.name}</td>
              <td>{service.price}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selected.includes(service.name)}
                  onChange={() => toggleSelection(service.name)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>
        Deine Auswahl: {selected.length > 0 ? selected.join(", ") : "Keine"}
      </p>
    </div>
  );
}
