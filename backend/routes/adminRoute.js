import express from "express";
import { addDoctor,loginAdmin } from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";
import { getAllDoctors } from "../controllers/doctorController.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor",authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.get("/doctors", getAllDoctors);
adminRouter.get("/test", (req, res) => {
  res.send("Test route is working!");
});

export default adminRouter;