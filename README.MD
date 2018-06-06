参考

[SimpleMDE编辑器 + 提取HTML + 美化输出](https://segmentfault.com/a/1190000009469890)

[用 vue koa 和mongo 撸了个人博客和博客管理网站](https://segmentfault.com/a/1190000007004199)

[前端 vue+后端 koa，全栈式开发 bilibili 首页](https://www.v2ex.com/t/357255)

[分享我个人学习项目：系统管理平台（基于vue，koa2前后端分离）](http://cnodejs.org/topic/5a66b313ce45d44045146277 )

[koa+mongoose实现简单增删改查接口](https://www.cnblogs.com/junhua/p/7714572.html)

[koa2从起步到填坑](https://www.jianshu.com/p/6b816c609669)

[vue使用highlight.js](https://www.jianshu.com/p/6c1e4fcc6d6f)

### 2018-5-22

windows下查找特定端口
```
cd c:\WINDOWS\system32\ 
netstat -aon|findstr "3000"
```

``W:\MongoDB\bin\mongod --dbpath W:\MongoDB\data`` 运行 MongoDB 服务器

``mongo `` 连接MongoDB

一些常用命令
```
show dbs
use ...
db.dropDatabase()
show collections
db.collection.drop()
db.users.find().pretty()
```
* Vue准备
```
npm install -g @vue/cli
vue init webpack  admin 
npm i --registry https://registry.npm.taobao.org
```
安装``sass-loader\node-sass\axios\element-ui``

* Koa2准备
```
npm install -g koa-generator 
koa2 server //创建koa2项目
```
 安装``koa-router\mongoose\koa2-cors``


``co ``模块可以将异步解放成同步。co 函数接受一个 generator 函数作为参数，在函数内部自动执行 yield 。(没用这个在别处看到)



``npm install --save koa-router``

koa-router在处理post请求时，koa无法解析http请求体中的数据，这时我们需要引入另外一个模块叫做``koa-bodyparser``。
引入``bodyparser``之后需要注册到app对象上，且在router之前注册，然后才可能在router的post请求的处理函数中获取http请求体中的数据。

### 2018-5-23

``npm install --save koa2-cors``

koa2-cors 解决跨域问题
```
Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
https://github.com/zadzbw/koa2-cors 
```
* axios

如果没有``type=file``的控件，用默认的``application/x-www-form-urlencoded``就可以了。
 但是如果有``type=file``的话，就要用到``multipart/form-data``了。

 要给``ctx.response.body``赋值，否则会404

``withCredentials:true`` 代表请求带cookies

### 2018-5-31
``npm install md5 --save``密码加密

``npm install mavon-editor --save``富文本编辑器

### 2018-6-5
这两点很重要

axios传data   ---> 用ctx.request.body提取

axios传params ---> 用ctx.query提取

mongose用_id查询的话用``findById(id)``.

``npm install marked --save ``  md转化成html

``npm install hightlight.js --save `` 高亮代码块

### 2018-6-6
``npm install moment --save `` 格式化日期

使用mongoose的``timestamp``/``virtual``

让MongoDB自动生成和管理createTime和updateTime字段的值，参考：[Mongoose Schemas中定义日期以及timestamps选项的妙用](https://www.cnblogs.com/duhuo/p/6232534.html)

格式化Date使用schema.virtual。参考
[mongoose Schema设置virtual属性不起作用](https://cnodejs.org/topic/5532466b1b9662da568db904)