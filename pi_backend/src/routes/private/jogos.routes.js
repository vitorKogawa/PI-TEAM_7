import JogoController from "../../controller/JogoController";
import multer from "multer";
import multerConfig from "../../config/multer.config";
import express, { Router } from "express";
import { resolve } from 'path'

const upload = multer(multerConfig);

const jogoRouter = new Router();

jogoRouter.post("/", upload.single("file"), JogoController.store);
jogoRouter.get("/", JogoController.findAll);
jogoRouter.get("/pago", JogoController.findAllPaidOut);
jogoRouter.get("/enable", JogoController.findAllEnable)
jogoRouter.put("/:id", JogoController.update);
jogoRouter.get("/:id", JogoController.findByPk);
jogoRouter.put("/disable/:id", JogoController.disableByPk);
jogoRouter.put("/disable", JogoController.disableAll);

jogoRouter.use('/file', express.static(resolve(__dirname, '..', '..', '..', 'tmp', 'uploads')));

export { jogoRouter };