module.exports = app => {
    const jogos = require ("../controllers/jogo.controller");

    var router = require ("express").Router();

     //Criar jogos
    router.post("/", jogos.create);

    //Listar todos os jogos
    router.get("/", jogos.findAll);

     //Atualizar jogo por id
    router.put("/:id", jogos.updateOne);

    //Buscar jogo por id
    router.get("/:id", jogos.findProdutoById);

    //Deletar jogo por id
    router.delete("/:id", jogos.deleteProduto);

    // Deletar todos os jogos
    router.delete("/", jogos.deleteAll);

    app.use('/api/jogos', routes)
}