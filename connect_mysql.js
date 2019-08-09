var mysql = require('koa-mysql');
 
// Create a MySQL connection pool (do this once)
var db = mysql.createPool({ user: 'root', password: '', database: 'test', host: 'localhost' });
 
// Execute a sample query (with params)
var rows = yield db.query("select ? + ? as test", [1, 2]);
 
// Output test result (3)
this.body = { test: rows[0].test };