import '../css/UserInput.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

export default function UserInput() {
    //no state needed
    return (
        <div className="column left">

            <h1>Input Your Biometrics!</h1>

            <h2>What is your weight?</h2>
            <TextField id="outlined-basic" label="Weight" variant="outlined" sx={{width: 1 / 2, mb: 3}} />
            <br></br>
            <Button variant="contained" sx={{width: 1 / 4, m: 1}}>kg</Button>
            <Button variant="contained" sx={{width: 1 / 4, m: 1}}>lbs</Button>
            
            <h2>What is your activity level?</h2>
            <FormControl sx={{ mb: 3, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-label">Activity Level</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Activity Level"
            >
                <MenuItem value={1.2}>Sedentary</MenuItem>
                <MenuItem value={1.375}>Lightly Active</MenuItem>
                <MenuItem value={1.55}>Moderately Active</MenuItem>
                <MenuItem value={1.725}>Very Active</MenuItem>
                <MenuItem value={1.9}>Extremely Active</MenuItem>
            </Select>
            </FormControl>
            
            <br></br>
            <Button variant="contained">Calculate</Button>

        </div>
    );
}