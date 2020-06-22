'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeUser = sequelize.define('TypeUser', {
    label: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  TypeUser.associate = function(models) {
    models.TypeUser.hasMany(models.User)
    // associations can be defined here
  };
  return TypeUser;
};