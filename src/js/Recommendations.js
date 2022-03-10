import '../css/Recommendations.css';
import Nutrient from './Nutrient.js';

export default function Recommendations({ TDEE, macros, onClick }) {
    return (
      <div className="column middle">
        <div className="calories">
          <h1>Recommended Nutrient Intake</h1>
        </div>
        <div className="macro">
          <h2>Macros</h2>
          <h3>Total Calories: {Math.round(TDEE)}</h3>
          <Nutrient onClick={onClick} nutrient="Carbohydrates" value={macros.carb.toFixed(1)} unit="g" />
          <Nutrient onClick={onClick} nutrient="Fat" value={macros.fat.toFixed(1)} unit="g" />
          <Nutrient onClick={onClick} nutrient="Protein" value={macros.protein.toFixed(1)} unit="g" />
          <Nutrient onClick={onClick} nutrient="Dietary Fiber" value="28" unit="g" />
          <Nutrient onClick={onClick} nutrient="Water" value="3.7" unit="L" />
        </div>
        <div className="micro">
          <h2>Minerals</h2>
          <Nutrient onClick={onClick} nutrient="Calcium" value="2,300" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Phosphorus" value="1,300" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Magnesium" value="420" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Sodium" value="18" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Potassium" value="4700" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Iron" value="18" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Zinc" value="11" unit="mg" />
        </div>
        <div className="micro">
          <h2>Vitamins</h2>
          <Nutrient onClick={onClick} nutrient="Vitamin A" value="900" unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin C" value="90" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin D" value="20" unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin E" value="15" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin K" value="120" unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B1" value="1.2" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B2" value="1.3" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B3" value="16" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B5" value="5" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B6" value="1.7" unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B7" value="30" unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B9" value="400" unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B12" value="2.4" unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Choline" value="550" unit="mg" />
        </div>
      </div>
    );
}