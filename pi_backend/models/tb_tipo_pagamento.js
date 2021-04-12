module.exports = (sequelize, DataTypes) => {
  const tb_tipo_pagamento = sequelize.define('tb_tipo_pagamento', {
    id_tipo_pagamento: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {});
  //UM  tipo de pagamento pode estar associado e VÁRIOS pagamento.
  tb_tipo_pagamento.associate = function(models){}
  return tb_tipo_pagamento;
};