const express = require('express');
const cors = require('cors');
const { sequelize } = require('./connection')

const app = express();
app.use(cors());
app.use(express.json());
sequelize.sync();

module.exports = { app: app };
