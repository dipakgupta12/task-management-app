import express from "express";

const taskRouter = express.Router();

taskRouter.use("/task", (req, res) => {
  res.send("task working");
});

export default taskRouter;
