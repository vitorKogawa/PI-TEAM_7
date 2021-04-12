const express = require('express');
const { sequelize } = require('./connection')

const app = express();
app.use(express.json());
sequelize.sync();

module.exports = { app: app };
