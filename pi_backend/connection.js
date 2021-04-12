const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pi', 'robertov', 'basket4433', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {}

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
