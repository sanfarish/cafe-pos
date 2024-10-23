'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('carts', [
      {
        order_id: 'a6cceaf6-14e3-4f12-b981-2e69adbd0227',
        menu_id: 'bbda6f82-de8c-4b63-a1b6-dfd56cbc19b2',
        quantity: 1
      },
      {
        order_id: 'a6cceaf6-14e3-4f12-b981-2e69adbd0227',
        menu_id: 'a95888a6-591e-41aa-a314-764d3b02435b',
        quantity: 2
      },
      {
        order_id: '86f58ae9-7983-4748-913f-6d014e8e631d',
        menu_id: 'bbda6f82-de8c-4b63-a1b6-dfd56cbc19b2',
        quantity: 3
      },
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
    await queryInterface.bulkDelete('carts', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
