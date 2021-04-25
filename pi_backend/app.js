const express = require("express");
const cors = require("cors");
const { sequelize } = require("./connection");
const { user_router } = require("./routes/users.routes");
const { jogo_router } = require("./routes/jogos.routes");
const { tipo_pagamento_router } = require("./routes/tipo_pagamento.routes");
const { pagamento_router } = require("./routes/pagamentos.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(user_router);
app.use(tipo_pagamento_router);
app.use(jogo_router);
app.use(pagamento_router)
sequelize.sync();

module.exports = { app: app };