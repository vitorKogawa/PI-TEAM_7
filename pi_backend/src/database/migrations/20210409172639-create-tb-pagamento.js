"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tb_pagamentos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_pagamento: {
        type: Sequelize.INTEGER,
      },
      data_pagamento: {
        type: Sequelize.DATE,
      },
      hora_pagamento: {
        type: Sequelize.TIME,
      },
      cod_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: "tb_usuario",
          key: "id",
        },
      },
      cod_jogo: {
        type: Sequelize.INTEGER,
        references: {
          model: "tb_jogo",
          key: "id",
        },
      },
      cod_tipo_pagamento: {
        type: Sequelize.INTEGER,
        references: {
          model: "tb_tipo_pagamento",
          key: "id",
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tb_pagamentos");
  },
};
