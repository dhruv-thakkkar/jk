const jwt = require( "jsonwebtoken" );
const apiResponse = require("../helpers/apiResponse")
exports.checkToken = (req,res,next) =>{

    const body = {}

    const secret ="dhruvthakkar";
    const token = req.headers.authorization;
    if ( token ) {
        return jwt.verify( token, secret, function( err, decoded ) {
            if ( err ) {
                body.message= "Failed to authenticate token.";
                return apiResponse.unauthorizedResponse(res, body);
            }
            req.user = decoded;
            next();
        } );
    }
}