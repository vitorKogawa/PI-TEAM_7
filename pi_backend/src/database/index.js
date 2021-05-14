const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database.config");
import User from "../models/tb_usuario";
import Jogo from "../models/tb_jogo";
import TipoPagamento from "../models/tb_tipo_pagamento";
import Pagamento from "../models/tb_pagamento";
import Favoritos from '../models/tb_favoritos'

const models = [User, Jogo, TipoPagamento, Pagamento, Favoritos];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(dbConfig);
        models.map((model) => model.init(this.connection));
        models.map((model) => {
            model.associate && model.associate(this.connection.models);
        });
    }
}

export default new Database();