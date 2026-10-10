import express from "express";
import { createUser, getAllUser } from "../controllers/users.controller.js";

const router = express.Router();

router.route("/user").post(createUser).get(getAllUser);

export default router;
