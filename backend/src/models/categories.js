'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class categories extends Model {
    static associate(models) {
    }
  }
  categories.init({
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'categories',
    underscored: true,
    freezeTableName: true,
    timestamps: false,
  });
  return categories;
};