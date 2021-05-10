import { Router } from 'express';
import TipoPagamentoController from '../controller/tipo_pagamento.controller';

const tipoPagamentoRouter = Router();

tipoPagamentoRouter.post("/tipoPagamento/", TipoPagamentoController.create);
tipoPagamentoRouter.get("/tipoPagamento/", TipoPagamentoController.findAll);
tipoPagamentoRouter.delete("/tipoPagamento/:id",TipoPagamentoController.deleteByPk);
tipoPagamentoRouter.put("/tipoPagamento/:id",TipoPagamentoController.update);

export { tipoPagamentoRouter }