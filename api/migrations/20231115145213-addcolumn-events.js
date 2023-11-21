"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Events", "deletedAt", {
      allowNull: true,
      type: Sequelize.DATE, //constraints (restrições)
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Events", "deletedAt");
  },
};
