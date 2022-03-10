import '../css/UserInput.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import React, { useState, useEffect } from "react";

export default function UserInput({ update }) {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [activityLevel, setActivityLevel] = useState("");

    return (
        <div className="column left">

            <h1>Input Your Biometrics!</h1>

            <h2>What is your weight?</h2>
            <TextField id="outlined-basic" label="Weight" variant="outlined" value={weight} onInput={(e) => setWeight(e.target.value)} sx={{width: 1 / 4, mb: 1}} />
            <Button variant="contained" sx={{width: 1 / 4, m: 1}}>kg</Button>
            <Button variant="contained" sx={{width: 1 / 4, m: 1}}>lbs</Button>
            
            <h2>What is your height?</h2>
            <TextField id="outlined-basic" label="Height" variant="outlined" value={height} onInput={(e) => setHeight(e.target.value)} sx={{width: 1 / 4, mb: 1}} />
            <Button variant="contained" sx={{width: 1 / 4, m: 1}}>cm</Button>
            <Button variant="contained" sx={{width: 1 / 4, m: 1}}>in</Button>

            <h2>What is your age?</h2>
            <TextField id="outlined-basic" label="Age" variant="outlined" value={age} onInput={(e) => setAge(e.target.value)} sx={{width: 1 / 2, mb: 1}} />

            <h2>What is your activity level?</h2>
            <FormControl sx={{ mb: 1, minWidth: 150 }}>
            <InputLabel id="demo-simple-select-label">Activity Level</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={activityLevel}
                label="Activity Level"
                onChange={(e) => setActivityLevel(e.target.value)}
            >
                <MenuItem value={1.2}>Extremely Inactive</MenuItem>
                <MenuItem value={1.5}>Sedentary</MenuItem>
                <MenuItem value={1.8}>Moderately Active</MenuItem>
                <MenuItem value={2.1}>Vigorously Active</MenuItem>
                <MenuItem value={2.4}>Extremely Active</MenuItem>
            </Select>
            </FormControl>
            
            <br></br>
            <Button variant="contained" onClick={(e) => update(weight, height, age, activityLevel)}>Calculate</Button>

        </div>
    );
}