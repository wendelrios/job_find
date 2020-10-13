import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';



import models from './src/models';
import sequelize from './src/models'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




const eraseDatabaseOnSync = true;

sequelize.sync({force:eraseDatabaseOnSync}).then(async () => {
  app.listen(process.env.PORT);
});


app.get('/', (req, res)=> {
  res.send('home page')
})




