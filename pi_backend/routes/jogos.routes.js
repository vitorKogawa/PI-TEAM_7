module.exports = app => {
    const jogos = require ("../controllers/jogo.controller");

    var router = require ("express").Router();

    //Cria novo tutorial
    router.post("/", jogos.create);
    //Retorna todos os tutoriais
    router.get("/", jogos.findAll);

    app.use('/api/jogos', routes)
}