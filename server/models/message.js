'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    RaceId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    TypeMessageId: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Message.associate = function(models) {
    models.Message.belongsTo(models.Race,{
      foreignKey:{
        allowNull: false
      }
    });

    models.Message.belongsTo(models.User,{
      foreignKey:{
        allowNull: false
      }
    });

    models.Message.belongsTo(models.TypeMessage,{
      foreignKey:{
        allowNull: false
      }
    });
    // associations can be defined here
  };
  return Message;
};