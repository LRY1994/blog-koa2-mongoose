"use strict"
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const userSchema = new Schema({
  username:String,
  password:String,
  // avatar:String,
  // createTime: String
});
module.exports = mongoose.model('User', userSchema);
