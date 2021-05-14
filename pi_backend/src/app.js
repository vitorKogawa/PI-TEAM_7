import express from "express";
import cors from "cors";
import helmet from "helmet";
import { sharedRouter } from "./routes/shared.routes";
import { privateRouter } from "./routes/private.routes";
import middleware_authenticate from "./middleware/authenticate.middleware";
import "./database/index";

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors());
        this.server.use(helmet());
        this.server.use(express.json());
    }

    routes() {
        this.server.use(sharedRouter);
        // this.server.use(middleware_authenticate());
        this.server.use(privateRouter);
    }
}

export default new App().server;