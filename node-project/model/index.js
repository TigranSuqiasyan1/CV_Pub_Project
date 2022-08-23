const { Sequelize } = require("sequelize");
const { DB, USER, PASSWORD, PORT,  HOST } = require("../config/config");
const sequelize = new Sequelize(DB, USER, PASSWORD, {
  port: PORT,
  host: HOST,
  dialect: "mysql",
});



module.exports = {sequelize}