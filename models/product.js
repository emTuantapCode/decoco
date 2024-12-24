'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category, { foreignKey: 'categoryCode', targetKey: 'code', as: 'categoryData' })
      product.hasMany(models.tag, { foreignKey: 'productId', as: 'product' })
      // product.hasMany(models.product_bill, { foreignKey: 'productId', as: 'products' })
      product.hasMany(models.comment, { foreignKey: 'productId', as: 'productData' })
    }
  }
  product.init({
    name: DataTypes.STRING,
    costPerUnit: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    usage: DataTypes.TEXT,
    categoryCode: DataTypes.STRING,
    mainImage: DataTypes.STRING,
    image1: DataTypes.STRING,
    image2: DataTypes.STRING,
    rate: DataTypes.FLOAT,
    color: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'product',
  });
  return product;
};