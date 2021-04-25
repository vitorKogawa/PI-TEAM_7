const { Sequelize } = require("sequelize");
const { development, production, test } = require("./config/database.config");

const sequelize = new Sequelize(
    development.database,
    development.username,
    development.password, {
        host: development.host,
        dialect: development.dialect,
    }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./models/tb_usuario")(sequelize, Sequelize);
db.Pagamento = require("./models/tb_pagamento")(sequelize, Sequelize);
db.TipoPagamento = require("./models/tb_tipo_pagamento")(sequelize, Sequelize);
db.Jogo = require("./models/tb_jogo")(sequelize, Sequelize);

db.Pagamento.belongsTo(db.User, { foreignKey: "cod_usuario" });
db.Pagamento.belongsTo(db.Jogo, { foreignKey: "cod_jogo" });
db.Pagamento.belongsTo(db.TipoPagamento, { foreignKey: "cod_tipo_pagamento" });

module.exports = db;