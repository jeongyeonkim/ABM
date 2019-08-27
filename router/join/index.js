const Router = require('koa-router');

const join = new Router();
const booksCtrl = require('./aa');

join.get('/', booksCtrl.list);
join.post('/', booksCtrl.create);
join.delete('/', booksCtrl.delete);
join.put('/', booksCtrl.replace);
join.patch('/', booksCtrl.update);

module.exports = join;