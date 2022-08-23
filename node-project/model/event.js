const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./index");
const { User } = require("./user");

class Event extends Model {}
Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name:DataTypes.STRING,
    description:DataTypes.STRING,
    date:DataTypes.DATE,
    picUrl:DataTypes.STRING,
    bool:DataTypes.DOUBLE,
    price:DataTypes.DOUBLE,
  },{
    modelName: "event",
    sequelize,
  }
);

Event.belongsTo(User);
User.hasMany(Event);
Event.sync();

module.exports = { Event };