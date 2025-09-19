import { useState, useEffect } from "react";

function DropdownItem({ option, checked, onToggle }) {
  return (
    <button
      type="button"                       // important: prevents implicit form submits / nesting issues
      onClick={onToggle}
      className="flex w-full items-center justify-between px-4 py-2 bg-transparent rounded hover:bg-gray-100 transition"
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

export default function WrapButton({ label = "Wrap Button", options = [] }) {
  const [open, setOpen] = useState(false);

  // initialize selected state from options
  const [selected, setSelected] = useState(
    options.reduce((acc, opt) => {
      acc[opt] = false;
      return acc;
    }, {})
  );

  // if options prop changes, re-init selected
  useEffect(() => {
    setSelected(
      options.reduce((acc, opt) => {
        acc[opt] = false;
        return acc;
      }, {})
    );
  }, [options]);

  const toggleOption = (option) =>
    setSelected((prev) => ({ ...prev, [option]: !prev[option] }));

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-48 px-4 py-2 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        <span>{label}</span>
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-64 bg-white border rounded-xl shadow-lg p-2 flex flex-col space-y-1">
          {options.map((opt) => (
            <DropdownItem
              key={opt}
              option={opt}
              checked={selected[opt]}
              onToggle={() => toggleOption(opt)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
