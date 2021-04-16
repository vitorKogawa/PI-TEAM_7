module.exports = (sequelize, DataTypes) => {
  const tb_jogo = sequelize.define('tb_jogo', {
    id_jogo: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    preco: DataTypes.DOUBLE,  
    quantidade: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    espaco_arm: DataTypes.DOUBLE,
    genero: DataTypes.STRING
  }, { freezeTableName: true });
  return tb_jogo;
};