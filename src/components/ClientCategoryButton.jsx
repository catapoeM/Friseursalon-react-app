import { useState } from "react";

function DropdownItem({ option, checked, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center justify-between w-full px-4 py-2 rounded hover:bg-gray-100 transition"
    >
      <span>{option}</span>
      <input
        type="checkbox"
        checked={checked}
        readOnly
        className="form-checkbox h-4 w-4 text-blue-600"
      />
    </button>
  );
}

export default function WrapButton({ label, options }) {
  const [open, setOpen] = useState(false);

  const [selected, setSelected] = useState(
    options.reduce((acc, opt) => {
      acc[opt] = false;
      return acc;
    }, {})
  );

  const toggleOption = (option) => {
    setSelected((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  return (
    <div className="relative inline-block">
      {/* Dropdown toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        {label}
      </button>

      {/* Dropdown list */}
      {open && (
        <div className="absolute mt-2 w-48 bg-white border rounded-xl shadow-lg p-2">
          {options.map((option) => (
            <DropdownItem
              key={option}
              option={option}
              checked={selected[option]}
              onToggle={() => toggleOption(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
