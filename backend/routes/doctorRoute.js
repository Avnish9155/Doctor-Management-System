import express from "express";
import authDoctor from "../middlewares/authDoctor.js";
import { doctorList, changeAvailability, appointmentComplete} from "../controllers/doctorController.js";

const router = express.Router();

router.get("/list", doctorList);
router.post("/availability", changeAvailability);
router.post("/complete-appointment", authDoctor, appointmentComplete);

export default router;
