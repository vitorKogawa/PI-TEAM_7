module.exports = (sequelize, DataTypes) => {
  const tb_pagamento = sequelize.define('tb_pagamento', {
    id_pagamento: DataTypes.INTEGER,
    data_pagamento: DataTypes.DATE,
    hora_pagamento: DataTypes.TIME,
    // cod_usuario: DataTypes.INTEGER,
    // cod_jogo: DataTypes.INTEGER,
    // cod_tipo_pagamento: DataTypes.INTEGER
  }, {});

  //UM pagamento pertence a UM  usuário 1:1
  //UM pagamento está associado a VÁRIOS Jogos (Ex: em uma única compra o usuário pode comprar 2 ou mais jogos) 1:N
  //UM pagamento está associado a UM tipo de pagamento 1:1
  tb_pagamento.associate = function(models){

  }
  return tb_pagamento;
};