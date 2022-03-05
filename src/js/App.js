import '../css/App.css';
import UserInput from "./UserInput.js";
import Recommendations from "./Recommendations.js";
import NutrientInfo from "./NutrientInfo";
import React, { useState, useEffect } from "react";

function App() {
  const [nutrient, setNutrient] = useState();
  const [userInfo, setUserInfo] = useState(
    {weight:"140", activity_level:"sedentary"}
  );

  const selectNutrient = (e) => {
    setNutrient(e.target.innerHTML.toLowerCase().split(' ').join('_'));
  }

  //user input functions, pass into UserInput as prop
  //pass UserInfo into Recommendations as prop
  return (
    <div className="row">
      <UserInput />
      <Recommendations onClick={selectNutrient} />
      <NutrientInfo selectedNutrient={nutrient} /> 
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
https://youtu.be/0ZJgIjIuY7U
https://developer.mozilla.org/en-US/docs/Web/API/Response
https://youtu.be/w7ejDZ8SWv8
https://youtu.be/eao7ABGFUXs
https://youtu.be/qdCHEUaFhBk
https://www.w3schools.com/whatis/whatis_json.asp
https://stackoverflow.com/questions/5173603/how-to-access-an-array-in-a-json-object
https://ods.od.nih.gov/HealthInformation/dailyvalues.aspx/
https://www.fda.gov/media/99059/download
https://www.fda.gov/media/99069/download
https://youtu.be/O6P86uwfdR0
https://www.w3schools.com/js/js_objects.asp
https://medium.com/@dev_abhi/useeffect-what-when-and-how-95045bcf0f32
https://www.w3schools.com/jsref/event_onclick.asp
https://stackoverflow.com/questions/22674633/text-that-shows-an-underline-on-hover
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://www.w3schools.com/react/react_props.asp
https://reactjs.org/docs/components-and-props.html
https://stackoverflow.com/questions/441018/replacing-spaces-with-underscores-in-javascript
https://stackoverflow.com/questions/19300236/accessing-a-json-property-string-using-a-variable
*/