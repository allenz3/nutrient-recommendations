import '../css/Recommendations.css';
import Nutrient from './Nutrient.js';

export default function Recommendations({ TDEE, macros, micros, onClick, activityLevel }) {
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
          <Nutrient onClick={onClick} nutrient="Water" value={(3.7 * activityLevel).toFixed(1)} unit="L" />
          <div className="disclaimer">
            <Nutrient onClick={onClick} nutrient="Disclaimer" value="click to display" unit="" />
          </div>
        </div>
        <div className="micro">
          <h2>Minerals</h2>
          <Nutrient onClick={onClick} nutrient="Calcium" value={micros.calcium.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Magnesium" value={micros.magnesium.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Sodium" value={micros.sodium.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Potassium" value={micros.potassium.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Chloride" value={micros.chloride.toFixed(1)} unit="g" />
          <Nutrient onClick={onClick} nutrient="Phosphorus" value={micros.phosphorus.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Iron" value={micros.iron.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Zinc" value={micros.zinc.toFixed(1)} unit="mg" />
        </div>
        <div className="micro">
          <h2>Vitamins</h2>
          <Nutrient onClick={onClick} nutrient="Vitamin A" value={micros.vitamin_a.toFixed(1)} unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin C" value={micros.vitamin_c.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin D" value={micros.vitamin_d.toFixed(1)} unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin E" value={micros.vitamin_e.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin K" value={micros.vitamin_k.toFixed(1)} unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B1" value={micros.vitamin_b1.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B2" value={micros.vitamin_b2.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B3" value={micros.vitamin_b3.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B5" value={micros.vitamin_b5.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B6" value={micros.vitamin_b6.toFixed(1)} unit="mg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B7" value={micros.vitamin_b7.toFixed(1)} unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B9" value={micros.vitamin_b9.toFixed(1)} unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Vitamin B12" value={micros.vitamin_b12.toFixed(1)} unit="mcg" />
          <Nutrient onClick={onClick} nutrient="Choline" value={micros.choline.toFixed(1)} unit="mg" />
        </div>
      </div>
    );
}