const { Router, json } = require("express");
const { sequelize } = require('./database/connection')
const cors = require("cors");

const app = Router();
app.use(json());
app.use(cors());

sequelize.sync({ force: true });

module.exports = { app: app };
