'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("carts", [
      {
        order_id: 1,
        menu_id: 19,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        menu_id: 30,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        menu_id: 22,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        menu_id: 27,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        menu_id: 1,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        menu_id: 2,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        menu_id: 3,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        menu_id: 6,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        menu_id: 8,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 1,
        menu_id: 12,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 2,
        menu_id: 9,
        quantity: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 2,
        menu_id: 6,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 2,
        menu_id: 15,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 2,
        menu_id: 17,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 2,
        menu_id: 23,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        order_id: 3,
        menu_id: 25,
        quantity: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  // eslint-disable-next-line no-unused-vars
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("carts", null, {});
  }
};
