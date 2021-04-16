module.exports = (sequelize, DataTypes) => {
  const tb_pagamento = sequelize.define('tb_pagamento', {
    id_pagamento: DataTypes.INTEGER,
    data_pagamento: DataTypes.DATE,
    hora_pagamento: DataTypes.TIME,
    // cod_usuario: DataTypes.INTEGER,
    // cod_jogo: DataTypes.INTEGER,
    // cod_tipo_pagamento: DataTypes.INTEGER
  }, { freezeTableName: true });

  return tb_pagamento;
};