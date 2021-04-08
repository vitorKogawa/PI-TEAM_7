const { Sequelize } = require("sequelize");
const {
  host,
  database,
  dialect,
  password,
  pool,
  username,
} = require("../config/database.config");

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  pool,
});

const db = {}

db.sequelize = sequelize,
db.Sequelize = Sequelize
db.User = require('./models/User')(sequelize, Sequelize)

module.exports = db;
