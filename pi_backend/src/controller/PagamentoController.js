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
        await Pagamento.sequelize
            .query(
                "select p.id, u.nome as username, j.nome as game, j.preco, tp.descricao , p.status, p.createdAt from tb_pagamento as p inner join tb_usuario as u on p.cod_usuario  = u.id inner join tb_jogo as j on p.cod_jogo = j.id inner join tb_tipo_pagamento as tp on p.cod_tipo_pagamento = tp.id order by p.id asc;"
            )
            .then((data) => response.json(data))
            .catch((error) => response.json({ message: error.message }));
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
        if (!request.params.id) {
            return response
                .status(400)
                .json({ error: `Campo id não pode estar vazio` });
        } else {
            const { id } = request.params;
            Pagamento.sequelize
                .query(
                    `select p.id, u.nome as username, j.imageUrl, j.nome as game, j.preco, tp.descricao , p.status, p.createdAt from tb_pagamento as p inner join tb_usuario as u on p.cod_usuario  = u.id inner join tb_jogo as j on p.cod_jogo = j.id inner join tb_tipo_pagamento as tp on p.cod_tipo_pagamento = tp.id  where p.cod_usuario = ${id} order by p.id asc;`
                )
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

    async aprovarPagamento(request, response) {
        if (!request.params.id) {
            return response
                .status(400)
                .json({ error: `Campo id não pode estar vazio` });
        } else {
            const { id } = request.params;
            Pagamento.update({ status: true }, { where: { id } })
                .then(data => response.sendStatus(200))
                .catch(error => response.status(500).json({ message: error.message || `Erro interno ao aprovar pagamento de id ${id}` }))
        }
    }
}

export default new PagamentoController();