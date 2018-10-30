const Koa = require('koa')
const app = new Koa()
const cors = require('koa2-cors');
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const session = require('koa-session');
const koaBody = require('koa-body');
const logger = require('koa-logger')
const index = require('./routes/index')
const users = require('./routes/users')
const post = require('./routes/post')
// const mongoStore = require('./models/sessionStore');
const config = require('./config/index');
const mongoose = require('mongoose')
const path = require('path')
console.log(config.mongodb_url);
mongoose.connect(config.mongodb_url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// error handler
onerror(app)


// middlewares
app.use(json())
app.use(logger())
// app.use(require('koa-static')(__dirname + './public'))

app.use(require('koa-static')('.'));

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

app.keys = ['some secret hurr'];

app.use(session({
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //不允许浏览器中的js代码来获取cookie，避免遭到一些恶意代码的攻击。 (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
  //  store: new mongoStore({//外部存储
  //   collection: 'sessions', //数据库集合
  //   connection: db,     // 数据库链接实例
  //   expires: 86400, // 默认时间为1天
  //   name: 'session' // 保存session的表名称
  //  })
  },app));


// app.use(bodyparser({
//   enableTypes:['json', 'form', 'text']
// }))


// logger
app.use(async (ctx, next) => {
  ctx.set("Access-Control-Allow-Origin","*");
  ctx.set("Access-Control-Allow-Headers","X-request-With");
  ctx.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

//pre handle user
app.use(async(ctx,next)=>{
  let _user = ctx.session.user;
  if(_user){ app.locals.user = _user;}
   await next();
})


//cors
app.use(cors({
  origin: function(ctx) {
    if (ctx.url === '/test') {
      return false;
    }
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 7 * 24 * 60 * 60,// 7 days 预请求头有效期
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(koaBody({
  multipart: true,  // 允许上传多个文件
  formidable: { 
      uploadDir:config.uploadDir,// 上传的文件存储的路径 
      keepExtensions: true  //  保存图片的扩展名
  }
}));

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(post.routes(), post.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

// if(app.get('env') ==='development'){
//   app.setMaxListeners('showStackError',true)
//   app.locals.pretty = true
//   mongoose.set('debug',true)
// }
module.exports = app
