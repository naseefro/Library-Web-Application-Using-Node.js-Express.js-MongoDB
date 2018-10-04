const express=require('express');
const publishersRouter=express.Router();

function router(nav){
    var publishers=[
        {
           
            "author": "Marijn Haverbeke",
            "country":"Germany",
            "books":"Eloquent JavaScript: A Modern Introduction to Programming",
            "images":"/img/MarijnHaverbeke.jpg"
        },
        {
            
            "author": "Addy Osmani",
            "country":"United States",
            "books":"Learning JavaScript Design Patterns,HTML5 Multimedia Developer's Guide",
            "images":"/img/AddyOsmani.jpg"
    
        },
        {
            "author": "Axel Rauschmayer",
            "country":"Germany",
            "books":"Speaking JavaScript",
            "images":"/img/AxelRauschmayer.jpg"
    
        },
        {
    
            "author": "Eric Elliott",
            "country":"United States",
            "books":"Programming JavaScript Applications,Yum‡yk Yum‡yk Long Ago (University of California Publications in Linguistics)",
            "images":"/img/EricElliott.jpg"
        },
        {
    
            "author": "Nicholas C. Zakas",
            "country":"United States",
            "books":"Professional Ajax (Programmer to Programmer),Understanding ECMAScript 6,Professional JavaScript for Web Developers (Wrox Professional Guides)",
            "images":"/img/NicholasCZakas.jpg"
        },
        {
           
            "author": "Kyle Simpson",
            "country":"United States",
            "books":"You Don't Know JS: Async & Performance,You Don't Know JS: Types & Grammar,You Don't Know JS: ES6 & Beyond,You Don't Know JS: Up & Going,You Don't Know JS: this & Object Prototypes",
            "images":"/img/KyleSimpson.jpg"
        }
    ];
    publishersRouter.route('/')
    .get((req,res)=>{
      res.render(
          'publishers',
          {
              nav,
              title:"Publishers List",
              publishers
          }
      );
  });
 
  publishersRouter.route('/:id')
    .get((req,res)=>{
  
      const id=req.params.id;
  
      res.render(
          'publisher',
          {
              nav,
              title:"publishers List",
              publisher:publishers[id]
          }
      );
  });
  return publishersRouter;
}

module.exports=router;