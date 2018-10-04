const express=require('express');
const AuthorData=require('../model/AuthorData');
const addAuthorRouter=express.Router();
function router(nav){
    addAuthorRouter.route('/')
    .get((req,res)=>{
      res.render(
          'addAuthor',
          {
              nav,
              title:"Add Authors"
          }
      );
  });
  addAuthorRouter.route('/add')
    .get((req,res)=>{
     var item={
        author: req.param("author"),
        country: req.param("country"),
        books:req.param("books"),
        images:req.param("images")
     }
     var author=new AuthorData(item);
     author.save();
     res.redirect('/authors');

  });
  
  
  return addAuthorRouter;
}
module.exports=router;