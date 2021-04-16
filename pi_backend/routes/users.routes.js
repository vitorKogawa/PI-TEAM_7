const { Router } = require("express");
const user_router = Router();
const user_controller = require("../controller/usuario.controller");

user_router.post("/usuario", user_controller.create);
user_router.get("/usuario", user_controller.findAll);
user_router.get("/usuario/enable", user_controller.findAllEnable);
user_router.get("/usuario/:id", user_controller.findByPk);

module.exports = { user_router };
