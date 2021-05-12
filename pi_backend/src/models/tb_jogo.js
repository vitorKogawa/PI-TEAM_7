import { Sequelize, Model } from "sequelize";

class Jogo extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            preco: Sequelize.DOUBLE,
            descricao: Sequelize.STRING,
            espaco_arm: Sequelize.DOUBLE,
            genero: Sequelize.STRING,
            status: Sequelize.BOOLEAN,
            imageUrl: Sequelize.STRING,
        }, { sequelize, tableName: "tb_jogo" });
    }

    static associate(models) {
        Jogo.hasMany(models.Pagamento);
    }
}

export default Jogo;