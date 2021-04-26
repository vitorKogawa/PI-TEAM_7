import { Router } from "express";
import UserController from "../controller/UserController";

const userRouter = Router();
userRouter.post("/usuario", UserController.create);
userRouter.get("/usuario", UserController.findAll);
userRouter.get("/usuario/enable", UserController.findAllEnable);
userRouter.get("/usuario/:id", UserController.findByPk);
userRouter.put("/usuario/disable", UserController.disableAll);
userRouter.put("/usuario/disable/:id", UserController.disableByPk);
userRouter.put("/usuario/:id", UserController.update);

export { userRouter };
