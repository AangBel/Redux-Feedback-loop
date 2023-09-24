import {Paper, Button} from "@mui/material";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Success(){
    console.log('success!');
    const history = useHistory();

    const handleNewFeedback = () => {
        history.push("/Feeling");
    }

    return (
            <Paper sx={{ height: 200 ,width:1300, elevation:5}}>
                <h1>Thank You!</h1>
                <Button variant="contained" onClick={handleNewFeedback}>Leave New Feedback</Button>
            </Paper>
        )
}