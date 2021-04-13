const express = require('express');
const { user_router } = require('./routes/users.routes')
const cors = require('cors');
const { sequelize } = require('./connection')

const app = express();
app.use(cors());
app.use(express.json());
app.use(user_router);
sequelize.sync();

module.exports = { app: app };
