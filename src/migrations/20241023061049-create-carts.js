'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('carts', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      order_id: {
        allowNull: false,
        references: { model: 'orders', key: 'id' },
        type: Sequelize.UUID
      },
      menu_id: {
        allowNull: false,
        references: { model: 'menus', key: 'id' },
        type: Sequelize.UUID
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE
      // }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('carts');
  }
};