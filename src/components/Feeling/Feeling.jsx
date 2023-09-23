import * as React from "react";
import {
    Box,
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Stack,
    Button,
    Paper,
} from "@mui/material";

import { useState } from "react";

export default function Feeling() {
    console.log("in the feels");
    const [feeling, setFeeling] = React.useState("");

    const handleFeelingsChange = (event) => {
    const selectedValue = event.target.value;
    setFeeling(selectedValue);
    };

    return (
    <>
    
        <Paper className="feelingPaper" sx={{ height: 200 ,width:1300, elevation:5}}>
        <h1>How are you feeling today?</h1>
        <FormControl sx={{ m: 1, minWidth: 110 }}>
            <InputLabel id="feeling-label">Feeling?</InputLabel>
            <Select
            labelId="feeling-label"
            id="feeling-select"
            value={feeling}
            onChange={handleFeelingsChange}
            >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            </Select>
            <Stack spacing={2} direction="row">
            </Stack>
            <Button variant="contained">Next</Button>
        </FormControl>
        </Paper>
    </>
    );
}
