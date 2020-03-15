const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const PORT = process.env.PORT || 3001;
const ENV = process.env.NODE_ENV || 'development';
const logger = require('koa-logger');
const cors = require('@koa/cors');

app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes());

app.listen(PORT, (err) => {
  if (err) console.error('❌ Unable to connect the server: ', err);
  console.log(`🌍 Server listening on port ${PORT} - ${ENV} environment`);
});
module.exports = app;
