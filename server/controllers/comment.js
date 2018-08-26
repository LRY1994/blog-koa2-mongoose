var Comment =require('../models/comment')
exports.save = (req,res)=>{
    let _comment = req.bofy.comment;
    let postId = _comment.post;

    if(_comment.cid){//如果是回复
        Comment.findById(_comment.cid,function(err,comment){
            let reply = {
                from:_comment.from,
                to:_comment.to,
                content:_comment.content
            }
            comment.reply.push(reply);
        })
        res.redirect('/post/id');
    }
    else{
        let comment = new Comment(_comment);
        comment.save(function(err,comment){
            if(err){console.log(err)}
            res.redirect('/post/id');
        })
    }
    
}