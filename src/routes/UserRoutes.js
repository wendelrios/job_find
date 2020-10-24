import {Router} from 'express';
import User from '../models/User';
import Message from '../models/Message';

const router  = Router();

router.get('/', async(req, res) => {
  try{
    const users = await User.findAll({include:Message});
    return res.status(200).send({users});
  }catch(err){
    return res.status(400).send({message:'there was an error with request'})
  }
})


module.exports = app => app.use('/users', router);

