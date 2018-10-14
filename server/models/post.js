"use strict"

const mongoose = require('mongoose'),
      moment  = require('moment'),
      Schema  = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;
const PostSchema = Schema({
    title: String,
    body: String,
    category:String,
    pv:{
        type:Number,
        default:0
    },
    // category:{type:ObjectId,ref:"Category"},
    tags:{
        type:Array,
        default:[]
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
        this.meta.createdAt = this.meta.updateAt=Date.now()
    }else{
        this.meta.updateAt = Date.now();
    }
    next();
})


// Think of a static like an "override" of an "existing" method
PostSchema.statics={
    fetch: function(query){
       
       return  this.find(query).sort('-meta.updateAt')
      
    },
    // findById:function(id,cb){
    //     return this.findOne({_id:id})
    //     .exec(cb)
    // }
}
module.exports = mongoose.model('Post', PostSchema);

