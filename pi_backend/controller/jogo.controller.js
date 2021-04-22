const dbConfig = require("../connection");

const Jogo = dbConfig.jogo;

exports.create = (req, res) => {
    if (!req.body.nome) { 
        res.status(400).send({
            message: "Nome não pode estar vazio"
        })
        return;
    }
    const jogo = {
        id_jogo: req.body.id_jogo,
        nome: req.body.nome,
        preco: req.body.preco,
        quantidade: req.body.quantidade,
        descricao: req.body.descricao,
        espaco_arm: req.body.espaco_arm,
        genero: req.body.genero
    }
    Jogo.create(jogo)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        rest.status(500).send({
            message: err.message || "Erro interno ao criar jogo"
        });
    });
};

exports.update = (req,res) => {
    const id = req.params.id;

    Jogo.update(req.body, {
        where: {id : id}
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Jogo atualizado"
            });
        } else {
            res.send({
                message: `Não foi possível atualizar o jogo id: ${id}`
            })
        }
    })
    .catch(err => {
        res.status(550).send({
            message: `Erro interno ao atualizar o jogo de id: ${id} `
        })
    })
}

exports.findAll = (req,res) => {
    Jogo.findAll()
    .then((data) => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Erro interno ao buscar jogo"
        });
    });
};

const deleteAll = (request, response) => {
    Jogo.destroy({ where: {}, truncate: true, force: true })
      .then((data) =>
        response.status(200).json({ message: "Jogos excluidos." })
      )
      .catch((error) =>
        response.status(500).json({
          message: error.message || "Erro interno ao excluir jogos.",
        })
      );
  };

  const findByPk = (request, response) => {
    if (!request.params.id) {
      return response
        .status(400)
        .json({ message: "Campo id não pode estar vazio." });
    } else {
      Jogo.findByPk(request.params.id)
        .then((data) =>
          data !== null
            ? response.status(200).json(data)
            : response.json({
                message: `Jogo de id ${request.params.id} não encontrado.`,
              })
        )
        .catch((error) =>
          response.status(500).json({
            message:
              error.message || `Erro interno ao buscar jogo de id: ${id}`,
          })
        );
    }
  };

  const findAllEnable = (request, response) => {
    Jogo.findAll({ where: { ativo: true } })
      .then((data) => response.status(200).json(data))
      .catch((error) =>
        response.status(500).json({
          message: error.message || "Erro interno ao listar jogos ativos.",
        })
      );
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