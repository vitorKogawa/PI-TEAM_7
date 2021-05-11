import JogoController from "../controller/JogoController";
import multer from "multer";
import multerConfig from "../config/multer.config";
import { Router } from "express";

const upload = multer(multerConfig);

const jogoRouter = new Router();

jogoRouter.post("/jogo", upload.single("file"), JogoController.store);
jogoRouter.get("/jogo", JogoController.findAll);
jogoRouter.put("/:id", JogoController.update);
jogoRouter.get("/jogo/:id", JogoController.findByPk);
jogoRouter.put("/jogo/disable/:id", JogoController.disableByPk);
jogoRouter.put("/jogo/disable", JogoController.disableAll);

export { jogoRouter };