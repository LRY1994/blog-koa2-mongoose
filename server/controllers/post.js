
const Post = require('../models/post');
const fs = require('fs');
const path  = require('path');
const dbHelper = require('./dbHelper');
 const config = require('../config/index');
const {upload_dir,host,port}=config;
const moment =require('moment')

exports.upload = async(ctx, next)=>{
    let file = ctx.request.files.file;  
    let t = moment(Date.now()).format('YYMMDD');
    let  url=`${upload_dir}/${t}-${file.name}`;
    fs.createReadStream(file.path).pipe(fs.createWriteStream(url));
    ctx.response.body = `${host}:${port}/${url}`;
}
exports.new = async(ctx, next)=>{
    let {title,body,tags,category}=ctx.request.body;
   
    let post = new Post({
        title,
        body,
        tags,
        category
    })
    let result= await dbHelper.Save(post);
    ctx.response.body = result;    
}
exports.list = async(ctx, next)=>{
    // Post.fetch(function(err,res){
    //     if(err){
    //         console.log(err);
    //     }
    // })
    
    let keyword,query,result=[];

    if( ctx.query.keyword){
       keyword = ctx.query.keyword; 
       query = Post.find({    
            body: new RegExp(`.*${keyword}.*`,'i')    
        }).sort('-meta.updateAt');
    }else{
         query = Post.find({}).sort('-meta.updateAt');
    }
    
    result= await dbHelper.Exec(query);     
    ctx.response.body = result;

}
exports.get = async(ctx, next)=>{
    
    let id =ctx.query.postId;
    let query = Post.findById(id);

    //{$inc:{pv:1}}表示每次增加1
    let update = Post.update({_id:id},{$inc:{pv:1}});
    dbHelper.Exec(update);

    let result= await dbHelper.Exec(query);
    ctx.response.body = result;
 
    // Post.findById(id,function(err,post){
    //     Comment.find({post:id})
    //     .populate('from','name')
    //     .populate('reply.from reply.to','name')
    //     .exec(function(err,comments){
    //         ctx.response.body = {post,comments}
    //     })
    // })

}
exports.update = async(ctx, next)=>{
    let id = ctx.query.postId,
        {title,body,tags,category}=ctx.request.body;

    let update = Post.findOneAndUpdate(
       {_id:id},
       { title,body ,tags,category,'meta.updateAt':Date.now()},
       { new :true } // true to return the modified document rather than the original.
    );   

    let result= await dbHelper.Exec(update);
    ctx.response.body = result;  
}
exports.del = async(ctx, next)=>{
    let del = Post.findByIdAndDelete(ctx.query.postId);
    let result= await dbHelper.Exec(del);
    ctx.response.body = result;
    
}
