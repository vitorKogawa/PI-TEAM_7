import { Router } from "express";
import PagamentoController from "../../controller/PagamentoController";

const pagamentoRouter = Router();
pagamentoRouter.post("/", PagamentoController.create);
pagamentoRouter.get("/", PagamentoController.findAll);
pagamentoRouter.get("/:id", PagamentoController.findByPk);
pagamentoRouter.get(
    "/usuario/:id",
    PagamentoController.findAllByUserPk
);
pagamentoRouter.delete("/:id", PagamentoController.deleteByPk);
pagamentoRouter.put("/:id", PagamentoController.aprovarPagamento);

export { pagamentoRouter };