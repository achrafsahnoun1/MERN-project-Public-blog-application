const router = require("express").Router();
const User = require("../models/User")
const Post = require("../models/Posts")
const auth = require('../middleware/auth');

//Create new post
router.post("/",async(req,res)=>{

        const newpost = new Post (req.body);
        try{
        const savedpost = await newpost.save();
        res.status(200).json(savedpost);  

        } catch (err){
        res.status(500).json(err);
    }
});

//Update post

router.put("/:id",async(req,res)=>{
    
    const post = await Post.findById(req.params.id)
   try{
    if(req.body.username === post.username){
           try {
                const updatedpost = await Post.findByIdAndUpdate(req.params.id,{
                $set: req.body,},{new:true})
                res.status(200).json(updatedpost);}
            catch(err)  {
                res.status(500).json(err);
                        }
                } 
    else { res.status(401).json({"msg":"You cannot update this post!"});}
    }catch(err){
        res.status(500).json(err);
    }
    
    
});

//Delete post
router.delete("/:id",async(req,res)=>{
    const post = await Post.findById(req.params.id)
    try{
       if (req.body.username===post.username){
         try{
           await post.delete();
           res.status(200).json({"msg":"Your post has ben deleted !"});
         }catch(err){
             res.status(500).json(err)
         }
       }
       else res.status(401).json({"msg":"You cannot delete this post !"})


    }catch(err){
        res.status(500).json(err)
    }
    
})
// Get post
router.get("/:id",async(req,res)=> {
   try{
    const post = await Post.findById(req.params.id)
    if(post){

    res.status(200).json(post);}
    
    else{
        res.status(404).json({"msg":"Post not found!"})
    }
   }catch(err){
    res.status(500).json(err);
   }
})

// Get all posts

router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username:username });
      } else if (catName) {
        posts = await Post.find({
          categories: {
            $in: [catName],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports= router;