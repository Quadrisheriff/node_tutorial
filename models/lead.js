'use strict';
module.exports = (Sequelize, DataTypes) => {
  var lead = Sequelize.define('Lead', {
    id: {
      types: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,

      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });

  return Lead;
};