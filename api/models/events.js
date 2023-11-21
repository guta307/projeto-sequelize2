"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Events.belongsTo(models.People, { foreignKey: "hostId" });
      Events.hasMany(models.Sessions, { foreignKey: "eventId" });
    }
  }
  Events.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      location: DataTypes.STRING,
      initialDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      maxCapacity: DataTypes.INTEGER,
      hostId: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Events",
    }
  );
  return Events;
};
