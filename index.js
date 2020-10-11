import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';

import router from './src/Routes'

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT);