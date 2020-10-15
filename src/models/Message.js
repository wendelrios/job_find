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

Message.belongsTo(User);

module.exports = Message;




