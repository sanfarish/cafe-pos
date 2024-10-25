"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      carts.belongsTo(models.orders, { foreignKey: "order_id" });
      carts.belongsTo(models.menus, { foreignKey: "menu_id" });
    }
  }
  carts.init(
    {
      order_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      menu_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "carts",
      freezeTableName: true,
      underscored: true,
      timestamps: false,
    },
  );
  carts.removeAttribute("id");
  return carts;
};
