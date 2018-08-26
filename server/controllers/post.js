
const Post = require('../models/post');
const fs = require('fs');
const dbHelper = require('./dbHelper');
 const config = require('../config/index');
const uploadDir=config.upload_dir;


function upload(files,title){  
    let imgList=[],file,url,name;
    
    files = files['file'];//关键！！！！！！
    
    if(files.length){//如果是一个数组
        for(let index in files){
            file = files[index];     

            url=`uploads/${title}-${file.name}`;
            name =`${title}-${file.name}`;
            fs.createReadStream(file.path).pipe(fs.createWriteStream(url))
        
            imgList.push([index,name]);
        }
    }else{   
        file = files;        
        url=`uploads/${title}-${file.name}`;
        name =`${title}-${file.name}`;
        fs.createReadStream(file.path).pipe(fs.createWriteStream(url))
        imgList.push([0,name]);
    }
     
     return imgList;
   
}
exports.add = async(ctx, next)=>{
    let {title,body,tags,category}=ctx.request.body;
    let files = ctx.request.files;//重点

    let imgList = upload(files,title);

    let post = new Post({
        title,
        body,
        tags,
        category,
        imgList
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
    
    let keyword,query,result;

    if( ctx.query.keyword){
       keyword = ctx.query.keyword; 
       query = Post.find({
        $or:[{
            title: /.*${keyword}.*/i,
            body: /.*${keyword}.*/i
        }]
        },
        'title category tags createAt updateAt _id');
    }else{
         query = Post.find({},'title category tags createAt updateAt  _id');
    }
    
    
    result= await dbHelper.Exec(query);
    ctx.response.body = result;   
}
exports.detail = async(ctx, next)=>{
    let query = Post.findById(ctx.query.postId);
    let result= await dbHelper.Exec(query);
    ctx.response.body = result;   


    // Post.findById(ctx.query.postId,function(err,post){
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

    let update = Post.findByIdAndUpdate(
       id,
       { title,body ,tags,category},
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
