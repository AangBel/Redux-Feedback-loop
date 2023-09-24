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



export default function Feedback() {
  console.log("in the Review Feedback section!");

  return (
    <>
      <Paper
        className="supportingPaper"
        sx={{ height: 200, width: 1300, elevation: 5 }}
      >
        <h1>Review Your Feedback</h1>
        <Button variant="contained">SUBMIT</Button>
      </Paper>
    </>
  );
}
