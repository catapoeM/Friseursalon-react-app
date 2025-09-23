import Dropdown from "../components/Dropdownlist";

export default function App() {
  const options = [
    { value: "Damen", label: ["Haarschnitt","Färben","Fönen"]},
    { value: "Herren", label: ["Haarschnitt"]},
    { value: "Kinder", label: ["Haarschnitt"]},
  ];

  const handleSelect = (option) => {
    console.log("Value:", option.value);
  };

  return (
    <div className="p-10">
      <Dropdown options={options} onSelect={handleSelect} title={options} />
    </div>
  );
}
