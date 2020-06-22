'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserRaces = sequelize.define('UserRaces', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        bibNumber: DataTypes.STRING,
        time_achieved: DataTypes.FLOAT,
        UserId: DataTypes.INTEGER,
        RaceId: DataTypes.INTEGER
    });
    UserRaces.associate = function (models) {
        // associations can be defined here
    };
    return UserRaces;
};