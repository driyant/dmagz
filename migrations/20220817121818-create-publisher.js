'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Publishers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameOfPublisher: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Publishers');
  }
};