'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("payments", [
      {
        name: "Cash",
        account: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "QR",
        account: "qr_integration_key",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Mandiri Debit",
        account: "mandiri_integration_key",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  // eslint-disable-next-line no-unused-vars
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("payments", null, {});
  }
};
