"use strict"

const mongoose = require('mongoose'),
Schema  = mongoose.Schema,
ObjectId = Schema.Types.ObjectId;

const CategorySchema = new Schema({
    name:String,
    posts:[{type:ObjectId ,ref:"Post"}],
   
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

CategorySchema.pre('save',function(next){
    if(this.isNew){//Document.prototype.isNew  mongoose自己会识别
        this.meta.createdAt = this.updateAt=Date.now()
    }else{
        this.meta.updateAt = Date.now();
    }
    next();
})

module.exports = mongoose.model('Category', CategorySchema);
