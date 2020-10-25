import {Router} from 'express';
import User from '../models/User';
import Message from '../models/Message';
import authMiddleware from '../middlewares/auth';

const router  = Router();
router.use(authMiddleware);

router.get('/', async(req, res) => {
  try{
    const users = await User.findAll({include:Message});
    return res.status(200).send({users});
  }catch(err){
    return res.status(400).send({message:'there was an error with request'})
  }
})

router.get('/username', async(req,res) => {
  try{
    const user = await User.findOne({where:{username:req.params.username}}, {include:Message});
    return res.send({user});
  }catch(err){
    return res.status(400).send({message:"there was an error with the request"});
  }
})


module.exports = app => app.use('/users', router);

