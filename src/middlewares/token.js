import jwt from 'jsonwebtoken';
import Router from 'express';
const authConfig = require('../config/auth.json');

const router = Router();

module.exports = (req, res, next) => {
  req.token = jwt.sign({id:req.body.username}, authConfig.secret, {
    expiresIn:86400,
  });
  next();
}