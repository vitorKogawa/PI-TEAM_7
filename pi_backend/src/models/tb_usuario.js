import { Sequelize, Model } from "sequelize";
import { hash, compare } from "bcryptjs";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        usuario: Sequelize.STRING,
        senha: Sequelize.VIRTUAL,
        senha_hash: Sequelize.STRING,
        ativo: Sequelize.BOOLEAN,
        status_adm: Sequelize.BOOLEAN,
        nome: Sequelize.STRING,
        cpf: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      { sequelize, tableName: "tb_usuario", freezeTableName: true }
    );

    this.beforeSave(this.name, async (user) => {
      if (user.senha) user.senha_hash = await hash(user.senha, 8);
    });

    this.beforeUpdate(this.name, async (user) => {
      if (user.senha) user.senha_hash = await hash(user.senha, 8);
    });

    return this;
  }

  verifyPassword = (password) => compare(password, this.senha_hash);
}

export default User;
