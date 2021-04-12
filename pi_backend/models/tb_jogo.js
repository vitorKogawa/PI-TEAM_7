module.exports = (sequelize, DataTypes) => {
  const tb_jogo = sequelize.define('tb_jogo', {
    id_jogo: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    preco: DataTypes.DOUBLE,  
    quantidade: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    espaco_arm: DataTypes.DOUBLE,
    cod_genero: DataTypes.INTEGER
  }, {});

  //para este projeto um jogo vai pertencer somente a UM genêro. 1:1
  tb_jogo.associate = function(models){
    tb_jogo.belongsTo(models.tb_genero, { foreignKey: 'cod_genero', as: 'genero' });
  };
  return tb_jogo;
};