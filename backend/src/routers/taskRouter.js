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

taskRouter.get(
  "/get-all",
  authMiddleWare.authenticateToken,
  taskControllers.getAllTaskController
);

taskRouter.get(
  "/:taskId",
  authMiddleWare.authenticateToken,
  taskControllers.getSingleTaskController
);

taskRouter.put(
  "/:taskId",
  taskMiddleWare.createTaskMiddleware,
  authMiddleWare.authenticateToken,
  taskControllers.updateTaskController
);

taskRouter.delete(
  "/:taskId",
  authMiddleWare.authenticateToken,
  taskControllers.deleteTaskController
);

export default taskRouter;
