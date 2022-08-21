import "./index.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";

export default function CustomDialog(props) {
  const { toogleDialog, open, imageData } = props;
  return (
    <div>
      <Dialog
        maxWidth="lg"
        open={open}
        onClose={toogleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography variant="p">{imageData.title}</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box className="dialog-container">
              <div className="image-content">
                <img
                  src={imageData.thumbnail}
                  alt={imageData.title}
                  className="dialog-image"
                />
              </div>
              <div className="card-info">
                <Box mb={2} display="flex" className="content-info">
                  <Typography mr={2} variant="h6">
                    Author:
                  </Typography>
                  <Typography variant="p">{imageData.author}</Typography>
                </Box>
                <Box mb={2} display="flex" className="content-info">
                  <Typography mr={2} variant="h6">
                    Ups:
                  </Typography>
                  <Typography variant="p">{imageData.ups}</Typography>
                </Box>
                <Box mb={2} display="flex" className="content-info">
                  <Typography mr={2} variant="h6">
                    Downs:
                  </Typography>
                  <Typography variant="p">{imageData.downs}</Typography>
                </Box>
                <Box mb={2} display="flex" className="content-info">
                  <Typography mr={2} variant="h6">
                    Created at:
                  </Typography>
                  <Typography variant="p">
                    {new Date(imageData.created).toString()}
                  </Typography>
                </Box>
              </div>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toogleDialog} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
