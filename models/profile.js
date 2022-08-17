'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User, {
        foreignKey: "UserId"
      })
    }
  }
  Profile.init({
    fullName: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    accountNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profile',
  });
  return Profile;
};