var Category =require('../models/category')
exports.save = (ctx,next)=>{
    let _category = ctx.body.category;
  
    let category = new Category(_category);
    category.save(function(err,category){
        if(err){console.log(err)}
        res.redirect('/post/id');
    })
    
    
}