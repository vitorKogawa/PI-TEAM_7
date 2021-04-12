'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tb_enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_endereco: {
        type: Sequelize.INTEGER
      },
      cod_usuario: {
        type: Sequelize.INTEGER
      },
      logradouro: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.INTEGER
      },
      bairro: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('tb_enderecos');
  }
};