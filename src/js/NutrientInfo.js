import '../css/NutrientInfo.css';
import React, { useState, useEffect } from "react";

export default function NutrientInfo() {
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/macros")
      .then(response => response.json())
      .then(macros => setText(macros[0].carbohydrates)); // hardcoded, update later
  }, []);

  return (
    <div className="column right">
      <h1>Nutrient Info</h1>
      <p>{text}</p>
    </div>
  );
}