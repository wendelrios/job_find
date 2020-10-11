import dotenv from 'dotenv';
import { Sequelize } from 'sequelize'

dotenv.config();

const db = new Sequelize('codegig', 'wendel', 'wendel12', {
  host:'localhost',
  dialect:'postgres'
})


module.exports = db;
