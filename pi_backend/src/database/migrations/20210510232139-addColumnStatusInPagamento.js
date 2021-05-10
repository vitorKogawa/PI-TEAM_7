"use strict";

module.exports = {
    up: async(queryInterface, Sequelize) =>
        queryInterface.addColumn("tb_pagamento", "status", {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }),
    down: async(queryInterface, Sequelize) =>
        queryInterface.removeColumn("tb_pagamento", "status"),
};