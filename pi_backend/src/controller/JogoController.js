import Jogo from "../models/tb_jogo";

class JogoController {
    async store(request, response) {
        if (!request.body.nome) {
            return response.status(400).send({
                message: "Nome não pode estar vazio",
            });
        }

        const { nome, preco, quantidade, descricao, espaco_arm, genero, status } =
        request.body;

        console.log(request.file);

        const newJogo = {
            nome,
            preco,
            quantidade,
            descricao,
            espaco_arm,
            genero,
            status: status ? status : false,
            imageUrl: request.file.filename,
        };

        await Jogo.create(newJogo)
            .then((data) => {
                return response.json(data);
            })
            .catch((err) => {
                return response.status(500).send({
                    message: err.message || "Erro interno ao criar jogo",
                });
            });
    }

    async update(request, response) {
        const id = request.params.id;

        await Jogo.update(request.body, {
                where: { id: id },
            })
            .then((num) => {
                if (num == 1) {
                    return response.send({
                        message: "Jogo atualizado",
                    });
                } else {
                    return response.send({
                        message: `Não foi possível atualizar o jogo id: ${id}`,
                    });
                }
            })
            .catch((err) => {
                return response.status(550).send({
                    message: `Erro interno ao atualizar o jogo de id: ${id} `,
                });
            });
    }

    async findAll(request, response) {
        Jogo.findAll()
            .then((data) => {
                response.send(data);
            })
            .catch((err) => {
                response.status(500).send({
                    message: err.message || "Erro interno ao buscar jogo",
                });
            });
    }

    async findByPk(request, responseponse) {
        if (!request.params.id) {
            return responseponse
                .status(400)
                .json({ message: "Campo id não pode estar vazio." });
        } else {
            Jogo.findByPk(request.params.id)
                .then((data) =>
                    data !== null ?
                    responseponse.status(200).json(data) :
                    responseponse.json({
                        message: `Jogo de id ${request.params.id} não encontrado.`,
                    })
                )
                .catch((error) =>
                    responseponse.status(500).json({
                        message: error.message || `Erro interno ao buscar jogo de id: ${id}`,
                    })
                );
        }
    }

    async findAllEnable(request, responseponse) {
        Jogo.findAll({ where: { status: true } })
            .then((data) => responseponse.status(200).json(data))
            .catch((error) =>
                responseponse.status(500).json({
                    message: error.message || "Erro interno ao listar jogos ativos.",
                })
            );
    }

    async disableAll(request, responseponse) {
        Jogo.update({ status: false }, { where: {} })
            .then((data) =>
                responseponse.status(200).json({ message: "Jogos excluidos." })
            )
            .catch((error) =>
                responseponse.status(500).json({
                    message: error.message || "Erro interno ao excluir jogos.",
                })
            );
    }

    async disableByPk(request, response) {
        Jogo.update({ status: false }, { where: { id: request.params.id } })
            .then((data) =>
                responseponse.status(200).json({ message: "Jogos excluidos." })
            )
            .catch((error) =>
                responseponse.status(500).json({
                    message: error.message || "Erro interno ao excluir jogos.",
                })
            );
    }

    async findAllPaidOut(request, response) {
        const userId = request.userId;

        Jogo.sequelize
            .query(
                `select tu.id, tu.nome username, tj.nome jogo, tj.genero, tj.preco, tp.status from tb_pagamento tp
        inner join tb_jogo tj on tp.cod_jogo = tj.id
        inner join tb_usuario tu on tp.cod_usuario = tu.id
        where tp.status = 1 and tu.id = ${userId};`
            )
            .then((data) => response.status(200).json(data))
            .catch((error) =>
                response
                .status(500)
                .json({
                    message: error.message ||
                        `Erro interno na listagem dos jogos pagos pelo usuário de id ${userId}`,
                })
            );
    }
}

export default new JogoController();