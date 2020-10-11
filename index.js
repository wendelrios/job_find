import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';

import db from './databaseConfig';

const app = express();
app.use(express.json());

require('./src/Routes')(app);



const PORT = process.env.PORT || 5000;

app.listen(PORT);

db.authenticate()
  .then(() => {
    console.log('connection succeed');
  })
  .catch(() => {
    console.log('connection failed');
  })