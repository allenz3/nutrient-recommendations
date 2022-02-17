import "./App.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function App() {
  return (
    <div className="row">
      <div className="column left">
        <h1>Input Your Biometrics!</h1>

        <h2>What is your age?</h2>
        <TextField id="outlined-basic" label="Years" variant="outlined" sx={{width: 1 / 4, mx: 1}} />
        <TextField id="outlined-basic" label="Month" variant="outlined" sx={{width: 1 / 4, mx: 1}} />

        <h2>What is your gender?</h2>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
          </Select>
        </FormControl>
        
        <h2>What is your weight?</h2>
        <TextField id="outlined-basic" label="Weight" variant="outlined" sx={{width: 1 / 4, mx: 1}} />
        <Button variant="contained" sx={{width: 1 / 4, m: 1}}>kg</Button>
        <Button variant="contained" sx={{width: 1 / 4, m: 1}}>lbs</Button>
        
        <h2>What is your activity level?</h2>
        <FormControl sx={{ mb: 3, minWidth: 150 }}>
          <InputLabel id="demo-simple-select-label">Activity Level</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
          </Select>
        </FormControl>
        
        <br></br>
        <Button variant="contained">Calculate</Button>
      </div>

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

      <div className="column right">
        <h1>Nutrient Info</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
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
*/