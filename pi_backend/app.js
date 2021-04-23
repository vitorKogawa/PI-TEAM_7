const express = require("express");
const { user_router } = require("./routes/users.routes");
const { tipo_pagamento_router } = require("./routes/tipo_pagamento.routes");
const cors = require("cors");
const { sequelize } = require("./connection");

const app = express();
app.use(cors());
app.use(express.json());
app.use(user_router);
app.use(tipo_pagamento_router);
sequelize.sync();

module.exports = { app: app };
