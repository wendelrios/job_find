import {Router} from 'express';
import Gig from '../models/Gig';
import db from '../../databaseConfig';

const router = Router();

router.get('/', async (req, res)=> {
  try{
    const gigs = await Gig.findAll();
    return res.status(200).send({gigs});
  }catch(err){
    res.status(400).send({message:"request failed"});
  }

})

module.exports = app => app.use('/gigs', router)