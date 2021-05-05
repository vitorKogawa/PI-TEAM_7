import JogoController from "../controller/JogoController";
import { Router } from "express";

const jogoRouter = new Router();

//Criar jogo_controller
jogoRouter.post("/jogo", JogoController.store);

//Listar todos os jogo_controller
// jogo_router.get("/jogo", jogo_controller.findAll);

// //Atualizar jogo por id
// jogo_router.put("/:id", jogo_controller.update);

// //Buscar jogo por id
// jogo_router.get("/jogo/:id", jogo_controller.findByPk);

// //Deletar jogo por id
// jogo_router.put("/jogo/disable/:id", jogo_controller.disableByPk);

// // Deletar todos os jogo_controller
// jogo_router.put("/", jogo_controller.disableAll);

export { jogoRouter }