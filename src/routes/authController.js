import {Router} from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';
import generateToken from '../resources/token/generateToken';

import auth from '../middlewares/auth';

const router = Router();

router.post('/login', async (req, res) => {
  const {username, password} = req.body;

  try{
    const user = await User.findOne({where:{username:username}});

    if(!user){
      return res.status(401).send({message:"user not found"});
    }

    if(!(await bcrypt.compare(password, user.password))){
      return res.status(400).send({message:"invalid password"})
    }

    user.password = undefined;

    return res.status(200).send({user,token:generateToken({id: user.username})});


  }catch(err){
    return res.status(400).send({message:"request failed"})
  }
})

router.post('/register', async (req, res) => {
  const {username, email, password} = req.body;

  try{

  if(await User.findOne({where:{username:username , email:email}})){
    return res.send({message:'user already exists'});
  }

  await User.create({username, email, password});
  return res.status(200).send({username, email, message:"user created"});

  }catch(err){
    return res.status(400).send({message:'unable to create user'})
  }
})

module.exports = app => app.use(router);

