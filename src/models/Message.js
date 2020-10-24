import {DataTypes} from 'sequelize';
import sequelize from '../databaseConfig';
import User from './User';

const Message = sequelize.define('message', {
  text:{
    type:DataTypes.TEXT,
    allowNull:false,
  },
},{
  underscored:true
},)


module.exports = Message;




