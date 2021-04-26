const { response, request } = require("express");
const dbConfig = require("../connection");

const pagamento = dbConfig.Pagamento;

const create = (request, response) => {
    console.log(request.body)
    if (!request.body.data_pagamento) {
        response.status(400).send({
            message: "A data não pode estar vazia",
        });
        return;
    }
    const pagamentos = {
        data_pagamento: request.body.data_pagamento,
        hora_pagamento: request.body.hora_pagamento,
        cod_tipo_pagamento: request.body.cod_tipo_pagamento,
        cod_usuario: request.body.cod_usuario
    };

    pagamento.create(pagamentos)
        .then((data) => {
            response.send(data);
        })
        .catch((err) => {
            response.status(500).send({
                message: err.message || "Erro interno ao criar pagamento",
            });
        });
};


const findByPk = (request, response) => {
    if (!request.params.id) {
        return response
            .status(400)
            .json({ message: "Campo id não pode estar vazio." });
    } else {
        pagamento.findByPk(request.params.id)
            .then((data) =>
                data !== null ?
                response.status(200).json(data) :
                response.json({
                    message: `Pagamento do id ${request.params.id} não encontrado.`,
                })
            )
            .catch((error) =>
                response.status(500).json({
                    message: error.message || `Erro interno ao buscar pagamento do id: ${id}`,
                })
            );
    }
};


const update = (request, response) => {

}

const findAll = (request, response) => {
    pagamento.findAll()
    .then((data) => {
        return response.json(data);
    })
    .catch((err) => {
        response.status(500).json({ error: err.message || "erro na leitura de pagamentos" })
    })
}

const findAllByUserPk = (request, response) => {
    const user_id = request.params.id;

    if (!(user_id != null && user_id != undefined)) {
        return response.status(400).json({ error: `erro ao buscar pelo id de usuario ${user_id}` })
    } else {
        pagamento.findAll({ where: { cod_usuario: user_id } })
            .then((data) => {
                response.json(data)
            })
            .catch((err) => {
                response.status(500).json({ error: err.message || "erro na leitura de pagamentos" })
            })
    }
}


const deleteByPk = (request, response) => {
    const { id } = request.params;
    pagamento.destroy({ where: { id } })
        .then((data) =>
            response.status(200).json({ message: `Pagamento do id ${id} removido.` })
        )
        .catch((error) =>
            response.status(500).json({
                message: error.message || `Erro interno ao remover pagamento do id ${id}`,
            })
        );
};


module.exports = {
    create,
    update,
    findByPk,
    findAllByUserPk,
    deleteByPk,
    findAll

}