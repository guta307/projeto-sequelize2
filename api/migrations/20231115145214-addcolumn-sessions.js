"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Sessions", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE, //constraints (restrições)
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Sessions", "deletedAt");
  },
};
