import '../css/Recommendations.css';
import Nutrient from './Nutrient.js';

export default function Recommendations({ onClick }) {
    return (
      <div className="column middle">
        <div className="calories">
          <h1>Recommended Nutrient Intake</h1>
          <h2>Click on a nutrient to learn more about it!</h2>
          <h2>Total Calories: 2000</h2>
        </div>
        <div className="macro">
          <h2>Macronutrients</h2>
          <Nutrient onClick={onClick} nutrient="Fat" value="78" unit="g" />
          <Nutrient onClick={onClick} nutrient="Saturated Fat" value="20" unit="g" />
          <Nutrient onClick={onClick} nutrient="Cholesterol" value="300" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Total Carbohydrates" value="275" unit="g" />
          <Nutrient onClick={onClick} nutrient="Sodium" value="2,300" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Dietary Fiber" value="28" unit="g" />
          <Nutrient onClick={onClick} nutrient="Protein" value="50" unit="g" />
          <Nutrient onClick={onClick} nutrient="Added Sugars" value="50" unit="g" />
        </div>
        <div className="micro">
          <h2>Micronutrients</h2>
          <Nutrient onClick={onClick} nutrient="Vitamin A" value="900" unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin C" value="90" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Calcium" value="1,300" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Iron" value="18" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin D" value="20" unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin E" value="15" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin K" value="120" unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B6" value="1.7" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B12" value="2.4" unit="mcg" />
        </div>
      </div>
    );
}