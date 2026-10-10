import express from "express";
import {
  createUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  loginUser,
} from "../controllers/users.controller.js";

const router = express.Router();

router.route("/user/auth/register").post(createUser);
router.route("/users").get(getAllUser);
router.route("/users/:id").get(getUser).patch(updateUser).delete(deleteUser);
router.route("/users/login").post(loginUser);
export default router;
