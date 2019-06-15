const Koa = require("koa");
const app = new Koa();
app.use(async (ctx, next)=> {
	ctx.body = '电影首页';
})
app.listen(4455);

// new koa 做了什么

// use 做了什么

// listen 做了什么

