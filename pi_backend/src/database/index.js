const { Sequelize } = require("sequelize");
const { developement } = require("../config/database.config");
import User from "../models/tb_usuario";
import Pagamento from "../models/tb_pagamento";
import TipoPagamento from "../models/tb_tipo_pagamento";
import Jogo from "../models/tb_jogo";

const models = [User, Pagamento, TipoPagamento, Jogo];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(developement);
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
