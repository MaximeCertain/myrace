'use strict';
module.exports = (sequelize, DataTypes) => {
  const TypeMessage = sequelize.define('TypeMessage', {
    code: DataTypes.STRING
  }, {});
  TypeMessage.associate = function(models) {
    models.TypeMessage.hasMany(models.Message, { as: "Messages" });

    // associations can be defined here
  };
  return TypeMessage;
};