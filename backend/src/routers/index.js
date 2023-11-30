import { Router } from "express";
import authRouter from "./authRouter.js";
import taskRouter from "./taskRouter.js";

const allRoutes = Router();

allRoutes.use("/auth", authRouter);
allRoutes.use("/task", taskRouter);

export default allRoutes;
