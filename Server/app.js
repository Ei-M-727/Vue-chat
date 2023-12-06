const Koa = require('koa');
const Router = require("koa-router");

const swaggerUI = require('koa2-swagger-ui').koaSwagger;
const swaggerSpec = require('./swagger');
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');
const session = require("koa-session");
const cors = require("koa2-cors");

const index = require('./routes/index');
const user = require('./routes/user');
const friendly = require("./routes/friendly");
const upload = require("./routes/upload");
const group = require("./routes/group");


const { authJwt } = require("./utils/jwt");
//导入数据库连接文件
const { connect } = require("./utils/connect");

const app = new Koa();

const router = new Router();

// error handler
onerror(app);
//session配置
app.use(
  cors({
    origin: function (ctx) {
      return ctx.header.origin;
    },
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,//标示该响应是合法的
  })
);


// router.get(
//   '/swagger',
//   swaggerUI({
//     routePrefix: false,
//     swaggerOptions: {
//       spec: swaggerSpec,
//     },
//   })
// );

// swagger
router.get(
  '/swagger',
  swaggerUI({
    routePrefix: false,
    swaggerOptions: {
      spec: swaggerSpec,
    },
  })
);



const CONFIG = {
  key: "sessionId",
  maxAge: 1000 * 60,//cookie的过期时间 60000ms=>60s=>1min
  httpOnly: true,//true 表示只有服务器端可以获取cookie
};
app.keys = ["session secret"];//设置签名的cookie密钥
app.use(session(CONFIG, app));




// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/public'));

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}));




// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});




// routes
// app.use(index.routes(), index.allowedMethods());
// app.use(user.routes(), user.allowedMethods());
router.use("/api/user", user.routes());//用户相关
router.use("/api/friendly", authJwt, friendly.routes());
router.use("/api/upload", authJwt, upload.routes());
router.use("/api/group", authJwt, group.routes());

router.use("/", index.routes());
//加载路由中间件
app.use(router.routes()).use(router.allowedMethods());




// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

//立即执行函数
(async () => {
  await connect();//执行连接数据库任务
})();


module.exports = app;
