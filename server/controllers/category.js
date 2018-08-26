var Category =require('../models/category')
exports.save = (ctx,next)=>{
    let _category = ctx.body.category;
  
    let category = new Category(_category);
    category.save(function(err,category){
        if(err){console.log(err)}
        res.redirect('/post/id');
    })
    
    
}

exports.search = (ctx,next)=>{
    let {offset,limit,cid,keyword} = ctx.query;
    if(cid){
        Category
        .findById(cid)
        .populate({
            path:"posts",
            select:"title updateAt createAt",
            options:{//分页,听说这个不好用，没试过
                limit:limit,
                skip:offset
            }
        })
        .exec(function(err,category){
            if(err){console.log(err)}
            let result = category.posts.slice(offset,offset+limit);//options两者取一
            res.redirect('/post/id');
        })
    }else{
        Post.find({title:new RegExp(keyword+'.*','i')})
    }
    
    
    
}