const bcrypt = require('bcrypt')
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class User extends Model {}

User.init({
    // add properites here, ex:
    email: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull:false,
        validate: {
            len:[8]
        }
    }

},{
    sequelize,
    hooks:{
        beforeCreate: zooObj=>{
            zooObj.password = bcrypt.hashSync(zooObj.password,3);
            return zooObj;
        }
    }
});

module.exports=User