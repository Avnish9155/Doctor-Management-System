import express from "express";
import {
  registerUser,loginUser,getProfile,bookAppointment,listAppointment,cancelAppointment
} from "../controllers/userController.js";
import  authUser  from "../middlewares/authUser.js";

const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);


userRouter.get("/get-profile", authUser, getProfile);
userRouter.post("/book-appointment", authUser, bookAppointment);
userRouter.get("/appointments", authUser, listAppointment);
userRouter.post("/cancle-appointment", authUser, cancelAppointment);

export default userRouter;