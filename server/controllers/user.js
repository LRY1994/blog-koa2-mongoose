const userHelper = require('../dbhelper/userHelper');
exports.check = async(ctx, next)=>{
   
    let data = await userHelper.findUser(ctx.request.body)

    ctx.response.body = data;
    
}
