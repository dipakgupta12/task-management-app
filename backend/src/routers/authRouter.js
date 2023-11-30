import { Router } from "express";
import { authControllers } from "../controllers/index.js";
import { authMiddleWare } from "../middlewares/index.js";

const authRouter = Router();

authRouter.post(
  "/register",
  authMiddleWare.registerMiddleware,
  authControllers.registerController
);
authRouter.post("/login", authControllers.loginController);
authRouter.get(
  "/user-details",
  authMiddleWare.authenticateToken,
  authControllers.getUserController
);

export default authRouter;