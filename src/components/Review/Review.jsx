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

import "./Review.css";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {useHistory} from "react-router-dom";


export default function Feedback() {
  console.log("in the Review Feedback section!");
  const feelingsValue = useSelector((store) => store.feelingsValue);
  const understandValue = useSelector((store) => store.understandValue);
  const supportValue = useSelector((store) => store.supportValue);
  const commentValue = useSelector((store) => store.commentValue);

  const history = useHistory();

  const handleSubmit = (event) => {
    console.log('in the handleSubmit');
    const payload = {feeling:feelingsValue, 
        understanding:understandValue,
        support:supportValue,
        comments:commentValue};
        history.push("/Success");
        
        axios.post('/feedback', payload)
        .then((response) => {
            console.log('POST',response);
            if (response.data.success){
            
            }
    })
    .catch((error)=> {
        console.log(error);
        alert('error with axios post under handle submit');
    })
}

    return (
    <>
        <Paper
        className="supportingPaper"
        sx={{ 
            height: 400, 
            width: 1300, 
            elevation: 5,
            display:"flex",
            flexDirection:"column",  
        }}
        >
        <h1>Review Your Feedback</h1>
        <p>Feelings: {feelingsValue}</p>
        <p>Understanding: {understandValue}</p>
        <p>Supported: {supportValue}</p>
        <p>Comments: {commentValue}</p>

        <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
        </Paper>
    </>
    );
}
