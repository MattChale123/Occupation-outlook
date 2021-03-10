'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Application.init({
    company: DataTypes.STRING,
    position: DataTypes.STRING,
    appDate: DataTypes.DATEONLY,
    followUpDate: DataTypes.DATEONLY,
    salary: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    JobId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};