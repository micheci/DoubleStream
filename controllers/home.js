const Post=require("../models/Post")

module.exports = {
    getIndex: (req, res) => {
      res.send("Express");
    },
    


    create:async (req, res) => {
      Post.create({
        title:req.body.title,
        description:req.body.description,
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
  