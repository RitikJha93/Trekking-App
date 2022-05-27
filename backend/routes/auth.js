const express = require('express');
//using express.Router for routing
const router = express.Router();
//requiring models for storing data
const User = require('../models/login')
//requiring express validator for validation
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require("../middleware/fetchuser");
//using a post request to save the data
const JWT_SECRET = "ritikisagoodboy";


//post request for creating a user
router.post("/",[
    body('email','invalid email').isEmail(),
    body('name','username must be of min 5 characters').isLength({ min: 3 }),
    body('password','password must be of min 8 characters').isLength({ min: 3 }),
],async(req,res)=>{

    const errors = validationResult(req);
    let success = false
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try{
        let user = await User.findOne({email:req.body.email});
        if(user){
            return (res.status(400).json({success,error:"user with this email already exists"}));
        }

        const salt = bcrypt.genSaltSync(10);
        const secPass = bcrypt.hashSync(req.body.password, salt)


        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        const data = {
            id:user.id
        }
        success = true
        const authToken = jwt.sign(data,JWT_SECRET);
        res.json({success,authToken});
    }
    catch(err){
        console.log(err);
    }

      
})


//post request for authenticating user login

router.post("/login",[
    body('email','invalid email').isEmail(),
    body('password','password cannot be blank').exists(),
],async(req,res)=>{

    const errors = validationResult(req);
    let success = false
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }

    const {email,password} = req.body;
    try{
        const user = await User.findOne({email})
        if(!user){
           return res.status(400).json({success,error:"Invalid Credentials"});
        }

        const passCompare = await bcrypt.compare(password,user.password)
        if(!passCompare){
           return res.status(400).json({success,error:"Invalid Credentials"});
        }

        const data = {
            id:user.id
        }
        const authToken = jwt.sign(data,JWT_SECRET);
        success = true
        res.json({success,authToken});
    }
    catch(err){
        res.status(400).json({error:"some error occured"})
        console.log(err)
    }
})


router.post("/getuser" , fetchuser , async(req,res)=>{
    try {
        const userId = await req.user;
        const user = await User.findById(userId).select("-password");
        res.status(200).send(user);
    } catch (error) {
        res.status(400).json({error:"some error occured"})
    }
})

module.exports = router;