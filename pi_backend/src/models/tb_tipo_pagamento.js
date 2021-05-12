import { Sequelize, Model } from "sequelize";

class TipoPagamento extends Model {
    static init(sequelize) {
        super.init({
            descricao: Sequelize.STRING,
        }, { sequelize, tableName: "tb_tipo_pagamento", freezeTableName: true });
        return this;
    }

    static associate(models) {
        TipoPagamento.hasMany(models.Pagamento);
    }
}

export default TipoPagamento;