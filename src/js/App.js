import '../css/App.css';
import UserInput from "./UserInput.js";
import Recommendations from "./Recommendations.js";
import NutrientInfo from "./NutrientInfo";
import React, { useState, useEffect } from "react";

function App() {
  const [nutrient, setNutrient] = useState("");
  const [userInfo, setUserInfo] = useState({weight: 0, height: 0, age: 0, activity_level: 0});
  const [TDEE, setTDEE] = useState("2000");
  const [macros, setMacros] = useState({carb: 0, fat: 0, protein: 0});

  function calculateTDEE () { // https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
    const bmr = 66 + (6.2 * userInfo.weight) + (12.7 * userInfo.height) - (6.76 * userInfo.age);
    const tdee = bmr * userInfo.activity_level;
    setTDEE(tdee);
  }

  const selectNutrient = (e) => {
    setNutrient(e.target.innerHTML.toLowerCase().split(' ').join('_'));
  }

  const update = (weight, height, age, activityLevel) => { // updates userInfo with new values when the "Calculate" button is pressed
    const newInfo = {weight: weight, height: height, age: age, activity_level: activityLevel};
    setUserInfo(newInfo);
  }

  const calculateMacros = () => { // calculates macronutrient intake based on calories
    const carb = (TDEE * 0.55) / 4;
    const fat = (TDEE * 0.3) / 9;
    const protein = (TDEE * 0.15) / 4;
    const newMacros = {carb: carb, fat: fat, protein: protein};
    setMacros(newMacros);
  }

  // runs calculate functions after hitting the calculate button
  useEffect(() => { 
    calculateTDEE();
  }, [userInfo]);

  useEffect(() => { 
    calculateMacros();
  }, [TDEE]);

  //user input functions, pass into UserInput as prop
  //pass UserInfo into Recommendations as prop
  return (
    <div className="row">
      <UserInput update={update} />
      <Recommendations TDEE={TDEE} macros={macros} onClick={selectNutrient} />
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
https://youtu.be/0ZJgIjIuY7U
https://developer.mozilla.org/en-US/docs/Web/API/Response
https://youtu.be/w7ejDZ8SWv8
https://youtu.be/eao7ABGFUXs
https://youtu.be/qdCHEUaFhBk
https://www.w3schools.com/whatis/whatis_json.asp
https://stackoverflow.com/questions/5173603/how-to-access-an-array-in-a-json-object
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
https://www.w3schools.com/tags/tag_input.asp
https://www.w3schools.com/react/react_useeffect.asp
https://reactjs.org/docs/state-and-lifecycle.html
https://www.w3schools.com/html/html_form_input_types.asp
https://reactjs.org/docs/faq-state.html
https://www.w3schools.com/jsref/event_oninput.asp
https://reactjs.org/docs/forms.html
https://stackoverflow.com/questions/33932395/what-event-handler-do-i-need-to-use-for-a-drop-down-menu-list-in-javascript
https://www.w3schools.com/tags/tag_select.asp
https://www.w3schools.com/tags/tag_option.asp
https://stackoverflow.com/questions/3065695/returning-an-integer-from-a-select-box-javascript
https://www.w3schools.com/jsref/event_onclick.asp
https://www.w3schools.com/jsref/jsref_tofixed.asp

Nutrient Calculations:
https://ods.od.nih.gov/HealthInformation/dailyvalues.aspx/
https://www.fda.gov/media/99059/download
https://www.fda.gov/media/99069/download
https://healthyweightlossperweek.org/knowledge-base/determining-the-thermic-effect-of-activity-tea/
https://healthfully.com/how-to-calculate-fat-protein-carbohydrates-12682875.html
https://en.wikipedia.org/wiki/Dietary_Reference_Intake
https://upfit.io/nutritional-calculator/
https://en.wikipedia.org/wiki/Harris%E2%80%93Benedict_equation
https://buildyourbody.org/how-to-calculate-your-macros/
https://en.wikipedia.org/wiki/Micronutrient
https://www.omnicalculator.com/health/vitamin
https://www.ncbi.nlm.nih.gov/books/NBK545442/table/appJ_tab3/?report=objectonly
https://www.ncbi.nlm.nih.gov/books/NBK56068/table/summarytables.t2/?report=objectonly
https://en.wikipedia.org/wiki/Electrolyte
http://www.surgicalcriticalcare.net/Guidelines/electrolyte_replacement.pdf
https://en.wikipedia.org/wiki/Physical_activity_level
https://en.wikipedia.org/wiki/List_of_macronutrients
https://www.healthline.com/nutrition/how-to-count-macros
https://en.wikipedia.org/wiki/Nutrient#Macronutrients
*/
