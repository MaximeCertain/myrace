'use strict';
module.exports = (sequelize, DataTypes) => {
  const Race = sequelize.define('Race', {
    name: DataTypes.STRING,
    start: DataTypes.STRING,
    finish: DataTypes.STRING,
    kilometers: DataTypes.FLOAT,
    elevation: DataTypes.FLOAT,
    max_participants: DataTypes.INTEGER,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    validatedAdmin: DataTypes.BOOLEAN,
    reasonAdmin: DataTypes.STRING
  }, {});
  Race.associate = function(models) {
    models.Race.belongsTo(models.User,{
      foreignKey:{
        allowNull: false
      }
    });
    models.Race.belongsToMany(models.User, {
      through: "UserRaces",
      as: "Runners"
    });

    models.Race.hasMany(models.Message, {
      as: "Messages"
    });
    // associations can be defined here
  };



  return Race;
};