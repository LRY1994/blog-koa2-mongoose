"use strict"
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const schema = new Schema({
    title: String,
    body: String,
    createTime: {
        type: Date,
        default: Date.now
    },
    lastEditTime: {
        type: Date,
        default: Date.now
    },
    
});
module.exports = mongoose.model('Post', schema);
