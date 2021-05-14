import { Model, Sequelize } from "sequelize";

class Favoritos extends Model {
    static init(sequelize) {
        super.init({}, { sequelize, tableName: "tb_favoritos" });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: "cod_usuario" });
        this.belongsTo(models.Jogo, { foreignKey: "cod_jogo" });
    }
}

export default Favoritos;