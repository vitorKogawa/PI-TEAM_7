'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => queryInterface.removeColumn('tb_pagamento', 'hora_pagamento'),
    down: async(queryInterface, Sequelize) => queryInterface.addColumn('tb_pagamento', 'hora_pagamento', { type: Sequelize.TIME })
};