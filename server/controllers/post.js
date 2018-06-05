
const Post = require('../models/post');
const dbHelper = require('./dbHelper');
exports.add = async(ctx, next)=>{
    let {title,body}=ctx.request.body;
    let post = new Post({
        title,
        body
    })

    let result= await dbHelper.ExecSave(post);
    ctx.response.body = result;    
}
exports.list = async(ctx, next)=>{
    let query = Post.find({},'title createTime lastEditTime _id');
    let result= await dbHelper.ExecQuery(query);

    ctx.response.body = result;
    
}
exports.get = async(ctx, next)=>{
    let query = Post.findById(ctx.query.postId);
     console.log(`ctx.query.postId:${ctx.query.postId}`)
    let result= await dbHelper.ExecQuery(query);

    ctx.response.body = result;
    
}
exports.del = async(ctx, next)=>{
   
    
}
exports.edit = async(ctx, next)=>{
   

    ctx.response.body = result;
    
}