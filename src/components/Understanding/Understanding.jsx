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
import {useDispatch, useSelector} from "react-redux";

import {useHistory} from "react-router-dom";
import "./Understanding.css";


export default function Understanding() {
    console.log("je razumijes?");
    const [understanding, setUnderstanding] = React.useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleUnderstandingChange = (event) => {
    const selectedValue = event.target.value;
    setUnderstanding(selectedValue);
    };

    const understandValue = useSelector((store)=> store.understandValue)
    const understandAction = {type:"ADD_UNDERSTANDING", payload:understanding};

    const handleRazumijesNext = () => {
        console.log('selected understanding:', understanding);
        dispatch(understandAction);
        history.push("/Supported");

    }

    return (
    <>
    
        <Paper 
        className="understandingPaper" 
        sx={{ 
            height: 200, 
            width:1300, 
            elevation:5,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"}}>
        <h1>How are you understanding the content?</h1>
        <FormControl sx={{ m: 1, minWidth: 160 }}>
            <InputLabel id="understanding-label">Understanding?</InputLabel>
            <Select
            labelId="understanding-label"
            id="understanding-select"
            value={understanding}
            onChange={handleUnderstandingChange}
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
            <Button variant="contained" onClick={handleRazumijesNext}>Next</Button>
        </FormControl>
        </Paper>
    </>
    );
}
