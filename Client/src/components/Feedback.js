import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";

const Feedback = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(2);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setMessage("Thank you for providing feedback!");
    setTimeout(() => {
      setMessage("");
      setOpen(false);
    }, 2000);
  };
  const [message, setMessage] = React.useState("");

  return (
    <>
      <MenuItem onClick={handleOpen}>Feedback</MenuItem>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid var(--background-3)",
            borderRadius: "10px",
            boxShadow: 12,
            p: 4,
          }}
        >
          {message ? (
            <div>{message}</div>
          ) : (
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Feedback
              </Typography>
              <FormControl
                sx={{
                  width: "100%",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <InputBase
                    sx={{
                      ml: 1,
                      flex: 1,
                      color: "var(--text-2)",
                    }}
                    placeholder="Type a message"
                    inputProps={{ "aria-label": "Type a message" }}
                  />
                </Paper>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  How was your experience?
                </Typography>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    marginTop: "10px",
                    marginBottom: "10px",
                  }}
                  onClick={handleClose}
                >
                  Submit
                </Button>
              </FormControl>
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Feedback;
