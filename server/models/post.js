"use strict"

const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      moment  = require('moment');
const schema = new Schema({
    title: String,
    body: String,
    category:String,
    tags:{
        type:Array,
        default:[]
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    lastEditTime: {
        type: Date,
        default: Date.now
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
schema.virtual('createAt').get(function () {
    return moment(this.createTime).format('YYYY-MM-DD HH:MM');
});
schema.virtual('updateAt').get(function () {
    return moment(this.lastEditTime).format('YYYY-MM-DD HH:MM');
});
module.exports = mongoose.model('Post', schema);
