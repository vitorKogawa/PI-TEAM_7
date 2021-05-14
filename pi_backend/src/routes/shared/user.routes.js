import { Router } from "express";
import UserController from "../../controller/UserController";

const userRouter = Router();
userRouter.post("/", UserController.create);

export { userRouter };