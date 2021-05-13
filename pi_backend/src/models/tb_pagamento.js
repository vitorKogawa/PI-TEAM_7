import { Sequelize, Model } from "sequelize";

class Pagamento extends Model {
    static init(sequelize) {
        super.init({
            status: Sequelize.BOOLEAN
        }, { sequelize, tableName: "tb_pagamento" });
        return this;
    }

    static associate(models) {
        Pagamento.belongsTo(models.User, { foreignKey: "cod_usuario" });
        Pagamento.belongsTo(models.Jogo, { foreignKey: "cod_jogo" });
        Pagamento.belongsTo(models.TipoPagamento, { foreignKey: "cod_tipo_pagamento" });
    }
}

export default Pagamento;