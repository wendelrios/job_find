import {Router} from 'express';
import Gig from '../models/Gig';
import db from '../../databaseConfig';

const router = Router();

router.get('/', (req, res) => {
  Gig.findAll()
    .then(gig => {
      res.status(200).send({gig});
    })
    .catch(err => console.log(err));
})

module.exports = app => app.use('/gigs', router)