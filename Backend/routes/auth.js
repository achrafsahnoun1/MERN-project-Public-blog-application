const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

//Register
router.post("/register",async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedpass= await bcrypt.hash(req.body.password, salt)
        const newuser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedpass,
        })
        
        const user = await newuser.save()
        const {password, ...others}= newuser._doc;

        token = jwt.sign(
            {id: user.id},
            process.env.jwtSecret,
            {expiresIn: 3600})
        res.status(200).json({token,others});
    } catch{
        res.status(500).json(err);
    }
})

//Login

router.post("/login",async(req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username})
        !user && res.status(400).json("wrong credentials..")

        const validated = await bcrypt.compare(req.body.password,user.password)
        !validated && res.status(400).json("wrong credentials..")
        const {password, ...others}=user._doc;
        token = jwt.sign(
            {id: user.id},
            process.env.jwtSecret,
            {expiresIn: 3600})
        res.status(200).json({token,others});

    } catch{
        res.status(500).json(err);
    }
})


module.exports= router;