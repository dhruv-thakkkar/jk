const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');


/* router.post('/register', function(req, res){
    AuthController.register
  });
 */
//router.post('/login', AuthController.login)
router.post('/register', AuthController.register);
module.exports = router;