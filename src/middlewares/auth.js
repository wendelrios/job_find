import jwt, { decode } from 'jsonwebtoken';
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if(!authHeader){
    return res.status(401).send({error:'no token provided'});
  }

  const parts = authHeader.split(' ');

  if(parts.length !== 2){
    res.status(401).send({error:'token error'});
  }

  const [scheme,token] = parts;

  if(!/^Bearer$/i.test(scheme)){
    return res.status(401).send({message:'token malformatted'})
  }

  const decoded = jwt.verify(token, authConfig.secret);

  if(typeof decoded === Error){
    return res.status(401).send({message:"token format is not valid"});
  }

  req.userId = decoded.id;
  console.log(req.userId);
  next();
}

