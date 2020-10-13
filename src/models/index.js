import Sequelize from 'sequelize';

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect:'postgres',
  },
) ;

const models = {
  User:require('./User'),
  Message:require('./Message'),
};

Object.keys(models).forEach(key => {
  if('associate' in models[key]){
    models[key].associate(models);
  }
});

export default models;

module.exports = sequelize;
