'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => queryInterface.removeColumn('tb_jogo', 'quantidade'),
    down: async(queryInterface, Sequelize) => queryInterface.addColumn('tb_jogo', 'quantidade', { type: Sequelize.INTEGER(11), allowNull: false }),
};