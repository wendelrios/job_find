import {Router} from 'express';
import sequelize from '../models';
import models from '../models';
import {DataTypes} from 'sequelize';

const router  = Router();



module.exports = app => app.use('/users', router);

