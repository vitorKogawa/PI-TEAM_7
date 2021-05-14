'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.createTable('tb_favoritos', {
            id: {
                type: Sequelize.INTEGER(11),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            cod_usuario: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'tb_usuario',
                    key: 'id'
                }
            },
            cod_jogo: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'tb_jogo',
                    key: 'id'
                }
            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE
        })
    },

    down: async(queryInterface, Sequelize) => queryInterface.dropTable('tb_favoritos')
};