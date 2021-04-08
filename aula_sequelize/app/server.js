const express = require("express");
const { app } = require("./app");
require("./config/env");

const server = express();
server.use(app);
const port = process.env.PORT || 3000;

server.listen(port, () =>
  console.log(`Server listenning at http://127.0.0.1:${port}`)
);
