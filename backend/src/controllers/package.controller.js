const PackageModel = require("../models/package.model");
const HttpException = require("../utils/HttpException.utils");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class PackageController {
  getAllPackages = async (req, res, next) => {
    let packageList = await PackageModel.find();
    if (!packageList.length) {
      throw new HttpException(404, "Package not found");
    }

    res.send(packageList);
  };

  getPackageById = async (req, res, next) => {
    const user = await PackageModel.findOne({ "P.id": req.params.id });
    if (!user) {
      throw new HttpException(404, "Package not found");
    }

    const { password, ...userWithoutPassword } = user;

    res.send(userWithoutPassword);
  };
}

/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new PackageController();
