module.exports = (sequelize, DataTypes) => {
  const tb_celular = sequelize.define('tb_celular', {
    cod_usuario: DataTypes.INTEGER,
    numero: DataTypes.INTEGER
  }, {});
  
  //UM celular pode estar associado a UM usuário
  tb_celular.associate = function(models) {
    
  }
  return tb_celular;
};