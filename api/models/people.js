"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      People.hasMany(models.Events, { foreignKey: "hostId", as: "getEvents" });
      People.hasMany(models.Feedback, {
        foreignKey: "participantId",
        as: "getFeedbacks",
      });
    }
  }
  People.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          sizeValidation: function (data) {
            if (data.length < 3) {
              throw new Error("the field needs 3 or more characters");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: "invalid e-mail data",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        validate: {
          is: {
            args: [/^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/],
            msg: "invalid phone number",
          },
        },
      },
      type: {
        type: DataTypes.STRING,
        validate: {
          isIn: {
            args: [["host", "participant"]],
            msg: "the value need to be either host or participant",
          },
        },
      },
    },
    {
      sequelize,
      defaultScope: {
        where: {},
      },
      scopes: {
        hosts: {
          where: {
            type: "host",
          },
        },
        participants: {
          where: {
            type: "participant",
          },
        },
      },
      paranoid: true,
      modelName: "People",
    }
  );
  return People;
};
