import TipoPagamento from '../models/tb_tipo_pagamento';

class TipoPagamentoController{
    async create(request, response) {
        const tipo_p = {
            descricao: request.body.descricao
        }
    
        if(!request.body.descricao){
            response.status(400).json({message: "Descrição não pode ser vazio"});
        } else {
            console.log(tipo_p)
            await TipoPagamento.create(tipo_p)
            .then((data) => {
                return response.json(data);
            })
            .catch((err) => {
                return response.status(500).json({message: err.message || "Erro ao cadastrar tipo de pagamento"});
            })
        }
    }

    async findAll(request, response) {
        console.log("chegou")
        await TipoPagamento.findAll()
        .then((data) => {
            return response.json(data);
        })
        .catch((err) => {
            return response.status(500).json({message: err.message || "Erro de leitura das tabelas de tipo pagamento"});
        })
    }

    async deleteByPk(request, response) {
        const id = request.params.id;
        TipoPagamento.destroy({where: {id: id}})
        .then((num) => {
            if(num == 1){
                return response.json({message: "Tipo pagameno deletado com sucesso"});
            } else {
                return response.json({message: `Erro ao deletar o id:${id}`});
            }
        })
        .catch((err) => {
             return response.status(500).send({message: "Erro ao deletar tipo pagamento"});
        })
    }

    async update(request, response) {
        const id = request.params.id;

        const tipo_p = {
            descricao: request.body.descricao
        } 
    
        if(!request.body.descricao)
        {
            return response.json({message: "Descrição não pode ser vazio"})
        } else {
            TipoPagamento.update(tipo_p, {where: {id: id}})
            .then((data) => {
                return response.json({message: "Tipo pagamento atualizado com sucesso"})
            })
        }
    }
}

export default new TipoPagamentoController();