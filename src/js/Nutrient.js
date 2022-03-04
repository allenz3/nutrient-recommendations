export default function Nutrient(props) {

    function nutrientText(e) {
        console.log(e.target.innerHTML);
        return e.target.innerHTML;
    }

    return (
        <div>
          <h3><span onClick={(e) => nutrientText(e)}>{props.nutrient}</span>: {props.value} {props.unit}</h3>
        </div>
    );
}