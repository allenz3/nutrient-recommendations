import '../css/NutrientInfo.css';
import React, { useState, useEffect } from "react";

export default function NutrientInfo({ selectedNutrient }) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("https://allenz3.github.io/nutrient-recommendations/db.json")
      .then(response => response.json())
      .then(nutrients => setText(nutrients["nutrients"][0][selectedNutrient].description));
  }, [selectedNutrient]);

  return (
    <div className="column right">
      <h1>Nutrient Info</h1>
      <h2>Click on a nutrient to learn more about it!</h2>
      <p>{text}</p>
    </div>
  );
}