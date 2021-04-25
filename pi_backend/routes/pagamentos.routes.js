const { Router } = require("express");
const pagamento_router = Router();
const pagamento_controller = require("../controller/pagamento.controller");

pagamento_router.post("/pagamento", pagamento_controller.create);
pagamento_router.get("/pagamento/:id", pagamento_controller.findByPk);
pagamento_router.delete("/pagamento/:id", pagamento_controller.deleteByPk);


module.exports = { pagamento_router };