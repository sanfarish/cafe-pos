"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class orders extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			orders.belongsTo(models.payments, { foreignKey: "payment_id" });
		}
	}
	orders.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
			},
			payment_id: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			bill: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			created_at: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "orders",
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		},
	);
	return orders;
};
