import Pagamento from "../models/tb_pagamento";
class PagamentoController {
    async create(request, response) {
        const { status, cod_usuario, cod_jogo, cod_tipo_pagamento } = request.body;
        const newPagamento = {
            status: status ? status : false,
            cod_usuario,
            cod_jogo,
            cod_tipo_pagamento,
        };

        await Pagamento.create(newPagamento)
            .then((data) => {
                return response.send(data);
            })
            .catch((err) => {
                return response.status(500).send({
                    message: err.message || "Erro interno ao criar pagamento",
                });
            });
    }

    async findAll(request, response) {
        await Pagamento.findAll({
                attributes: [
                    "id",
                    "cod_usuario",
                    "cod_jogo",
                    "cod_tipo_pagamento",
                    "status",
                    "createdAt",
                ],
            })
            .then((data) => response.status(200).json(data))
            .catch((err) => {
                response
                    .status(500)
                    .json({ error: err.message || "erro na leitura de pagamentos" });
            });
    }

    async findByPk(request, response) {
        if (!request.params.id) {
            return response
                .status(400)
                .json({ message: "Campo id não pode estar vazio." });
        } else {
            await Pagamento.findByPk(request.params.id)
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
    }

    async deleteByPk(request, response) {
        const { id } = request.params;
        await Pagamento.destroy({ where: { id } })
            .then((data) =>
                response
                .status(200)
                .json({ message: `Pagamento do id ${id} removido.` })
            )
            .catch((error) =>
                response.status(500).json({
                    message: error.message || `Erro interno ao remover pagamento do id ${id}`,
                })
            );
    }

    async findAllByUserPk(request, response) {
        const user_id = request.params.id;

        if (!(user_id != null && user_id != undefined)) {
            return response
                .status(400)
                .json({ error: `erro ao buscar pelo id de usuario ${user_id}` });
        } else {
            await Pagamento.findAll({ where: { cod_usuario: user_id }, attributes: ["cod_jogo"] })
                .then((data) => {
                    response.json(data);
                })
                .catch((err) => {
                    response
                        .status(500)
                        .json({ error: err.message || "erro na leitura de pagamentos" });
                });
        }
    }
}

export default new PagamentoController();