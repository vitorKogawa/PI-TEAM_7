import { Router } from "express";
import PagamentoController from "../controller/PagamentoController"

const pagamentoRouter = Router ();
pagamentoRouter.post("/pagamento", PagamentoController.create);
//pagamento_router.get("/pagamento/:id", pagamento_controller.findByPk);
//pagamento_router.delete("/pagamento/:id", pagamento_controller.deleteByPk);
//pagamento_router.get("/pagamento/usuario/:id", pagamento_controller.findAllByUserPk);
//pagamento_router.get("/pagamento", pagamento_controller.findAll);
//pagamento_router.put("/pagamento/:id", pagamento_controller.update);

export { pagamentoRouter };
