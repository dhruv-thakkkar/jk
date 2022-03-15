const express = require('express');
const router = express.Router();
const PackageController = require('../controllers/PackageController');


router.post("/add", PackageController.addPackage);
router.post("/add-itineraries", PackageController.addPackageItinerary);
router.post("/add-package-images", PackageController.addPackageImages);
router.post("/get-package", PackageController.getPackageById);
module.exports = router;