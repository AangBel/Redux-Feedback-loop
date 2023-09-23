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

import { useState } from "react";

export default function Comments() {
  console.log("talking back??");
  const [comments, setComments] = React.useState("");

  const handleCommentChange = (event) => {
    const selectedValue = event.target.value;
    setComments(selectedValue);
  };

  return (
    <>
      <Paper
        className="commentingPaper"
        sx={{ height: 200, width: 1300, elevation: 5 }}
      >
        <h1>Any comments you want to leave?</h1>
        <FormControl sx={{ m: 1, minWidth: 160 }}>
          <TextField
            id="commenting-label"
            variant="outlined"
            value={comments}
            onChange={handleCommentChange}
          />

          <Button variant="contained">Next</Button>
        </FormControl>
      </Paper>
    </>
  );
}
