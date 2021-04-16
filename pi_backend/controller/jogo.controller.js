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

    Tutorial.update(req.body, {
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