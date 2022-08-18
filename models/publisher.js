'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Publisher.hasMany(models.Magazine, {
        foreignKey: "PublisherId"
      })
    }
  }
  Publisher.init({
    nameOfPublisher: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'name of publisher cannot be null'
        },
        notEmpty: {
          msg: 'name of publisher cannot be empty'
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'address cannot be null'
        },
        notEmpty: {
          msg: 'address cannot be empty'
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: {
          msg: 'phone number can only be number'
        },
        notNull: {
          msg: 'phone number cannot be null'
        },
        notEmpty: {
          msg: 'phone number cannot be empty'
        },
        minimumPhoneNumber(value) {
          if (value.length < 8 || value.length > 14) {
            throw new Error('Phone number need 8 number as minimum and 14 number as maximum')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Publisher',
  });
  return Publisher;
};