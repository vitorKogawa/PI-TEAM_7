import express from "express";
import cors from "cors";
import { userRouter } from "./routes/users.routes";
import { authRouter } from './routes/authenticate.routes';
import { pagamentoRouter } from './routes/pagamento.routes';
import { jogoRouter } from './routes/jogos.routes';
import "./database/index";

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
        this.server.use(authRouter);
        this.server.use(pagamentoRouter);
        this.server.use(jogoRouter);
    }
}

export default new App().server;
