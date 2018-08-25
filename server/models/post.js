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
    },{
        toJSON: {virtuals: true},//必须有这一行,下面的virtual才会取得到
        timestamps: {//让MongoDB自动生成和管理createTime和updateTime字段的值
             createdAt: 'createTime', 
             updatedAt: 'lastEditTime' 
        }
    }
);
//格式化用mongoose获取的日期
PostSchema.virtual('createAt').get(function () {
    return moment(this.createTime).format('YYYY-MM月-DD HH:mm');
});
PostSchema.virtual('updateAt').get(function () {
    return moment(this.lastEditTime).format('YYYY-MM-DD HH:mm');
});

PostSchema.pre('save',function(next){
    if(this.isNew){
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
