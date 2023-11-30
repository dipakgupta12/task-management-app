import { Router } from "express";

const taskRouter = Router();

taskRouter.use("/task", (req, res) => {
  res.send("task working");
});

export default taskRouter;