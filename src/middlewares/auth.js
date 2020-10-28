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
    return res.status(401).send({message:'token malformatted'});
  }

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if(err){
      return res.status(401).send({message:"there was an error with token validation"});
    }
    console.log(decoded.id)
    req.userId = decoded.id;
    next();
  });
}

