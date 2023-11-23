"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Feedback.belongsTo(models.People, {
        foreignKey: "participantId",
      });
      Feedback.belongsTo(models.Sessions, { foreignKey: "sessionId" });
    }
  }
  Feedback.init(
    {
      sessionId: DataTypes.INTEGER,
      participantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "People",
          key: "id",
        },
        validate: {
          isParticipant: async function (value) {
            const User = sequelize.model("People");
            const user = await User.findByPk(value);

            if (!user || user.type !== "participant") {
              throw new Error('Feedback need a users of type "participant');
            }
          },
        },
      },
      comment: DataTypes.STRING,
      avaliation: {
        type: DataTypes.INTEGER,
        isLower: function (data) {
          if (data > 5 || data < 1) {
            throw new Error("the valou must go from 1 to 5");
          }
        },
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Feedback",
    }
  );
  return Feedback;
};
