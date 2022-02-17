import '../css/App.css';
import UserInput from "./UserInput.js";
import Recommendations from "./Recommendations.js";
import NutrientInfo from "./NutrientInfo";

function App() {
  //UserInfo state
  //user input functions, pass into UserInput as prop
  //pass UserInfo into Recommendations as prop
  return (
    <div className="row">
      <UserInput />
      <Recommendations />
      <NutrientInfo /> 
    </div>
  );
}

export default App;

/*
Sources:
https://mui.com/
https://www.w3schools.com/howto/howto_css_three_columns.asp
https://reactjs.org/docs/rendering-elements.html
https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
https://www.w3schools.com/CSSref/pr_class_display.asp
https://youtu.be/9zBsdzdE4sM
https://healthyweightlossperweek.org/knowledge-base/determining-the-thermic-effect-of-activity-tea/
*/