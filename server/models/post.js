"use strict"

const mongoose = require('mongoose'),
      moment  = require('moment');

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    category:String,
    tags:{
        type:Array,
        default:[]
    },
    imgList:{
        type:Array,
        default:[],
        Of:String
    },
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

PostSchema.pre('save',function(next){
    if(this.isNew){//Document.prototype.isNew  mongoose自己会识别
        this.meta.createdAt = this.updateAt=Date.now()
    }else{
        this.meta.updateAt = Date.now();
    }
    next();
})

PostSchema.statics={
    fetch:function(cb){
        return 
        this.find({})
        .sort('meta.updateAt')
        .exec(cb)
    },
    findById:function(id,cb){
        return this.findOne({_id:id})
        .exec(cb)
    }
}
module.exports = mongoose.model('Post', PostSchema);
