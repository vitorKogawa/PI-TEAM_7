import express from "express";
import cors from "cors";
// import {} from "./routes/jogos.routes";
// import {} from "./routes/tipo_pagamento.routes";
import { userRouter } from "./routes/users.routes";

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(userRouter);
    // this.server.use(jogoRouter);
    // this.server.use(tipoPagamentoRouter);
  }
}

export default new App().server;
