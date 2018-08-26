"use strict"

const mongoose = require('mongoose'),
Schema  = mongoose.Schema,
ObjectId = Schema.Types.ObjectId;

const CommentSchema = new Schema({
    post:{type:ObjectId ,ref:"Post"},
    from :{type:ObjectId, ref :"User"},
    content: String,
    reply:[{
        from :{type:ObjectId, ref :"User"},
        to :{type:ObjectId, ref :"User"},
        content: String,
    }],//回复
    meta:{
        createdAt:{
            type:Date,
            default:Date.now()
        },updateAt:{
            type:Date,
            default:Date.now()
        }
    }
    }
);

CommentSchema.pre('save',function(next){
    if(this.isNew){//Document.prototype.isNew  mongoose自己会识别
        this.meta.createdAt = this.updateAt=Date.now()
    }else{
        this.meta.updateAt = Date.now();
    }
    next();
})

module.exports = mongoose.model('Comment', CommentSchema);
