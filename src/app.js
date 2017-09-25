// /**
//  * Created by yanshi0429 on 2017/9/22.
//  */
const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');

app.use(bodyParser());

router.get('/', ctx => {
    ctx.body = 'Hello Koa app!';
});
app
    .use(router.routes())
    .use(router.allowedMethods());

const server = app.listen(3000, () => {
        console.log(`server is started... 3000`);
});

module.exports = server;