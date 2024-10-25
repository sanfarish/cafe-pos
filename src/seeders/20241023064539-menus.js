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
					status: true,
				},
				{
					id: "a95888a6-591e-41aa-a314-764d3b02435b",
					name: "Latte",
					category_id: "26ad89d5-2b80-4f3e-b9f8-162bd09c8795",
					price: 23000,
					status: false,
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
