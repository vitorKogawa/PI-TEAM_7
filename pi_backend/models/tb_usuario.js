module.exports = (sequelize, DataTypes) => {
  const tb_usuario = sequelize.define(
    "tb_usuario",
    {
      usuario: DataTypes.STRING,
      senha: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      status_adm: DataTypes.BOOLEAN,
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    { freezeTableName: true }
  );
  return tb_usuario;
};
