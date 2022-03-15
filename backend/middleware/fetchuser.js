const jwt = require("jsonwebtoken");
const JWT_SECRET = 'Harryisgoodb$y';

const fetchuser = (req, res, next)=>{
    //Get the user from the JWT token and add ID to request object
    const token = req.header('auth-token');
    if(!token){
        //sending access denied
        res.status(401).send({error:"Please authenticate using valid token"});
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error:"Please authenticate using valid token"});
    }
}

module.exports = fetchuser;