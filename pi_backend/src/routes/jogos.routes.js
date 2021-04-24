const jogo_controller = require('../controller/jogo.controller');
const { Router } = require('express');

const jogo_router = Router();

//Criar jogo_controller
jogo_router.post("/jogo", jogo_controller.create);

//Listar todos os jogo_controller
jogo_router.get("/jogo", jogo_controller.findAll);

//Atualizar jogo por id
jogo_router.put("/:id", jogo_controller.update);

//Buscar jogo por id
jogo_router.get("/jogo/:id", jogo_controller.findByPk);

//Deletar jogo por id
jogo_router.put("/jogo/disable/:id", jogo_controller.disableByPk);

// Deletar todos os jogo_controller
jogo_router.put("/", jogo_controller.disableAll);

module.exports = { jogo_router };
