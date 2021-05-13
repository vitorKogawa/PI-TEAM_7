import { Sequelize, Model } from "sequelize";

class Pagamento extends Model {
    static init(sequelize) {
        super.init({
            status: Sequelize.BOOLEAN,
            cod_usuario: Sequelize.INTEGER,
            cod_jogo: Sequelize.INTEGER,
            cod_tipo_pagamento: Sequelize.INTEGER
        }, { sequelize, tableName: "tb_pagamento" });
        return this;
    }

    static associate(models) {
        Pagamento.belongsTo(models.User, { foreignKey: "cod_usuario" });
        Pagamento.hasOne(models.Jogo, { foreignKey: "cod_jogo" });
        Pagamento.hasOne(models.TipoPagamento, { foreignKey: "cod_tipo_pagamento" });
    }
}

export default Pagamento;