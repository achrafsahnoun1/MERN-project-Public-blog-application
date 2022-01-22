const router = require("express").Router();
const User = require("../models/User")
const Post = require("../models/Posts")

const auth = require('../middleware/auth')
const bcrypt = require('bcrypt');

//Update user by id
router.put("/:id",auth,async(req,res)=>{
    
        if (req.user.id === req.params.id){
             try{
                 if(req.body.password)
                   {
                   const salt = await bcrypt.genSalt(10);
                   const hashedpass= await bcrypt.hash(req.body.password, salt)
                   req.body.password=hashedpass;
                   }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{
            $set: req.body,},{new:true});
            res.status(200).json(updatedUser);  

        } catch (err){
        res.status(500).json(err);
    }
}else{res.status(401).json({"msg":"you cannot update this user"})}
});

//Delete user by id

router.delete("/:id",auth,async(req,res)=>{
    if(req.user.id === req.params.id){
    const user = await User.findById(req.params.id)
    if(user){
    try{
        await Post.deleteMany({username:user.username})
        await User.findByIdAndDelete(req.params.id)

        res.status(200).json({msg:"User deleted !"});
    } catch(err){
        res.status(500).json(err);
    }}
    else res.status(404).json({"msg":"User not found!"})
} else{res.status(401).json({"msg":"you cannot delete this user"})}
})
//Get one user by id
router.get("/:id",auth,async(req,res)=> {
   try{
    const user = await User.findById(req.params.id)
    if(user){
    const {password, ...others}=user._doc;
    res.status(200).json(others);}
    
    else{
        res.status(404).json({"msg":"User not found!"})
    }
   }catch(err){
    res.status(500).json(err);
   }

})


module.exports= router;