const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const { User } = require("./user");

class Category extends Model {}
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    picUrl: DataTypes.STRING,
  },
  {
    modelName: "category",
    sequelize,
  }
);
Category.belongsTo(User);
User.hasMany(Category);
Category.sync();

module.exports = { Category };
