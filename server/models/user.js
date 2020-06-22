'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    picture: DataTypes.STRING,
    description: DataTypes.STRING,
    age: DataTypes.INTEGER,
    TypeUserId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {

    models.User.belongsTo(models.TypeUser,{
      foreignKey:{
        allowNull: false
      }
    });

    models.User.hasMany(models.Race, {
      as: "CreatedRaces"
    });

    ///participations de l'user aux courses
    models.User.belongsToMany(models.Race, {
      through: "UserRaces",
      as: "RacesParticipations"
    });

  };
  return User;
};