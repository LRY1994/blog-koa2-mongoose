"use strict"
const mongoose = require('mongoose'),
bcrypt = require('bcrypt-nodejs'),//加盐算法
SALT_WORK_FACTOR = 10;
const userSchema = new mongoose.Schema({
  username:{
    unique:true,
    type:String,
  },
  password:String,
  meta:{
    createdAt:{
        type:Date,
        default:Date.now()
    },
    updateAt:{
        type:Date,
        default:Date.now()
    }
}
});

userSchema.pre('save',function(next){
  let user = this;
  if(this.isNew){//Document.prototype.isNew  mongoose自己会识别
      this.meta.createdAt = this.updateAt=Date.now()
  }else{
      this.meta.updateAt = Date.now();
  }
  bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){//加密工作放在后端
      if(err) return next(err);
      bcrypt.hash(userSchema.password,salt,function(err,hash){
        if(err) return next(err);
        user.password = hash;
      })
  });
  next();
});

userSchema.methods = {
    comparePassword:function(_password,cb){
        bcrypt.compare(_password,this.password,function(err,isMatch){
            if(err) return cb(err);
            cb(null,isMatch)
        })
    }
}
module.exports = mongoose.model('User', userSchema);
