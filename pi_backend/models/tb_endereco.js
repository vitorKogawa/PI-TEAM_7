module.exports = (sequelize, DataTypes) => {
  const tb_endereco = sequelize.define('tb_endereco', {
    id_endereco: DataTypes.INTEGER,
    cod_usuario: DataTypes.INTEGER,
    logradouro: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING,
    cep: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING
  }, {});

  //UM endereço pode estar associado a UM único usuário
  tb_endereco.associate = function(models){
   
  }
  return tb_endereco;
};