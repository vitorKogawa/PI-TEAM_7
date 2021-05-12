'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => queryInterface.addColumn('tb_jogo', 'imageUrl', { type: Sequelize.STRING(100), allowNull: false }),

    down: async(queryInterface, Sequelize) => queryInterface.removeColumn('tb_jogo', 'imageUrl')
};