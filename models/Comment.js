const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config');

class Comment extends Model {}

Comment.init({
    text: {
        type: DataTypes.STRING,
        allowNull:false,
    }
},{
    sequelize
});

module.exports=Comment