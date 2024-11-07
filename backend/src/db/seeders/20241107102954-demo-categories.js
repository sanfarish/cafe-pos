'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Meals",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Snacks",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Desserts",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Coffee",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Non-Coffee",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Tea",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  // eslint-disable-next-line no-unused-vars
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("categories", null, {});
  }
};
