'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        charset: ' utf8',
        collate: 'utf8_general_ci'
      },
      name: { type: Sequelize.STRING },
      costPerUnit: { type: Sequelize.INTEGER, defaultValue: 0 },
      description: { type: Sequelize.TEXT('long') },
      usage: { type: Sequelize.TEXT('long') },
      categoryCode: { type: Sequelize.STRING },
      mainImage: { type: Sequelize.STRING },
      image1: { type: Sequelize.STRING },
      image2: { type: Sequelize.STRING },
      rate: { type: Sequelize.FLOAT, defaultValue: 0 },
      color: { type: Sequelize.JSON },
      createdAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') },
      updatedAt: { allowNull: false, type: 'TIMESTAMP', defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};