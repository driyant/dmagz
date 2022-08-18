'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Magazine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Magazine.belongsTo(models.Publisher, {
        foreignKey: "PublisherId"
      })
    }
  }
  Magazine.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Magazine title cannot be null"
        },
        notEmpty: {
          msg: "Magazine title cannot be empty"
        }
      }
    },
    totalPage: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Magazine total page cannot be null"
        },
        notEmpty: {
          msg: "Magazine total page cannot be empty"
        },
        minimumPage(value) {
          if (value <= 99) {
            throw new Error('Minimum number of magazine page is 100')
          }
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Magazine price cannot be null"
        },
        notEmpty: {
          msg: "Magazine price cannot be empty"
        },
        minimumPrice(value) {
          if (value < 30000) {
            throw new Error('Minimum selling price is Rp30.000')
          }
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "magazine stock cannot be null"
        },
        notEmpty: {
          msg: "magazine stock cannot be empty"
        },
        minimumStock(value) {
          if (value < 0) {
            throw new Error('STOCK CANNOT BE NEGATIVE!')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Magazine',
  });
  return Magazine;
};