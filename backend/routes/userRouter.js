const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const tokenMiddleware = require('../middlewares/checkToken');


router.post("/edit", tokenMiddleware.checkToken,UserController.editProfile);
module.exports = router;