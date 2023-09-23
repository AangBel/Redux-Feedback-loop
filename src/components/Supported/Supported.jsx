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
import {useHistory} from "react-router-dom";
import "./Supported.css";


export default function Supported() {
    console.log("ya feel the support?");
    const [support, setSupport] = React.useState("");
    const history = useHistory();

    const handleSupportChange = (event) => {
    const selectedValue = event.target.value;
    setSupport(selectedValue);
    };

    const handleSupportNext = () => {
        console.log('selected support:', support);
        history.push("/Comments");

    }
    return (
    <>
    
        <Paper className="supportingPaper" sx={{ height: 200 ,width:1300, elevation:5}}>
        <h1>How well are you being supported?</h1>
        <FormControl sx={{ m: 1, minWidth: 160 }}>
            <InputLabel id="supporting-label">Support?</InputLabel>
            <Select
            labelId="supporting-label"
            id="supporting-select"
            value={support}
            onChange={handleSupportChange}
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
            <Button variant="contained" onClick={handleSupportNext}>Next</Button>
        </FormControl>
        </Paper>
    </>
    );
}
