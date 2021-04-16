const dbConfig = require("../connection");
const { Op } = require("sequelize");

const Usuario = dbConfig.User;
const op = Op;

const create = (request, response) => {
  const { usuario, senha, ativo, status_adm, nome, cpf, email } = request.body;
  if (!email || !cpf) {
    return response
      .status(400)
      .json({ message: "Campo email e cpf não pode estar vazio!" });
  } else {
    const validation = userExists(email, cpf);
    if (validation) {
      const newUser = {
        usuario,
        senha,
        ativo: ativo ? ativo : false,
        status_adm: status_adm ? status_adm : false,
        nome,
        cpf,
        email,
      };

      Usuario.create(newUser)
        .then((data) => response.status(200).json(data))
        .catch((error) =>
          response.status(500).json({
            message: error.message || "Erro interno ao cadastrar novo usuário.",
          })
        );
    } else {
      return response
        .status(400)
        .json({ message: "Email e/ou cpf já estão em uso." });
    }
  }
};

const deleteAll = (request, response) => {};

const deleteByPk = (request, response) => {};

const update = (request, response) => {};

const findByPk = (request, response) => {};

const findAll = (request, response) => {
  Usuario.findAll()
  .then(data => response.status(200).json(data))
  .catch(error => response.status(500).json({ message: error.message || "Erro interno na listagem de usuários." }));
};

const findAllEnable = (request, response) => {};

const userExists = (email, cpf) => {
  const result = Usuario.findOne({
    where: {
      [Op.or]: [{ email }, { cpf }],
    },
  });

  if (result) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  create,
  deleteAll,
  deleteByPk,
  update,
  findByPk,
  findAll,
  findAllEnable,
};
