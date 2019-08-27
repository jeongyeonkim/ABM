const Router = require('koa-router');

const api = new Router();
const books = require('./join');

api.use('/join', books.routes());

module.exports = api;