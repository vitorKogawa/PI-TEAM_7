module.exports = (sequelize, DataTypes) => {
  const tb_genero = sequelize.define('tb_genero', {
    id_genero: DataTypes.INTEGER,
    descricao: DataTypes.STRING
  }, {});

  //UM genêro pode pertencer a VÁRIOS jogos diferentes: 1:N
  tb_genero.associate = function(models){
    tb_genero.hasMany(models.tb_jogo, { as: 'jogo' });
  }
  return tb_genero;
};