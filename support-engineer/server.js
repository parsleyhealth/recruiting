require('koa-json-error');
require('koa-handle-error');
const sqlite = require('sqlite');
const Koa = require('koa');
const Router = require('koa-router');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const koaRes = require('koa-res');
const people = require('./controllers/people');
const sessions = require('./controllers/sessions');

const PORT = 3000;
const DB_PATH = './data/parsley.db';

const server = new Koa();
const router = new Router();

exports.server = server;

const main = async () => {
  const db = await sqlite.open(DB_PATH);

  // Error handling
  server.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  });

  // Logging
  server.use(logger());

  // Request parsing
  server.use(bodyParser());

  // Format responses as JSON
  server.use(convert(koaRes()));

  // Routes
  router
    .get('/', async ctx => {
      ctx.body = 'It works!';
    })
    .get('/people', people.allPeople(db))
    .get('/people/:id', people.getPersonById(db))
    .post('/log-in', sessions.logIn(db));

  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(PORT);
  console.log('Server started at: http://localhost:3000/');
};

main();
