const jwt = require('jsonwebtoken');
const JWT_SECRET = "ritikisagoodboy";

const fetchuser = (req,res,next)=>{
    const token = req.header("auth-token");
    console.log(token);
    if(!token){
       return res.status(400).json({error:"please authenticate using a valid token"});
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.id;
        next()
    }
     catch (error) {
        res.status(401).send({error:"access denied"})
    }
} 

module.exports = fetchuser;