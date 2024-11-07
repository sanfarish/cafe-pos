'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("orders", [
      {
        name: "Faris",
        payment_id: 1,
        bill: "2024-11-06150604_Faris.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Hasan",
        payment_id: 2,
        bill: "2024-11-06170532_Hasan.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Faris Hasan",
        payment_id: 3,
        bill: "2024-11-06201759_Faris-Hasan.jpg",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  // eslint-disable-next-line no-unused-vars
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  }
};
