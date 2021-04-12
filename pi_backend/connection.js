const { Sequelize } = require('sequelize');
const { development, production, test } = require('./config/database.config')

const sequelize = new Sequelize(development.database, development.username, development.password, {
    host: development.host,
    dialect: development.dialect
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./models/tb_usuario')(sequelize, Sequelize);
db.Endereco = require('./models/tb_endereco')(sequelize, Sequelize);
db.Pagamento = require('./models/tb_pagamento')(sequelize, Sequelize);
db.TipoPagamento = require('./models/tb_tipo_pagamento')(sequelize, Sequelize);
db.Celular = require('./models/tb_celular')(sequelize, Sequelize);
db.Genero = require('./models/tb_genero')(sequelize, Sequelize);
db.Jogo = require('./models/tb_jogo')(sequelize, Sequelize);


module.exports = db;
