const {Pagamento} = require("../connection");
const dbConfig = require("../connection");

const Pagamento = dbConfig.Pagamento;

const update = (request, response) => {

}

const findAllByUserPk = (request, response) => {
    const user_id = request.body.user_id;

    if(!(user_id != null && user_id != undefined)){
        return response.status(400).json({error: `erro ao buscar pelo id de usuario ${user_id}`})
    } 
    else {
        Pagamento.findAll({where:{cod_usuario: user_id}})
        .then((data) => {
            response.json(data)
        })
        .catch((err) => {
            response.status(500).json({error: err.message || "erro na leitura de pagamentos"})
        })
    }
}



module.exports = {

}