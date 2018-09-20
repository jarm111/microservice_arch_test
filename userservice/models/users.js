const bcrypt = require('bcrypt');
const db = require('./index');

module.exports = (sequelize, DataTypes) => {
  let Users = sequelize.define('users', {
    customer_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'Supplied email is not a valid email address'
        }
      }
    },
    password: { type: DataTypes.STRING }
  }, {
      timestamps: false,
      tableName: 'users',
      freezeTableName: true,
    });

  return Users;
};
