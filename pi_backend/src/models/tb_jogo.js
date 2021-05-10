import { Sequelize, Model } from "sequelize";

class Jogo extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        preco: Sequelize.DOUBLE,
        quantidade: Sequelize.INTEGER,
        descricao: Sequelize.STRING,
        espaco_arm: Sequelize.DOUBLE,
        genero: Sequelize.STRING,
        status: Sequelize.BOOLEAN,
      },
      { sequelize, tableName: "tb_jogo" }
    );
  }
}

export default Jogo;
