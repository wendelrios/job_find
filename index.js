import express from 'express';
import 'dotenv/config';
import sequelize from './src/databaseConfig'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const eraseDatabaseOnSync = true;

sequelize.sync({force:eraseDatabaseOnSync}).then(async () => {
  app.listen(process.env.PORT);
});


//user routes
require('./src/controllers/UserController')(app);




