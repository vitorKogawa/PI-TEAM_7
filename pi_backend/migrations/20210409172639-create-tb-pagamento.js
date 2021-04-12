'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_pagamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_pagamento: {
        type: Sequelize.INTEGER
      },
      data_pagamento: {
        type: Sequelize.DATE
      },
      hora_pagamento: {
        type: Sequelize.TIME
      },
      cod_usuario: {
        type: Sequelize.INTEGER
      },
      cod_jogo: {
        type: Sequelize.INTEGER
      },
      cod_tipo_pagamento: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tb_pagamentos');
  }
};