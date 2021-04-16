module.exports = (sequelize, DataTypes) => {
  const tb_tipo_pagamento = sequelize.define('tb_tipo_pagamento', {
    id_tipo_pagamento: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, { freezeTableName: true });
  return tb_tipo_pagamento;
};