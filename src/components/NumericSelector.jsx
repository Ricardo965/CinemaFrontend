import React, { useState } from "react";

const NumericSelector = ({ onSeatsChange }) => {
  const [seats, setSeats] = useState(1); // Cantidad inicial de asientos

  const handleSeatsChange = (event) => {
    const value = event.target.value;
    setSeats(value);
    onSeatsChange(value); // Notifica el cambio al componente padre
  };

  return (
    <div className="flex flex-col items-center my-4">
      <label htmlFor="seats" className="mb-2 text-lg font-semibold pr-4">
        Selecciona la cantidad de asientos:
      </label>

      <select
        id="seats"
        value={seats}
        onChange={handleSeatsChange}
        className="border border-gray-300 rounded px-2 py-1 w-24 text-center"
      >
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NumericSelector;
