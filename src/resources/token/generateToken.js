import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth.json'

module.exports = (params={}) => {
  jwt.sign(params, authConfig.secret, {
    expiresIn:86400,
  })
}