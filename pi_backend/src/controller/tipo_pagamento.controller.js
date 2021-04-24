const { TipoPagamento } = require("../connection");
const dbConfig = require("../connection");

const tipoPagamento = dbConfig.TipoPagamento;

const create = (request, response) => {
    const tipo_p = {
        descricao: request.body.descricao
    }

    if(!request.body.descricao){
        response.status(400).send({message: "Descrição não pode ser vazio"});
    } else {
        tipoPagamento.create(tipo_p)
        .then((data) => {
            response.send(data);
        })
        .catch((err) => {
            response.status(500).send({message: err.message || "Erro ao cadastrar tipo de pagamento"});
        })
    }
};

const findAll = (request, response) => {
    tipoPagamento.findAll()
    .then((data) => {
        response.send(data);
    })
    .catch((err) => {
        response.status(500).send({message: err.message || "Erro de leitura das tabelas de tipo pagamento"});
    })
};

const deleteByPk = (request, response) => {
    const id = request.params.id;
    tipoPagamento.destroy({where: {id: id}})
    .then((num) => {
        if(num == 1){
            response.send({message: "Tipo pagameno deletado com sucesso"});
        } else {
            response.send({message: `Erro ao deletar o id:${id}`});
        }
    })
    .catch((err) => {
        response.status(500).send({message: "Erro ao deletar tipo pagamento"});
    })
};

const update = (request, response) => {
    const id = request.params.id;

    const tipo_p = {
        descricao: request.body.descricao
    } 

    if(!request.body.descricao)
    {
        response.send({message: "Descrição não pode ser vazio"})
    } else {
        tipoPagamento.update(tipo_p, {where: {id: id}})
        .then((data) => {
            response.send({message: "Tipo pagamento atualizado com sucesso"})
        })
    }

};


module.exports = {
    create,
    findAll,
    deleteByPk,
    update
};