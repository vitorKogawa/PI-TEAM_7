import { Router } from "express";
import PagamentoController from "../controller/PagamentoController"

const pagamentoRouter = Router ();
pagamentoRouter.post("/pagamento", PagamentoController.create);
pagamentoRouter.get("/pagamento/:id", PagamentoController.findByPk);
pagamentoRouter.delete("/pagamento/:id", PagamentoController.deleteByPk);
pagamentoRouter.get("/pagamento/usuario/:id", PagamentoController.findAllByUserPk);
pagamentoRouter.get("/pagamento", PagamentoController.findAll);
//pagamento_router.put("/pagamento/:id", pagamento_controller.update);

export { pagamentoRouter };
