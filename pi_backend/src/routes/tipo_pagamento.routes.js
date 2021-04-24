const { Router } = require("express");
const tipo_pagamento_router = Router();
const tipoPagamento = require("../controller/tipo_pagamento.controller");

tipo_pagamento_router.post("/tipoPagamento/", tipoPagamento.create);
tipo_pagamento_router.get("/tipoPagamento/", tipoPagamento.findAll);
tipo_pagamento_router.delete("/tipoPagamento/:id",tipoPagamento.deleteByPk);
tipo_pagamento_router.put("/tipoPagamento/:id",tipoPagamento.update);

module.exports = { tipo_pagamento_router };