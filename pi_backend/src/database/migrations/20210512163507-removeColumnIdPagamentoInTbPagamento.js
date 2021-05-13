'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => queryInterface.removeColumn('tb_pagamento', 'id_pagamento'),
    down: async(queryInterface, Sequelize) => queryInterface.addColumn('tb_pagamento', 'id_pagamento', { type: Sequelize.INTEGER })
};