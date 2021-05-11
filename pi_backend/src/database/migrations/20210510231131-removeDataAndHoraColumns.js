"use strict";

module.exports = {
    up: async(queryInterface, Sequelize) => {
        queryInterface.removeColumn("tb_pagamento", "data_pagamento");
        queryInterface.removeColumn("tb_pagamento", "hora_pagamento");
        return queryInterface;
    },

    down: async(queryInterface, Sequelize) => {
        queryInterface.addColumn("tb_pagamento", "data_pagamento", {
            type: Sequelize.DATE,
        });
        queryInterface.addColumn("tb_pagamento", "hora_pagamento", {
            type: Sequelize.DATE,
        });

        return queryInterface;
    },
};