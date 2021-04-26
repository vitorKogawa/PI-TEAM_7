const { Router } = require("express");
const pagamento_router = Router();
const pagamento_controller = require("../controller/pagamento.controller");

pagamento_router.post("/pagamento", pagamento_controller.create);
pagamento_router.get("/pagamento/:id", pagamento_controller.findByPk);
pagamento_router.delete("/pagamento/:id", pagamento_controller.deleteByPk);
pagamento_router.get("/pagamento/usuario/:id", pagamento_controller.findAllByUserPk);
pagamento_router.get("/pagamento", pagamento_controller.findAll);
pagamento_router.put("/pagamento/:id", pagamento_controller.update);



module.exports = { pagamento_router };