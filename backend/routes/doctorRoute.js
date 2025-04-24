import express from "express";
import { doctorList, changeAvailability } from "../controllers/doctorController.js";

const router = express.Router();

router.get("/list", doctorList);
router.post("/availability", changeAvailability);


export default router;
