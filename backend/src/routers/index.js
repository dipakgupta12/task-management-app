import express from "express";
import authRouter from "./authRouter.js";
import taskRouter from "./taskRouter.js";

const allRoutes = express.Router();
allRoutes.get("/", (req,res)=>{
    res.send("Apis working...test")
});
allRoutes.use("/auth", authRouter);
allRoutes.use("/task", taskRouter);

export default allRoutes;
