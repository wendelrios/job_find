import User from './User';
import Message from './Message';

import sequelize from '../databaseConfig';

const models = {
  User:User,
  Message:Message
}

Object.keys(models).forEach(key => {
  if('associate' in models[key]){
    models[key].associate(models);
  }
})
