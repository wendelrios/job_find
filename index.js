import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';

import models from './src/models';
import sequelize from './src/databaseConfig'
import {users, messages} from './src/models';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));


const eraseDatabaseOnSync = true;

sequelize.sync({force:eraseDatabaseOnSync}).then(async () => {
  app.listen(process.env.PORT);
});


app.post('/messages', (req, res) => {
  
})

app.get('/', (req, res)=> {
  res.send('home page')
})

require('./src/controllers/UserController')(app);




