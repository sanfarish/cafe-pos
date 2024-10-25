"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("payments", {
			// id: {
			//   allowNull: false,
			//   autoIncrement: true,
			//   primaryKey: true,
			//   type: Sequelize.INTEGER
			// },
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.UUID,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			account: {
				allowNull: false,
				type: Sequelize.STRING,
			},
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
		await queryInterface.dropTable("payments");
	},
};
