"use strict";

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.removeColumn("tb_pagamento", "data_pagamento");
    },

    down: async(queryInterface, Sequelize) => {
        queryInterface.addColumn("tb_pagamento", "data_pagamento", {
            type: Sequelize.DATE,
        });

        return queryInterface;
    },
};