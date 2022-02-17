import '../css/Recommendations.css';

export default function Recommendations() {
    return (
      <div className="column middle">
        <div className="calories">
          <h1>Recommended Nutrient Intake</h1>
          <h2>Total Calories: 2000</h2>
        </div>
        <div className="macro">
          <h2>Macronutrients</h2>
          <h3>Fat: 78 g</h3>
          <h3>Saturated Fat: 20 g</h3>
          <h3>Cholesterol: 300 mg</h3>
          <h3>Total Carbohydrates: 275 mg</h3>
          <h3>Sodium: 2,300 mg</h3>
          <h3>Dietary Fiber: 28 g</h3>
          <h3>Protein: 50 g</h3>
          <h3>Added Sugars: 50 g</h3>
        </div>
        <div className="micro">
          <h2>Micronutrients</h2>
          <h3>Vitamin A: 900 mcg</h3>
          <h3>Vitamin C: 90 mg</h3>
          <h3>Calcium: 1,300 mg</h3>
          <h3>Iron: 18 mg</h3>
          <h3>Vitamin D: 20 mcg</h3>
          <h3>Vitamin E: 15 mg</h3>
          <h3>Vitamin K: 120 mcg</h3>
          <h3>Vitamin B6: 1.7 mg</h3>
          <h3>Vitamin B12: 2.4 mcg</h3>
        </div>
      </div>
    );
}