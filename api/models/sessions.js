"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sessions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Sessions.belongsTo(models.Events, { foreignKey: "eventId" });
      Sessions.hasMany(models.Feedback, { foreignKey: "sessionId" });
    }
  }
  Sessions.init(
    {
      eventId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      speaker: DataTypes.STRING,
      initialDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Sessions",
    }
  );
  return Sessions;
};
