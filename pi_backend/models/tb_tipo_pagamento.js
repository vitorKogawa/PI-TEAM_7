module.exports = (sequelize, DataTypes) => {
  const tb_tipo_pagamento = sequelize.define(
    "tb_tipo_pagamento",
    {
      descricao: DataTypes.STRING,
    },
    { freezeTableName: true }
  );
  return tb_tipo_pagamento;
};
