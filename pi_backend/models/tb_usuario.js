module.exports = (sequelize, DataTypes) => {
  const tb_usuario = sequelize.define('tb_usuario', {
    id_usuario: DataTypes.INTEGER,
    usuario: DataTypes.STRING,
    senha: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    status_adm: DataTypes.BOOLEAN,
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  //UM usuário pode estar associado a VÁRIOS pagamentos
  //UM usuário pode estar associado a VÁRIOS endereços
  //UM usuário pode estar associado a VÁRIOS celulares
  tb_usuario.associate = function(models){}
  return tb_usuario;
};