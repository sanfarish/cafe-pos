"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class menus extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			menus.belongsTo(models.category, { foreignKey: "category_id" });
		}
	}
	menus.init(
		{
			id: {
				type: DataTypes.UUID,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			category_id: {
				type: DataTypes.UUID,
				allowNull: false,
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			status: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
		},
		{
			sequelize,
			modelName: "menus",
			freezeTableName: true,
			underscored: true,
			timestamps: false,
		},
	);
	return menus;
};
