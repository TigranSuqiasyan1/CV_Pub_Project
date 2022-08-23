const { Model, DataTypes } = require("sequelize");
const { sequelize } = require(".");
const { Category } = require("./category");
const { User } = require("./user");

class Product extends Model {}
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    picUrl:DataTypes.STRING,
    price:DataTypes.STRING,
    description:DataTypes.STRING,
    bool:DataTypes.DOUBLE
  },
  {
    modelName: "product",
    sequelize,
  }
);

Product.belongsTo(User,{onDelete:"CASCADE", onUpdate:"CASCADE"} );
User.hasMany(Product);

Product.belongsTo(Category, {onDelete:"CASCADE", onUpdate:"CASCADE"});
Category.hasMany(Product);
Product.sync();

module.exports = { Product };