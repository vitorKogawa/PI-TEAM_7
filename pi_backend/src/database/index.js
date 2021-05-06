const { Sequelize } = require("sequelize");
const dbConfig = require("../config/database.config");
import User from "../models/tb_usuario";
// import TipoPagamento from "../models/tb_tipo_pagamento";
// import Jogo from "../models/tb_jogo";

const models = [ User ];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dbConfig);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
