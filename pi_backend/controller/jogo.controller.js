const dbConfig = require("../connection");
const Jogo = dbConfig.Jogo;

const create = (request, response) => {
  if (!request.body.nome) {
    response.status(400).send({
      message: "Nome não pode estar vazio",
    });
    return;
  }
  const jogo = {
    id_jogo: request.body.id_jogo,
    nome: request.body.nome,
    preco: request.body.preco,
    quantidade: request.body.quantidade,
    descricao: request.body.descricao,
    espaco_arm: request.body.espaco_arm,
    genero: request.body.genero,
    status: request.body.status ? request.body.status : false 
  };
  Jogo.create(jogo)
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.status(500).send({
        message: err.message || "Erro interno ao criar jogo",
      });
    });
};

const update = (request, response) => {
  const id = request.params.id;

  Jogo.update(request.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        response.send({
          message: "Jogo atualizado",
        });
      } else {
        response.send({
          message: `Não foi possível atualizar o jogo id: ${id}`,
        });
      }
    })
    .catch((err) => {
      response.status(550).send({
        message: `Erro interno ao atualizar o jogo de id: ${id} `,
      });
    });
};

const findAll = (request, response) => {
  Jogo.findAll()
    .then((data) => {
      response.send(data);
    })
    .catch((err) => {
      response.status(500).send({
        message: err.message || "Erro interno ao buscar jogo",
      });
    });
};

const disableAll = (request, responseponse) => {
  Jogo.update({ status: false }, { where: {}})
    .then((data) =>
      responseponse.status(200).json({ message: "Jogos excluidos." })
    )
    .catch((error) =>
      responseponse.status(500).json({
        message: error.message || "Erro interno ao excluir jogos.",
      })
    );
};

const disableByPk = (request, responseponse) => {
  Jogo.update({ status: false }, { where: {}})
    .then((data) =>
      responseponse.status(200).json({ message: "Jogos excluidos." })
    )
    .catch((error) =>
      responseponse.status(500).json({
        message: error.message || "Erro interno ao excluir jogos.",
      })
    );
};

const findByPk = (request, responseponse) => {
  if (!request.params.id) {
    return responseponse
      .status(400)
      .json({ message: "Campo id não pode estar vazio." });
  } else {
    Jogo.findByPk(request.params.id)
      .then((data) =>
        data !== null
          ? responseponse.status(200).json(data)
          : responseponse.json({
              message: `Jogo de id ${request.params.id} não encontrado.`,
            })
      )
      .catch((error) =>
        responseponse.status(500).json({
          message: error.message || `Erro interno ao buscar jogo de id: ${id}`,
        })
      );
  }
};

const findAllEnable = (request, responseponse) => {
  Jogo.findAll({ where: { ativo: true } })
    .then((data) => responseponse.status(200).json(data))
    .catch((error) =>
      responseponse.status(500).json({
        message: error.message || "Erro interno ao listar jogos ativos.",
      })
    );
};

module.exports = {
  create,
  disableAll,
  disableByPk,
  update,
  findByPk,
  findAll,
  findAllEnable,
};
