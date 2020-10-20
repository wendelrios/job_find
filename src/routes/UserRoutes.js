import {Router} from 'express';
import User from '../models/User';
import token from '../middlewares/token';

const router  = Router();
router.use(token);

router.post('/', async (req, res) => {

  const {username, email, password} = req.body;
  const {token} = req;

  try{

  if(await User.findOne({where:{username:username , email:email}})){
    return res.send({message:'user already exists'});
  }

  await User.create({username, email, password});
  return res.status(200).send({username, email, token});

  }catch(err){
    return res.status(400).send({message:'unable to create user'})
  }
})


module.exports = app => app.use('/users', router);

