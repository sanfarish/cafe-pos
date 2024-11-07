'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    static associate(models) {
      orders.belongsTo(models.payments, { foreignKey: "payment_id" });
    }
  }
  orders.init({
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    bill: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    payment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'orders',
    underscored: true,
    freezeTableName: true,
    timestamps: true,
  });
  return orders;
};