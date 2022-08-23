const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone:DataTypes.STRING,
    picUrl:{
      type:DataTypes.STRING,
      defaultValue:'1.png'
    },
    type: DataTypes.INTEGER,
  },
  {
    modelName: "user",
    sequelize,
  }
);

User.sync();

module.exports = { User };
