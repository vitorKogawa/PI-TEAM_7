import JogoController from "../controller/JogoController";
import multer from "multer";
import multerConfig from "../config/multer.config";
import express, { Router } from "express";
import { resolve } from 'path'

const upload = multer(multerConfig);

const jogoRouter = new Router();

jogoRouter.post("/jogo", upload.single("file"), JogoController.store);
jogoRouter.get("/jogo", JogoController.findAll);
jogoRouter.put("/:id", JogoController.update);
jogoRouter.get("/jogo/:id", JogoController.findByPk);
jogoRouter.put("/jogo/disable/:id", JogoController.disableByPk);
jogoRouter.put("/jogo/disable", JogoController.disableAll);

jogoRouter.use('/jogo/file', express.static(resolve(__dirname, '..', '..', 'tmp', 'uploads')));

export { jogoRouter };