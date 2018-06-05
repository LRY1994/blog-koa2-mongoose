
const Post = require('../models/post');
const dbHelper = require('./dbHelper');
exports.add = async(ctx, next)=>{
    let {title,body}=ctx.request.body;
    let post = new Post({
        title,
        body
    })
    let result= await dbHelper.Save(post);
    ctx.response.body = result;    
}
exports.list = async(ctx, next)=>{
    let query = Post.find({},'title createTime lastEditTime _id');
    let result= await dbHelper.Exec(query);
    ctx.response.body = result;   
}
exports.get = async(ctx, next)=>{
    let query = Post.findById(ctx.query.postId);
    let result= await dbHelper.Exec(query);
    ctx.response.body = result;   
}
exports.edit = async(ctx, next)=>{
    let id = ctx.query.postId,
        {title,body}=ctx.request.body;

    let update = Post.findByIdAndUpdate(
       id,
       { title,body },
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