const Post=require("../models/Post")

module.exports = {
    getIndex: (req, res) => {
      res.send("Express");
    },
    // getUserNames:async(req,res)=>{
    //   const userNames=await Post.find({}).sort({createdAt:-1})
    //   res.status(200).json(userNames)
    // },
    


    create:async (req, res) => {
      Post.create({
        userName:req.body.userName,
        
    })
    .then((doc)=>console.log(doc))
    .catch((err)=>console.log(err));},



    getPosts:async (req, res) => {
      Post.find()
        .then(items=>res.json(items))
        .catch((err)=>console.log(err))
  },
    deletePost:(req, res) => {
      Post.findByIdAndDelete({_id:req.params.id})
      .then((doc)=>console.log(doc))
      .catch((err)=>console.log(err))
      
      
      res.redirect('back');
        
},
update:(req, res) => {
  Post.findByIdAndUpdate({_id:req.params.id},{
    title:req.body.title,
    description:req.body.description
  })
  .then((doc)=>console.log(doc))
      .catch((err)=>console.log(err))
    
},
  };
  