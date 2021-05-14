import { Router } from "express";
import UserController from "../../controller/UserController";

const userRouter = Router();
userRouter.get("/", UserController.findAll);
userRouter.get("/enable", UserController.findAllEnable);
userRouter.get("/:id", UserController.findByPk);
userRouter.put("/disable", UserController.disableAll);
userRouter.put("/disable/:id", UserController.disableByPk);
userRouter.put("/:id", UserController.update);

export { userRouter };