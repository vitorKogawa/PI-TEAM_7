import User from "../models/tb_usuario";
import { Op } from "sequelize";

class UserController {
    async create(request, response) {
        const {
            usuario,
            senha,
            ativo,
            status_adm,
            nome,
            cpf,
            email,
        } = request.body;
        if (!email || !cpf) {
            return response
                .status(400)
                .json({ message: "Campo email e cpf não pode estar vazio!" });
        } else {
            const userExists = await User.findOne({
                    where: {
                        [Op.or]: [{ email }, { cpf }] },
                })
                .then((data) => (data ? true : false))
                .catch((error) => {
                    console.error(error.message);
                    return false;
                });

            if (!userExists) {
                const newUser = {
                    usuario,
                    senha,
                    ativo: ativo ? ativo : false,
                    status_adm: status_adm ? status_adm : false,
                    nome,
                    cpf,
                    email,
                };

                await User.create(newUser)
                    .then((data) => {
                        return response.status(200).json(data)
                    })
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
    }

    async disableAll(request, response) {
        await User.update({ status: false }, { where: {} })
            .then((data) =>
                response.status(200).json({ message: "Registros eliminados." })
            )
            .catch((error) =>
                response.status(500).json({
                    message: error.message || "Erro interno ao escluir registros.",
                })
            );
    }

    async disableByPk(request, response) {
        const { id } = request.params;
        await User.update({ ativo: false }, { where: { id } })
            .then((data) =>
                response.status(200).json({ message: `Usuário de id ${id} removido.` })
            )
            .catch((error) =>
                response.status(500).json({
                    message: error.message || `Erro interno ao remover usuário de id ${id}`,
                })
            );
    }

    async update(request, response) {
        const { email, oldPassword } = request.body;

        const user = await User.findByPk(request.userId);

        if (email && email !== user.email) {
            const userExists = await User.findOne({ where: { email } });
            if (userExists) {
                return response.status(400).json({ message: "Email já em uso." });
            }
        }

        if (oldPassword && !(await user.verifyPassword(oldPassword))) {
            return response.status(400).json({ message: "Senha inválida." });
        }

        const { id, nome, usuario, ativo, status_adm } = await user.update(request.body);
        return response.status(200).json({ id, nome, usuario, ativo, status_adm });
    }

    async findAll(request, response) {
        await User.findAll()
            .then((data) => response.status(200).json(data))
            .catch((error) =>
                response.status(500).json({
                    message: error.message || "Erro interno na listagem de usuários.",
                })
            );
    }

    async findByPk(request, response) {
        if (!request.params.id) {
            return response
                .status(400)
                .json({ message: "Campo id não pode estar vazio." });
        } else {
            await User.findByPk(request.params.id)
                .then((data) =>
                    data !== null ?
                    response.status(200).json(data) :
                    response.json({
                        message: `Usuário de id ${request.params.id} não encontrado.`,
                    })
                )
                .catch((error) =>
                    response.status(500).json({
                        message: error.message || `Erro interno ao buscar usuário de id: ${id}`,
                    })
                );
        }
    }

    async findAllEnable(request, response) {
        await User.findAll({ where: { ativo: true } })
            .then((data) => response.status(200).json(data))
            .catch((error) =>
                response.status(500).json({
                    message: error.message || "Erro interno ao listar usuários ativos.",
                })
            );
    }
}

export default new UserController();