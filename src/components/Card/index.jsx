import { Typography } from "@mui/material";
import "./index.css";
import React from "react";
import Dialog from "../Dialog";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);
  const { imageData } = props;

  function toogleDialog() {
    setOpen(!open);
  }

  return (
    <div className="card-container" onClick={() => toogleDialog()}>
      <img
        className="card-img"
        src={imageData.thumbnail}
        alt={imageData.title}
      />
      <Typography mt={2} variant="h6">
        {imageData.title}
      </Typography>

      <Dialog open={open} toogleDialog={toogleDialog} imageData={imageData} />
    </div>
  );
}
