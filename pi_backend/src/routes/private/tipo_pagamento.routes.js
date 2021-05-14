import { Router } from 'express';
import TipoPagamentoController from '../../controller/TipoPagamento';

const tipoPagamentoRouter = Router();

tipoPagamentoRouter.post("/", TipoPagamentoController.create);
tipoPagamentoRouter.get("/", TipoPagamentoController.findAll);
tipoPagamentoRouter.delete("/:id", TipoPagamentoController.deleteByPk);
tipoPagamentoRouter.put("/:id", TipoPagamentoController.update);

export { tipoPagamentoRouter }