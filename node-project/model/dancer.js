const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const { User } = require("./user");

class Dancer extends Model {}
Dancer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    description:DataTypes.STRING,
    picUrl:DataTypes.STRING,
  },
  {
    modelName: "dancer",
    sequelize,
  }
);
Dancer.belongsTo(User);
User.hasMany(Dancer);
Dancer.sync();

module.exports = { Dancer };
