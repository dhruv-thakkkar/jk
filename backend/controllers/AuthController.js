const apiResponse = require("../helpers/apiResponse");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

exports.register = [
  // Validation.
  body("email").isEmail().withMessage("Your email is invalid"),
  body("firstName").notEmpty().withMessage("First Name is Required"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("must be at least 5 chars long"),

  (req, res) => {
    try {
      // Extract the validation errors from a request.
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return apiResponse.validationErrorWithData(
          res,
          "Validation Error.",
          errors.array()
        );
      } else {
        //hash input password
        bcrypt.hash(req.body.password, 10, function (err, hash) {
          var user = new UserModel({
            firstName: req.body.firstName,
            email: req.body.email,
            password: hash,
          });
          /*  */
          user.save(function (err) {
            if (err) {
              return apiResponse.ErrorResponse(res, err);
            }
            let userData = {
              _id: user._id,
              firstName: user.firstName,
              email: user.email,
            };
            return apiResponse.successResponseWithData(
              res,
              "Registration Success.",
              userData
            );
          });
          /*  */
        });
      }
    } catch (err) {
      //throw error in json response with status 500.
      return apiResponse.ErrorResponse(res, err);
    }
  },
];
