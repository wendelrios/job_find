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

router.get('/:username', async(req,res) => {
  try{
    const user = await User.findOne({include: [
      {
        model:Message
      }
    ],where:{username:req.params.username}})
    if(!user){
      return res.send({message:"user not found"});
    }
    return res.send({user});
  }catch(err){
    return res.status(400).send({message:"there was an error with the request"});
  }
})

router.post('/:username/message', async(req, res) => {
  const {text} = req.body

  try{
    const message = await Message.create({text, userId:req.userId});
    return res.status(200).send({message});
  }catch(err){
    return res.send({message:"there was an error with the request"});
  }
})

router.put('/:username/message/:messageId', async (req, res) => {
  try{
    const [,updatedMessage] = await Message.update({text:req.body.text},
      {where:{id:req.params.messageId}, returning:true, plain:true});
    return res.status(200).send(updatedMessage);
  }catch(err){
    return res.status(400).send({message:"there was an error with the request"});
  }
})

router.delete('/:username/message/:messageId', async(req, res) => {
  try{
    await Message.destroy({where:{id:req.params.messageId}});
    return res.status(200).send({message:"the message was deleted"});
  }catch(err){
    return res.status(400).send({message:"there was an error with the request"});
  }
})


module.exports = app => app.use('/users', router);

