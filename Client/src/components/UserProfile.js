import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";

import Avatar from "@mui/material/Avatar";

const UserProfile = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        {user && (
          <Avatar
            alt={user.name}
            sx={{
              margin: "10px 15px",
              marginTop: 2,
              width: 34,
              height: 34,
              color: "#751CCE",
              backgroundColor: "#E5D6F4",
            }}
          />
        )}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
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
            border: "2px solid #000",
            borderRadius: "10px",
            boxShadow: 12,
            p: 4,
          }}
        ></Box>
      </Modal>
    </>
  );
};

export default UserProfile;
