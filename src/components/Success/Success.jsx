import { Paper, Button } from "@mui/material";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import './Success.css';

export default function Success() {
  console.log("success!");
  const history = useHistory();

  const handleNewFeedback = () => {
    history.push("/Feeling");
  };

  return (
    <Paper
    className="successPaper"
      sx={{
        height: 200,
        width: 1300,
        elevation: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Thank You!</h1>
      <Button variant="contained" onClick={handleNewFeedback}>
        Leave New Feedback
      </Button>
    </Paper>
  );
}
