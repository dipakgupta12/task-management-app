import express from "express";
import { taskControllers } from "../controllers/index.js";
import { authMiddleWare } from "../middlewares/authMiddlewares.js";
import { taskMiddleWare } from "../middlewares/taskMiddlewares.js";

const taskRouter = express.Router();

taskRouter.post(
  "/create",
  taskMiddleWare.createTaskMiddleware,
  authMiddleWare.authenticateToken,
  taskControllers.createTaskController
);

export default taskRouter;
