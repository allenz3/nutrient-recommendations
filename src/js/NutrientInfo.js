import '../css/NutrientInfo.css';
import React, { useState, useEffect } from "react";

export default function NutrientInfo({ selectedNutrient }) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/nutrients")
      .then(response => response.json())
      .then(macronutrients => setText(macronutrients[0][selectedNutrient].description));
  }, [selectedNutrient]);

  return (
    <div className="column right">
      <h1>Nutrient Info</h1>
      <p>{text}</p>
    </div>
  );
}