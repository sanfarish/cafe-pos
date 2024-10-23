'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('orders', [
      {
        id: 'a6cceaf6-14e3-4f12-b981-2e69adbd0227',
        payment_id: 'ba12aae9-44f2-42b9-b3d8-23d4c4e15aab',
        bill: '12345678abcdefgh',
        created_at: '2024-10-22T08:00:00'
      },
      {
        id: '86f58ae9-7983-4748-913f-6d014e8e631d',
        payment_id: '3a92b794-335c-4e54-a14b-ab34cafb8c04',
        bill: 'abcdefgh12345678',
        created_at: '2024-10-23T11:23:45'
      }
    ], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('orders', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
