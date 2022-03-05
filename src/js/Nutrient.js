export default function Nutrient({ onClick, nutrient, value, unit }) {
    return (
        <div>
          <h3><span onClick={onClick}>{nutrient}</span>: {value} {unit}</h3>
        </div>
    );
}