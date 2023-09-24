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
  TextField,
} from "@mui/material";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import { useState } from "react";

export default function Comments() {
  console.log("talking back??");
  const [comments, setComments] = React.useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCommentChange = (event) => {
    const selectedValue = event.target.value;
    setComments(selectedValue);
  };

  const commentAction = {type:"ADD_COMMENT", payload:comments};

  const handleCommentNext = () => {
    console.log('in the handle comment next');
    dispatch(commentAction);
    history.push("/Feedback");
}

  return (
    <>
      <Paper
        className="commentingPaper"
        sx={{  height: 200, 
            width:1300, 
            elevation:5,
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center"}}
      >
        <h1>Any comments you want to leave?</h1>
        <FormControl sx={{ m: 1, minWidth: 160 }}>
          <TextField
            id="commenting-label"
            variant="outlined"
            value={comments}
            onChange={handleCommentChange}
          />

          <Button variant="contained" onClick={handleCommentNext}>Next</Button>
        </FormControl>
      </Paper>
    </>
  );
}
