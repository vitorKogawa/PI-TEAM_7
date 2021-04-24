import { Sequelize, Model } from "sequelize";

class Pagamento extends Model {
  static init(sequelize) {
    super.init(
      {
        id: Sequelize.INTERGER,
      },
      { sequelize, tableName: "tb_pagamento" }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Jogo, { foreignKey: "cod_jogo" });
    this.belongsTo(models.User, { foreignKey: "cod_usuario" });
    this.belongsTo(models.TipoPagamento, { foreignKey: "cod_tipo_pagamento" });
  }
}

export default Pagamento;
