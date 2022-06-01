import React from "react";
import { Paper, Button } from "@mui/material";
import Typography from '@mui/material/Typography';


const BannerItem = (props) => {

    console.log(props.item.bgcolor);
    return (

        <>
            <Paper style={{
                display: "flex",
                flexDirection: "column",
                height: "50vh",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: props.item.bgcolor,
                color: "#f9f9f9"
            }}>
                <Typography variant="h1">{props.item.name}</Typography>
                <Typography variant="h3">{props.item.description}</Typography>
                <br />
                <Button className="CheckButton" variant="contained" color="info">Check it out!</Button>
            </Paper>
        </>
    );
};

export default BannerItem;
