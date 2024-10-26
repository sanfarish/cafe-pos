"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "payments",
      [
        {
          id: "ba12aae9-44f2-42b9-b3d8-23d4c4e15aab",
          name: "Faris",
          account: "ab12cd34ef56gh78",
        },
        {
          id: "3a92b794-335c-4e54-a14b-ab34cafb8c04",
          name: "Hasan",
          account: "12ab34cd56ef78gh",
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
    await queryInterface.bulkDelete("payments", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
