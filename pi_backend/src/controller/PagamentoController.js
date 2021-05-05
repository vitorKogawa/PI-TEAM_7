import Pagamento from '../models/tb_pagamento';
import { Op } from "sequelize"

class PagamentoController{
    async create(request, response){
        const {
            data_pagamento,
            hora_pagamento,
            cod_tipo_pagamento,
            cod_usuario
        } = request.body;
        const newPagamento = {
            data_pagamento,
            hora_pagamento,
            cod_tipo_pagamento,
            cod_usuario
        }
        if (!request.body.data_pagamento){
            return response
            .status(400)
            .json ({message: "A data não pode estar vazia"});
        }

        await Pagamento.create(newPagamento)
        .then((data) => {
            return response.send(data);
        })
        .catch((err) => {
            return response.status(500).send({
                message: err.message || "Erro interno ao criar pagamento",
            });
        });
    };
}

export default new PagamentoController();
