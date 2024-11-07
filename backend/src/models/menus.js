'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menus extends Model {
    static associate(models) {
      menus.belongsTo(models.categories, { foreignKey: "category_id" });
    }
  }
  menus.init({
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'menus',
    underscored: true,
    freezeTableName: true,
    timestamps: false,
  });
  return menus;
};