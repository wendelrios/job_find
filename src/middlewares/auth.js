import jwt from 'jsonwebtoken';
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
  const authHeader = req.header('Authorization');

  if(!authHeader){
    return res.status(401).send({error:'no token provided'});
  }

  const parts = authHeader.split(' ');

  if(parts.length !== 2){
    res.status(401).send({error:'token error'});
  }

  const [scheme,] = parts;

  if(!/^Bearer$/i.test(scheme)){
    return res.status(401).send({message:'token malformatted'})
  }

  // jwt.verify()
}