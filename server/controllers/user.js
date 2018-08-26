const User = require('../models/user');
const dbHelper = require('./dbHelper');
//signin
exports.signin = async(ctx, next)=>{
    let {username,password}=ctx.request.body;
    let query = User.findOne({
        username ,
        password
    });
    let result= await dbHelper.Check(query);

    // User.findOne({username},function(err,user){
    //     if(err) console.log(err);
    //     if(!user){ result="code.none"};
    //     user.comparePassword(password,function(err,isMatch){
    //         if(err) console.log(err);
    //         if(isMatch){
    //             ctx.session.user = user;
    //             result ="code.ok"
    //         }else{
    //             result = "code.err"
    //         }
    //     })
    // })
         


    ctx.response.body = result;
    
}

exports.signup = (ctx,next)=>{
    let _user = ctx.request.body.user;
    User.findOne({name:_user.name},function(err,user){
        if(err) console.log(err)
        if(user){ return ctx.response.redirect('/')}
        else{
            let user = new User(_user)
            user.save(function(err,user){
                if(err) console.log(err);
                return ctx.response.redirect('/')
            })
        }
    })
}
exports.logout = (ctx,next)=>{
    delete ctx.session.user;

    ctx.response.redirect('/')
}
