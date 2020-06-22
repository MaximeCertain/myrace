'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Races', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      start: {
        type: Sequelize.STRING
      },
      finish: {
        type: Sequelize.STRING
      },
      kilometers: {
        type: Sequelize.FLOAT
      },
      elevation: {
        type: Sequelize.FLOAT
      },
      max_participants: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Races');
  }
};