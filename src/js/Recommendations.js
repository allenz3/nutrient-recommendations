import '../css/Recommendations.css';
import Nutrient from './Nutrient.js';

export default function Recommendations() {
    return (
      <div className="column middle">
        <div className="calories">
          <h1>Recommended Nutrient Intake</h1>
          <h2>Total Calories: 2000</h2>
        </div>
        <div className="macro">
          <h2>Macronutrients</h2>
          <Nutrient nutrient="Fat" value="78" unit="g" />
          <Nutrient nutrient="Saturated Fat" value="20" unit="g" />
          <Nutrient nutrient="Cholesterol" value="300" unit="mg" />
          <Nutrient nutrient="Total Carbohydrates" value="275" unit="g" />
          <Nutrient nutrient="Sodium" value="2,300" unit="mg" />
          <Nutrient nutrient="Dietary Fiber" value="28" unit="g" />
          <Nutrient nutrient="Protein" value="50" unit="g" />
          <Nutrient nutrient="Added Sugars" value="50" unit="g" />
        </div>
        <div className="micro">
          <h2>Micronutrients</h2>
          <Nutrient nutrient="Vitamin A" value="900" unit="mcg" />
          <Nutrient nutrient="Vitamin C" value="90" unit="mg" />
          <Nutrient nutrient="Calcium" value="1,300" unit="mg" />
          <Nutrient nutrient="Iron" value="18" unit="mg" />
          <Nutrient nutrient="Vitamin D" value="20" unit="mcg" />
          <Nutrient nutrient="Vitamin E" value="15" unit="mg" />
          <Nutrient nutrient="Vitamin K" value="120" unit="mcg" />
          <Nutrient nutrient="Vitamin B6" value="1.7" unit="mg" />
          <Nutrient nutrient="Vitamin B12" value="2.4" unit="mcg" />
        </div>
      </div>
    );
}