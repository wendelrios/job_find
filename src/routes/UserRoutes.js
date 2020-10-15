import {Router} from 'express';
import User from '../models/User';

const router  = Router();

router.post('/', async (req, res) => {
  const user = req.body;
  try{
   await User.create(user)
   return res.status(200).send('user created')
  }catch(err){
    return res.status(400).send({message:'unable to create user'})
  }
})

module.exports = app => app.use('/users', router);

