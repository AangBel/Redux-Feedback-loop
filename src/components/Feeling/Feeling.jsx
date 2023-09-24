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
import {useDispatch, useSelector} from "react-redux";

import "./Feeling.css";


export default function Feeling() {
    console.log("in the feels");
    const [feel, setFeel] = React.useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeelingsChange = (event) => {
    const selectedValue = event.target.value;
    setFeel(selectedValue);
    };

    const feelingsValue = useSelector((store)=> store.feelingsValue)
    const feelingAction = {type: "ADD_FEELINGS", payload:feel};

    const handleFeelingsNext = () => {
        console.log('selected feeling:', feel);
        dispatch(feelingAction);
        history.push("/Understanding");
        }


    return (
    <>
    
        <Paper 
        className="feelingPaper" 
        sx={{ 
        height: 200, 
        width:1300, 
        elevation:5,
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center"
        }}>
        <h1>How are you feeling today?</h1>
        <FormControl sx={{ m: 1, minWidth: 110 }}>
            <InputLabel id="feeling-label">Feeling?</InputLabel>
            <Select
            labelId="feeling-label"
            id="feeling-select"
            value={feel}
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
            <Button variant="contained"  onClick={handleFeelingsNext} >Next</Button>
        </FormControl>
        </Paper>
    </>
    );
    }
