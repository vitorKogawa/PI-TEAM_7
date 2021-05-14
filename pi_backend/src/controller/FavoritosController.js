import Favoritos from "../models/tb_favoritos";

class FavoritosController {
    async create(request, response) {
        const { cod_usuario, cod_jogo } = request.body;

        const newFavorite = { cod_usuario, cod_jogo };

        Favoritos.create(newFavorite)
            .then((data) => response.status(200).json(data))
            .catch((error) =>
                response.status(500).json({
                    message: error.message || "Erro interno ao favoritar o jogo",
                })
            );
    }

    async delete(request, response) {
        if (!request.params.id) {
            return response
                .status(400)
                .json({ message: "O campo id não pode estar vazio" });
        }

        const { id } = request.params;

        Favoritos.sequelize
            .query(`DELETE from tb_favoritos WHERE id = ${id}`)
            .then((data) => response.status(200).json(data))
            .catch((error) =>
                response.status(500).json({
                    message: error.message || `Erro interno ao remover o jogo de id ${id}`,
                })
            );
    }

    async findAll(request, response) {
        if (!request.params.id) {
            return response
                .status(400)
                .json({ message: "O campo id não pode estar vazio" });
        }

        const { id } = request.params;

        Favoritos.sequelize
            .query(
                `select tf.id, tj.nome as jogo, tj.genero, tj.preco from tb_favoritos tf inner join tb_jogo tj on tf.cod_jogo = tj.id inner join tb_usuario tu on tf.cod_usuario = tu.id where tu.id = ${id};`
            )
            .then((data) => response.status(200).json(data))
            .catch((error) =>
                response.status(500).json({
                    message: error.message || `Erro interno ao listar os favoritos.`,
                })
            );
    }
}

export default new FavoritosController();