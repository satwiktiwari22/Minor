import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Close from "@mui/icons-material/Close";

const UserBadgeItem = ({ user, handleFunction }) => {
  return (
    <>
      <Box
        sx={{
          px: 2,
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: "10px",
          backgroundColor: "#751CCE",
          color: "white",
          width: "100%",
          m: 1,
          mb: 2,
          fontSize: "12px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#E5D6F4",
            margin: "0px 10px",
          }}
        >
          {user.name}
        </Typography>
        <Button
          sx={{
            backgroundColor: "#E5D6F4",
            color: "#751CCE",
            width: "100%",
            height: "40px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
          onClick={handleFunction}
        >
          <Close />
        </Button>
      </Box>
    </>
  );
};

export default UserBadgeItem;
