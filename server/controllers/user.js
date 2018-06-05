const User = require('../models/user');
const dbHelper = require('./dbHelper');
exports.check = async(ctx, next)=>{
    let {username,password}=ctx.request.body;
    let query = User.findOne({
        username ,
        password
    });
    let result= await dbHelper.Check(query);

    ctx.response.body = result;
    
}
