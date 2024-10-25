"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"categories",
			[
				{
					id: "1ce8f00f-5261-49a4-ae76-f0e8564d27e4",
					name: "foods",
				},
				{
					id: "26ad89d5-2b80-4f3e-b9f8-162bd09c8795",
					name: "drinks",
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
		await queryInterface.bulkDelete("categories", null, {});
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
