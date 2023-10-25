import express from "express";
import {
  authUser,
  registerUser,
  allUsers,
} from "../Controllers/userControllers.js";
import { protect } from "../middleware/authMiddlewares.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

export default router;
