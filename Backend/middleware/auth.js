const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

dotenv.config()
function auth (req,res,next){
    const token = req.header('x-auth-token');
    //check if token exists
    if (!token) res.status(401).json({msg: 'No token, authorization denied'});
    try{
        const decoded = jwt.verify(token, process.env.jwtSecret);
        req.user=decoded;
        next();
    } catch(err){
        res.status(400).json({msg: 'token is not valid'});
    }
}
module.exports= auth;
