const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/CategoriesController');


router.post("/get", CategoriesController.getCategories);
module.exports = router;