import '../css/UserInput.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import React, { useState, useEffect } from "react";

export default function UserInput({ update }) {
    const [measure, setMeasure] = useState("Metric");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [activityLevel, setActivityLevel] = useState("");

    return (
        <div className="column left">
            <div>
                <h1>Input Your Biometrics!</h1>
                <Button variant={measure === "Metric" ? "contained" : "outlined"} onClick={() => setMeasure("Metric")} sx={{width: 1 / 4, m: 1}}>Metric</Button>
                <Button variant={measure === "US Customary" ? "contained" : "outlined"} onClick={() => setMeasure("US Customary")} sx={{width: 1 / 2, m: 1}}>US Customary</Button>
            </div>
            <div className="flex-items">
                <h2>Weight:</h2>
                <TextField id="outlined-basic" label={measure === "Metric" ? "kg" : "lbs"} variant="outlined" value={weight} onInput={(e) => setWeight(e.target.value)} sx={{width: 1 / 4, mb: 1}} />
            </div>
            <div className="flex-items">
                <h2>Height:</h2>
                <TextField id="outlined-basic" label={measure === "Metric" ? "cm" : "inches"} variant="outlined" value={height} onInput={(e) => setHeight(e.target.value)} sx={{width: 1 / 4, mb: 1}} />
            </div>
            <div className="flex-items">
                <h2>Age:</h2>
                <TextField id="outlined-basic" label="Years" variant="outlined" value={age} onInput={(e) => setAge(e.target.value)} sx={{width: 1 / 4, mb: 1}} />
            </div>
            <div className="flex-items">
            <h2>Activity Level:</h2>
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
            </div>
            <div>
                <Button variant="contained" onClick={(e) => update(measure, weight, height, age, activityLevel)}>Calculate</Button>
            </div>
        </div>
    );
}

// https://lzomedia.com/blog/changing-a-mui-button-variant-via-an-onclick-function/