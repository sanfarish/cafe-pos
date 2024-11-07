'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    static associate(models) {
      carts.belongsTo(models.orders, { foreignKey: "order_id" });
      carts.belongsTo(models.menus, { foreignKey: "menu_id" });
    }
  }
  carts.init({
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    menu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'carts',
    underscored: true,
    freezeTableName: true,
    timestamps: false,
  });
  return carts;
};