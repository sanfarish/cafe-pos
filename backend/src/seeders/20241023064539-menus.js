"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "menus",
      [
        {
          id: "bbda6f82-de8c-4b63-a1b6-dfd56cbc19b2",
          name: "Croissant",
          category_id: "1ce8f00f-5261-49a4-ae76-f0e8564d27e4",
          price: 14000,
          image: "2024-11-04133247_croissant.jpg",
          status: true,
        },
        {
          id: "a95888a6-591e-41aa-a314-764d3b02435b",
          name: "Latte",
          category_id: "26ad89d5-2b80-4f3e-b9f8-162bd09c8795",
          price: 23000,
          image: "2024-11-04132346_latte.jpg",
          status: false,
        },
        {
          id: "2b03bda3-876d-47ff-a4e1-1a0591a27759",
          name: "Pizza",
          category_id: "1ce8f00f-5261-49a4-ae76-f0e8564d27e4",
          price: 46000,
          image: "2024-11-04142346_pizza.jpg",
          status: true,
        },
        {
          id: "fb81e53c-1aaf-4720-b1f5-fa878b85c906",
          name: "Sundae",
          category_id: "1ce8f00f-5261-49a4-ae76-f0e8564d27e4",
          price: 35000,
          image: "2024-11-04142346_sundae.jpg",
          status: true,
        },
      ],
      {},
    );
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

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("menus", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
