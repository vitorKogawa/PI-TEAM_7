const express = require('express');
const { app } = require('./app')
require('./config/env')

const server = express();
server.use(express.json())
server.use(app);
const port = process.env.PORT || 3333;

server.listen(port, () => console.log(`Servidor rodando em http://127.0.0.1:${port}`))
