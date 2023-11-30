import { Router } from "express";

const authRouter = Router();

authRouter.use("/auth", (req, res) => {
  res.send("auth working");
});

export default authRouter;