"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("orders", {
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
			payment_id: {
				allowNull: false,
				references: { model: "payments", key: "id" },
				type: Sequelize.UUID,
			},
			bill: {
				type: Sequelize.STRING,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
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
		await queryInterface.dropTable("orders");
	},
};
