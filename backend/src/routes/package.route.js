const express = require('express');
const router = express.Router();
const packageController = require('../controllers/package.controller');
const auth = require('../middleware/auth.middleware');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

router.get('/', auth(), awaitHandlerFactory(packageController.getAllPackages)); // localhost:3000/api/v1/packages
router.get('/id/:id', auth(), awaitHandlerFactory(packageController.getPackageById)); // localhost:3000/api/v1/packages/id/1

module.exports = router;