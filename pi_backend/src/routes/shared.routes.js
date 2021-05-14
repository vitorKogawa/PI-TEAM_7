import { Router } from "express";
import { userRouter } from "./shared/user.routes";
import { authRouter } from "./shared/authenticate.routes";

const sharedRouter = Router();

sharedRouter.use("/usuario", userRouter);
sharedRouter.use("/login", authRouter);

export { sharedRouter };